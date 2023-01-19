import { forwardRef, HTMLAttributes, ReactNode, } from 'react'

interface InputNumberProps extends HTMLAttributes<HTMLInputElement> {
  label?: string
  iconBefore?: ReactNode
  iconAfter?: ReactNode
  error?: string
}

type Ref = HTMLInputElement;

const InputNumber = forwardRef<Ref, InputNumberProps>(
  ({ label, iconBefore, iconAfter, className, error, ...rest }, ref) => {
    return (
      <div className={`mb-2 w-full`}>
        <label className={`block mb-2`}>
          {label}
        </label>
        <div className={`relative`}>
          <input
            className={`
              px-4
              py-2
              w-full
              rounded-md
              bg-white
              border
              border-gray-300
              ${error && 'border-red-600'}
              focus:border-purple-900
            `}
            ref={ref}
            type="number"
            {...rest}
          />
          {error && <div className="text-red-600">{error}</div>}
        </div>
      </div>
    )
  })

InputNumber.displayName = 'InputNumber'
export { InputNumber }