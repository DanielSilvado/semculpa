/** Telefone começando com + é tratado como número de fora do Brasil (formato livre). */
const isInternational = (v: string) => /^\s*\+/.test(v)

/** Máscara (11) 98765-4321 para o Brasil; com + na frente, só dígitos. */
export function maskPhone(value: string): string {
  let n = value.replace(/\D/g, '')
  if (isInternational(value)) return '+' + n.slice(0, 15)
  if ((n.length === 12 || n.length === 13) && n.startsWith('55')) n = n.slice(2)
  n = n.slice(0, 11)
  if (n.length === 0) return ''
  if (n.length <= 2) return `(${n}`
  if (n.length <= 6) return `(${n.slice(0, 2)}) ${n.slice(2)}`
  if (n.length <= 10) return `(${n.slice(0, 2)}) ${n.slice(2, 6)}-${n.slice(6)}`
  return `(${n.slice(0, 2)}) ${n.slice(2, 7)}-${n.slice(7)}`
}

export function isValidPhone(value: string): boolean {
  const n = value.replace(/\D/g, '')
  if (isInternational(value)) return n.length >= 8 && n.length <= 15
  return (n.length === 10 || n.length === 11) && !n.startsWith('0')
}

/** Número no formato internacional (+5511987654321) para a planilha. */
export function normalizePhone(value: string): string {
  const n = value.replace(/\D/g, '')
  return isInternational(value) ? `+${n}` : `+55${n}`
}
