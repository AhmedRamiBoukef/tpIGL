import Image from 'next/image'
import React from 'react'
import Arrow from '../images/Arrow.svg'

export const Title = ({section,title}) => {
  return (
    <div>
        <div className='flex gap-2 mb-4'>
            <Image src={Arrow} alt="Arrow"  />
            <p className='text-2xl text-secondary'>{section}</p>
        </div> 
        <div className='text-4xl text-primary font-bold mb-4 md:mb-0'>{title}</div>
    </div>
  )
}
