import { useId, type ReactNode, type Ref } from 'react'
import { useSeen } from '../lib/seen'
import { useOpenLeadModal } from '../components/LeadModal'

/** Rosa dos ventos em fio dourado (herda a cor de `currentColor`). */
export function CompassRose({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="-100 -100 200 200" aria-hidden="true" className={className}>
      <g fill="none" stroke="currentColor">
        <circle r="97" strokeWidth=".7" />
        <circle r="90" strokeWidth=".5" strokeDasharray="1 3" />
        <path d="M0-97V97M-97 0H97M-69-69 69 69M69-69-69 69" strokeWidth=".5" opacity=".35" />
        <path d="M0-93 8-8 0 0-8-8ZM0 93 8 8 0 0-8 8ZM-93 0-8-8 0 0-8 8ZM93 0 8-8 0 0 8 8Z" strokeWidth=".8" fill="currentColor" fillOpacity=".12" />
        <path d="M0-93 8-8 0 0Z" fill="currentColor" fillOpacity=".55" stroke="none" />
      </g>
      <g fill="currentColor" fontFamily="Georgia, serif" fontSize="9" textAnchor="middle">
        <text y="-76">N</text>
        <text y="83">S</text>
        <text x="-79" y="3">O</text>
        <text x="79" y="3">L</text>
      </g>
    </svg>
  )
}

/** Alfinete de mapa com rótulo. */
export function Pin({
  children,
  tone = 'gold',
  className = '',
  ref,
}: {
  children: ReactNode
  tone?: 'gold' | 'teal'
  className?: string
  ref?: Ref<HTMLSpanElement>
}) {
  return (
    <span ref={ref} className={`alfinete ${tone === 'teal' ? 'alfinete-teal' : ''} ${className}`}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
      </svg>
      {children}
    </span>
  )
}

/**
 * Linha pontilhada que se desenha ao aparecer. Os pontos ficam no traço de
 * baixo; uma máscara de traço contínuo vai revelando o caminho do início ao fim.
 */
export function Trail({ d, viewBox, drawn, className = '' }: { d: string; viewBox: string; drawn: boolean; className?: string }) {
  const id = useId()
  return (
    <svg viewBox={viewBox} aria-hidden="true" className={`trilha ${drawn ? 'trilha-desenhada' : ''} ${className}`}>
      <mask id={id} maskUnits="userSpaceOnUse">
        <path d={d} pathLength={1} className="trilha-mascara" />
      </mask>
      <path d={d} mask={`url(#${id})`} className="trilha-pontos" />
    </svg>
  )
}

/** Trecho curto e sinuoso da rota (celular e destino). */
export function ShortTrail({ drawn, className = '' }: { drawn: boolean; className?: string }) {
  return <Trail d="M20 0C38 25 2 55 20 90" viewBox="0 0 40 90" drawn={drawn} className={`h-[90px] w-10 ${className}`} />
}

/** Trecho da rota entre seções, terminando no alfinete da parada. */
export function RouteStop({ n, label, side = 'left' }: { n: number; label: string; side?: 'left' | 'right' }) {
  const [ref, seen] = useSeen<HTMLDivElement>()
  const x = side === 'left' ? 130 : 470
  const curve = `M300 0C300 45 ${x} 30 ${x} 60S300 80 300 120`
  return (
    <div ref={ref} className="mx-auto mb-5 flex flex-col items-center">
      <ShortTrail drawn={seen} className="min-[900px]:hidden" />
      <Trail d={curve} viewBox="0 0 600 120" drawn={seen} className="hidden h-[120px] w-[600px] min-[900px]:block" />
      <Pin className={`parada ${seen ? 'parada-chegou' : ''}`}>
        <b className="font-mono text-teal">{String(n).padStart(2, '0')}</b> · {label}
      </Pin>
    </div>
  )
}

/** Rótulo dourado com fios dos dois lados. */
export function Label({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow mx-auto flex w-fit items-center gap-3 text-gold-light">
      <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-transparent to-gold-light/70" />
      {children}
      <span aria-hidden="true" className="h-px w-8 bg-gradient-to-l from-transparent to-gold-light/70" />
    </p>
  )
}

/** Botão dourado pulsante que abre a janela de cadastro. */
export function GoldCta({ label, className = '' }: { label: string; className?: string }) {
  const open = useOpenLeadModal()
  return (
    <div className={`moldura-botao w-full max-w-[540px] ${className}`}>
      <button type="button" className="btn-ouro" onClick={open}>
        <span>{label}</span>
      </button>
    </div>
  )
}

const PARTICLES = [
  { left: '8%', duration: 14, delay: 0, size: 4 },
  { left: '18%', duration: 18, delay: 3, size: 3 },
  { left: '31%', duration: 12, delay: 6, size: 4 },
  { left: '44%', duration: 20, delay: 1, size: 5 },
  { left: '57%', duration: 15, delay: 8, size: 3 },
  { left: '69%', duration: 17, delay: 4, size: 4 },
  { left: '81%', duration: 13, delay: 9, size: 5 },
  { left: '92%', duration: 19, delay: 2, size: 3 },
]

/** Partículas douradas subindo devagar ao fundo. */
export function Particles() {
  return (
    <div className="particulas" aria-hidden="true">
      {PARTICLES.map((p) => (
        <i
          key={p.left}
          style={{ left: p.left, width: p.size, height: p.size, animationDuration: `${p.duration}s`, animationDelay: `${p.delay}s` }}
        />
      ))}
    </div>
  )
}

/**
 * Topo do celular: a foto ocupa a largura da tela e se dissolve no fundo, com
 * uma rosa dos ventos grande e apagada saindo da borda (no desktop entra a bússola).
 */
export function MobilePhotoTop({
  src,
  alt,
  width,
  height,
  position,
}: {
  src: string
  alt: string
  width: number
  height: number
  position: string
}) {
  return (
    <div className="relative h-[min(330px,42svh)] w-full shrink-0 overflow-hidden">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        fetchPriority="high"
        decoding="async"
        className="foto-topo entrada-foto h-full w-full object-cover"
        style={{ objectPosition: position }}
      />
      <CompassRose className="entrada-rosa rosa-gira absolute -bottom-[110px] -right-[120px] h-[300px] w-[300px] text-gold-light/50" />
    </div>
  )
}
