import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import { CapturePage } from './CapturePage'
import { initPixel } from '../lib/pixel'

initPixel()

// Liga as entradas ao rolar antes do primeiro desenho (nada pisca na tela)
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('js-revela')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CapturePage />
  </StrictMode>,
)
