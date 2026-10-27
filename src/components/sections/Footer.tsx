import { footer } from '../../content'
import { BrandMark } from '../BrandMark'

export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8 text-center text-xs leading-relaxed text-muted">
      <BrandMark className="mx-auto mb-3 w-[190px]" />
      <p>{footer.line}</p>
      <p className="mx-auto mt-2 max-w-[520px]">{footer.disclaimer}</p>
      <p className="mt-2">{footer.copyright}</p>
    </footer>
  )
}
