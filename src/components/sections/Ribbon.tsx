import { Fragment } from 'react'
import { ribbon } from '../../content'
import { useEventClock } from '../../lib/event'

export function Ribbon() {
  const { fill } = useEventClock()
  return (
    <div className="texture-light bg-navy px-6 py-4 text-center text-[10px] uppercase tracking-[0.08em] text-white sm:text-xs">
      {ribbon.map((item, i) => (
        <Fragment key={item}>
          {i > 0 && (
            <span aria-hidden="true" className="px-2 text-gold-light sm:px-4">
              •
            </span>
          )}
          <span className="inline-block">{fill(item)}</span>
        </Fragment>
      ))}
    </div>
  )
}
