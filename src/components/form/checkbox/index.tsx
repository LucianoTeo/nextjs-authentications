import { forwardRef, HTMLAttributes } from 'react'

interface CheckBoxProps extends HTMLAttributes<HTMLInputElement> {
  label?: string
}

type Ref = HTMLInputElement;

const CheckBox = forwardRef<Ref, CheckBoxProps>(({ label, ...rest }, ref) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input ref={ref} type="checkbox" {...rest} />
      </div>
    </div>
  )
})

CheckBox.displayName = 'CheckBox'
export { CheckBox }