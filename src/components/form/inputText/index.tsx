import { forwardRef, HTMLAttributes, InputHTMLAttributes, ReactNode, } from 'react'

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  iconBefore?: ReactNode
  iconAfter?: ReactNode
  error?: string
}

type Ref = HTMLInputElement;

const InputText = forwardRef<Ref, InputTextProps>(
  ({ label, iconBefore, iconAfter, className, error, ...rest }, ref) => {
    return (
      <div className={`mb-2 w-full`}>
        <label className={`block mb-2`}>
          {label}
        </label>
        <div className={`relative`}>
          {iconBefore && <div className="absolute top-0 left-2 top-2">{iconBefore}</div>}
          <input
            className={`
              ${iconBefore ? 'pl-9' : 'pl-4'}
              ${iconAfter ? 'pr-9' : 'pr-4'}
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
            {...rest}
          />
          {iconAfter && <div className="absolute right-0 top-2">{iconAfter}</div>}
          {error && <div className="text-red-600">{error}</div>}
        </div>
      </div>
    )
  })

InputText.displayName = 'InputText'
export { InputText }