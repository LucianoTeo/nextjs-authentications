import { forwardRef, HTMLAttributes } from 'react'

interface RadioProps extends HTMLAttributes<HTMLInputElement> {
  label?: string
}

type Ref = HTMLInputElement;

const Radio = forwardRef<Ref, RadioProps>(({ label, ...rest }, ref) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input ref={ref} type="radio" {...rest} />
      </div>
    </div>
  )
})

Radio.displayName = 'Radio'
export { Radio }