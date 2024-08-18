import React from 'react'

const Imagges = ({selectimg=null,setSelectimg=null,src=null,alt=null}) => {
  return (
    <img onClick={()=>setSelectimg(alt)}  src={src} alt={alt} />
  )
}

export default Imagges