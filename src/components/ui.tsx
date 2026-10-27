import type { ReactNode } from 'react'
import { useOpenLeadModal } from './LeadModal'

export function Eyebrow({ children, className = 'text-teal' }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>
}

export function CtaButton({ label, className = '' }: { label: string; className?: string }) {
  const open = useOpenLeadModal()
  return (
    <button type="button" onClick={open} className={`btn-teal ${className}`}>
      {label}
      <span aria-hidden="true" className="text-xl font-normal">
        ↗
      </span>
    </button>
  )
}
