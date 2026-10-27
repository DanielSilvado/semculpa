/**
 * Recebe os cadastros da página "O Mapa do Posicionamento" e grava na planilha.
 * Instalação: ver apps-script/README.md.
 */
/** Planilha de leads da aula (o ID é o trecho entre /d/ e /edit no link). */
const SPREADSHEET_ID = '1T1UNEdkxrXO6o11alni8e8TMqoWTJF_7T3fzHZuZZEE'
const SHEET_NAME = 'Leads'
const HEADERS = [
  'Data/hora',
  'Nome',
  'WhatsApp',
  'WhatsApp digitado',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'fbclid',
  'gclid',
  'Página',
  'Event ID',
]

function doPost(e) {
  const lock = LockService.getScriptLock()
  lock.waitLock(10000)
  try {
    const data = JSON.parse(e.postData.contents)
    const origem = data.origem || {}
    const sheet = getSheet_()
    sheet.appendRow([
      new Date(),
      clean_(data.nome),
      clean_(data.whatsapp),
      clean_(data.whatsappDigitado),
      clean_(origem.utm_source),
      clean_(origem.utm_medium),
      clean_(origem.utm_campaign),
      clean_(origem.utm_content),
      clean_(origem.utm_term),
      clean_(origem.fbclid),
      clean_(origem.gclid),
      clean_(data.pagina),
      clean_(data.eventId),
    ])
    return json_({ ok: true })
  } catch (err) {
    return json_({ ok: false, error: String(err) })
  } finally {
    lock.releaseLock()
  }
}

function getSheet_() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID)
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME)
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS)
    sheet.setFrozenRows(1)
  }
  return sheet
}

/** Texto curto e sem fórmula: "+55..." ou "=..." viraria fórmula na planilha. */
function clean_(value) {
  const text = String(value == null ? '' : value).slice(0, 300)
  return /^[=+\-@]/.test(text) ? "'" + text : text
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON)
}
