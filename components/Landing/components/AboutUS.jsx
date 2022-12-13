import Image from 'next/image'
import React from 'react'
import Arrow from '../../../images/Arrow.svg'
import Aboutus1 from '../../../images/Aboutus1.png'
import Aboutus2 from '../../../images/Aboutus2.png'

export const AboutUS = () => {
  return (
    <div className='container flex justify-center gap-4 my-10 mx-auto'>
        <div className='flex flex-col justify-between flex-1'>
          <div>
            <div className='flex gap-2 mb-4'>
                <Image src={Arrow} alt="Arrow" />
                <p className='text-2xl text-secondary'>About US</p>
            </div> 
            <div className='text-5xl font-bold'>Value we give to you</div>
          </div>
          <div><Image src={Aboutus1} alt='Aboutus1'/></div> 
        </div>
        <div className='flex flex-col gap-10 flex-1'>
            <div><Image src={Aboutus2} alt='Aboutus1'/></div> 
            <div>
                <p className='font-light text-lg text-primary my-4 w-[90%]'>archito Group se présente comme un outil pluridisciplinaire et complet regroupant diverses maitrises et compétences utiles à l’investissement immobilier.
OWN Group se positionne toujours et exclusivement du côté des investisseurs.
Uncommonly spacious and handsomely appointed.</p>
                <button className='bg-secondary px-10 py-3 text-white rounded-md'>Explore</button>
            </div>
        </div>
        
    </div>
  )
}
