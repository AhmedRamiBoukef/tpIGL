import Image from 'next/image'
import Aboutus1 from '../images/Aboutus1.png'
import Aboutus2 from '../images/Aboutus2.png'
import { Title } from '../components/Title'

function AboutUS() {
  return (
    <div id='about' className='container md:flex justify-center gap-4 my-10'>
        <div className='flex flex-col justify-between flex-1 mx-4 md:mx-auto'>
          <Title section="About US" title="Value we give to you" />
          <div><Image src={Aboutus1} alt='Aboutus1' width="100%" layout="responsive" objectFit="contain" /></div> 
        </div>
        <div className='flex md:flex-col flex-col-reverse gap-10 flex-1 mx-4 md:mx-auto'>
            <div><Image src={Aboutus2} alt='Aboutus1' width="100%" layout="responsive" objectFit="contain"/></div> 
            <div>
                <p className='font-light text-lg text-primary my-4 w-[90%]'>Estato Group se présente comme un outil pluridisciplinaire et complet regroupant diverses maitrises et compétences utiles à l’investissement immobilier.
OWN Group se positionne toujours et exclusivement du côté des investisseurs.
Uncommonly spacious and handsomely appointed.</p>
                <button className='bg-secondary px-10 py-3 text-white rounded-md'>Explore</button>
            </div>
        </div>
        
    </div>
  )
}


export default AboutUS;