import { Fragment, type ReactNode } from 'react'

/**
 * Converte marcações simples do content.ts em elementos:
 *   *texto*   → <em> (itálico verde)
 *   **texto** → <strong>
 *   \n        → quebra de linha
 */
export function rich(text: string, opts: { em?: string; strong?: string } = {}): ReactNode[] {
  const out: ReactNode[] = []
  const re = /\*\*(.+?)\*\*|\*(.+?)\*|\n/g
  let last = 0
  let m: RegExpExecArray | null
  let i = 0
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(<Fragment key={i++}>{text.slice(last, m.index)}</Fragment>)
    if (m[1] !== undefined) {
      out.push(
        <strong key={i++} className={opts.strong ?? 'font-bold'}>
          {m[1]}
        </strong>,
      )
    } else if (m[2] !== undefined) {
      out.push(
        <em key={i++} className={opts.em ?? 'italic text-teal'}>
          {m[2]}
        </em>,
      )
    } else {
      out.push(<br key={i++} />)
    }
    last = m.index + m[0].length
  }
  if (last < text.length) out.push(<Fragment key={i++}>{text.slice(last)}</Fragment>)
  return out
}
