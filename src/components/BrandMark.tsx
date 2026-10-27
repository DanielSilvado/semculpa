import { event } from '../content'

const TONES = {
  light: { label: '#326a69', title: '#1e3048', accent: '#326a69', icon: '#ae8e5b' },
  dark: { label: '#7fb3ae', title: '#fbf8f2', accent: '#d5b987', icon: '#d5b987' },
}

/** Marca da aula, no mesmo desenho da marca da Imersão Posicione-se Sem Culpa. */
export function BrandMark({ className = '', tone = 'light' }: { className?: string; tone?: keyof typeof TONES }) {
  const c = TONES[tone]
  return (
    <svg viewBox="0 0 480 120" role="img" aria-label={`Aula gratuita: ${event.name}`} className={className}>
      <g fill="none" stroke={c.icon} strokeWidth="2">
        <path d="M65 100H24V47a27 27 0 0 1 54 0v25" />
        <path d="M38 87V48a13 13 0 0 1 26 0v25M53 87h48m-12-11 12 11-12 11" />
      </g>
      <text x="123" y="23" fill={c.label} fontFamily="Arial,sans-serif" fontSize="10" letterSpacing="4">
        AULA GRATUITA
      </text>
      <text x="120" y="62" fill={c.title} fontFamily="Georgia,serif" fontSize="34">
        O Mapa do
      </text>
      <text x="122" y="99" fill={c.accent} fontFamily="Georgia,serif" fontStyle="italic" fontSize="34">
        Posicionamento
      </text>
    </svg>
  )
}

const IMERSAO_TONES = {
  light: { label: '#326a69', title: '#1e3048', accent: '#326a69', icon: '#ae8e5b' },
  dark: { label: '#7fb3ae', title: '#fbf8f2', accent: '#d5b987', icon: '#d5b987' },
}

/** Marca da Imersão Posicione-se Sem Culpa (mesmo desenho da página original). */
export function ImersaoMark({ className = '', tone = 'dark' }: { className?: string; tone?: keyof typeof IMERSAO_TONES }) {
  const c = IMERSAO_TONES[tone]
  return (
    <svg viewBox="0 0 480 120" role="img" aria-label="Imersão Posicione-se Sem Culpa" className={className}>
      <g fill="none" stroke={c.icon} strokeWidth="2">
        <path d="M65 100H24V47a27 27 0 0 1 54 0v25" />
        <path d="M38 87V48a13 13 0 0 1 26 0v25M53 87h48m-12-11 12 11-12 11" />
      </g>
      <text x="123" y="23" fill={c.label} fontFamily="Arial,sans-serif" fontSize="10" letterSpacing="4">
        IMERSÃO
      </text>
      <text x="120" y="64" fill={c.title} fontFamily="Georgia,serif" fontSize="37">
        Posicione-se
      </text>
      <text x="123" y="99" fill={c.accent} fontFamily="Georgia,serif" fontStyle="italic" fontSize="32">
        Sem Culpa
      </text>
    </svg>
  )
}
