import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import { PosLivePage } from './PosLivePage'
import { initPixel } from '../lib/pixel'

initPixel()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PosLivePage />
  </StrictMode>,
)
