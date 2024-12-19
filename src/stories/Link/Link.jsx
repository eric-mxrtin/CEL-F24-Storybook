export const Link = ( {className, color="gray", href, children}) => {
  return (
    <p className="text-sm font-medium decoration-2 hover:underline focus:outline-none focus:underline"><a className={`${className} text-${color}-700 hover:text-${color}-800`} href={href}>{children}</a></p>
  )
}