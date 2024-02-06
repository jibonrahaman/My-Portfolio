
function Header({className,text}) {
  return (
 <h2 className={` text-3xl font-bold text-sky-400 ${className}`}>{text}</h2>
  )
}

export default Header
