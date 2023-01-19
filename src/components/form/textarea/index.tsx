import { forwardRef, TextareaHTMLAttributes } from 'react'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

type Ref = HTMLTextAreaElement;

const TextArea = forwardRef<Ref, TextAreaProps>(({ label, error, ...rest }, ref) => {
  return (
    <div className={`mb-2 w-full`}>
      <label className={`block mb-2`}>
        {label}
      </label>
      <div className={`relative`}>
        <textarea
          className={`
              px-4
              py-2
              h-20
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
        >
        </textarea>
        {error && <div className="text-red-600">{error}</div>}
      </div>
    </div>
  )
})

TextArea.displayName = 'TextArea'
export { TextArea }