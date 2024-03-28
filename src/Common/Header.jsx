
function Header({className,text}) {
  return (
 <h2 className={` text-3xl text-center font-bold text-sky-400 ${className}`}>{text}</h2>
  )
}

export default Header
