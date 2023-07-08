export default function Label({ children, value, ...props }) {
  return (
    <label className={'text-slate-600 mb-1 block'} {...props}>
      {value || children}
    </label>
  )
}
