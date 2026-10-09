/**
 * Booking backend: Google Apps Script bound to a Google Sheet.
 * Extensions > Apps Script > paste this file > Deploy as Web app.
 */
const SHEET_NAME = 'Bookings';
const HEADERS = ['Timestamp','SlotID','DoctorID','Doctor','Date','Time','Name','Phone','Status','Ref'];
const ALLOWED_DOCTORS = ['d1','d2','d3'];      // نفس ids الأطباء في CONFIG
const NOTIFY_EMAIL = '';                        // اختياري: إيميل لاستلام إشعار بكل حجز

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) sh = ss.insertSheet(SHEET_NAME);
  if (sh.getLastRow() === 0) {
    sh.appendRow(HEADERS);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
  }
  return sh;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function safe_(v, max) {
  let s = String(v == null ? '' : v).trim().slice(0, max || 100);
  return /^[=+\-@]/.test(s) ? "'" + s : s;   // منع حقن الصيغ
}

// GET ?action=booked  ->  { ok:true, booked:[slotIds] }
function doGet(e) {
  try {
    if (e && e.parameter && e.parameter.action === 'booked') {
      const sh = sheet_();
      const last = sh.getLastRow();
      if (last < 2) return json_({ ok: true, booked: [] });
      const rows = sh.getRange(2, 1, last - 1, HEADERS.length).getValues();
      const booked = rows
        .filter(r => String(r[8]).toLowerCase() !== 'cancelled' && r[1])
        .map(r => String(r[1]));
      return json_({ ok: true, booked: booked });
    }
    return json_({ ok: true, service: 'booking' });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

// POST (JSON as text/plain) -> { ok:true, ref } | { ok:false, error }
function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
    const d = JSON.parse(e.postData.contents);

    const slotId = String(d.slotId || '');
    const name = safe_(d.name, 80);
    const phone = String(d.phone || '').replace(/[\s-]/g, '');

    if (!/^[a-z0-9]+_\d{8}_\d{1,4}$/.test(slotId)) return json_({ ok: false, error: 'bad_slot' });
    if (ALLOWED_DOCTORS.indexOf(String(d.doctorId)) < 0) return json_({ ok: false, error: 'bad_doctor' });
    if (name.length < 3) return json_({ ok: false, error: 'bad_name' });
    if (!/^01\d{9}$/.test(phone)) return json_({ ok: false, error: 'bad_phone' });
    if (!/^\d{4}-\d{2}-\d{2}$/.test(String(d.date)) || !/^\d{2}:\d{2}$/.test(String(d.time)))
      return json_({ ok: false, error: 'bad_datetime' });

    const sh = sheet_();
    const last = sh.getLastRow();

    // منع الحجز المزدوج
    if (last >= 2) {
      const rows = sh.getRange(2, 1, last - 1, HEADERS.length).getValues();
      const taken = rows.some(r => String(r[1]) === slotId && String(r[8]).toLowerCase() !== 'cancelled');
      if (taken) return json_({ ok: false, error: 'taken' });
    }

    const row = last + 1;
    const ref = 'BK-' + ('0000' + (row - 1)).slice(-4);
    const range = sh.getRange(row, 1, 1, HEADERS.length);
    range.setNumberFormat('@');   // كل الخانات نص (يحافظ على الصفر في الموبايل)
    range.setValues([[
      new Date().toISOString(), slotId, safe_(d.doctorId, 20), safe_(d.doctorName, 80),
      String(d.date), String(d.time), name, phone, 'Pending', ref
    ]]);
    SpreadsheetApp.flush();

    if (NOTIFY_EMAIL) {
      MailApp.sendEmail(NOTIFY_EMAIL, 'حجز جديد ' + ref,
        d.doctorName + '\n' + d.date + ' ' + d.time + '\n' + name + '\n' + phone);
    }
    return json_({ ok: true, ref: ref });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}
