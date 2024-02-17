
function Images({className,src,alt}) {
  return (
    <img className={` w-full h-full ${className}`} src={src} alt={alt} />
  )
}

export default Images
