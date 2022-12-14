import Image from 'next/image'
import React from 'react'
import { Title } from './Title'
import Latest1 from "../../../images/Latest1.png"

export const Latest = () => {
    const latestItems = [
        {
            imageURL: Latest1,
            title: 'The Grand Estate',
            adress: 'Mosco, 121B',
            price: '20.000.000'
        },
        {
            imageURL: Latest1,
            title: 'The Grand Estate',
            adress: 'Mosco, 121B',
            price: '20.000.000'
        },
        {
            imageURL: Latest1,
            title: 'The Grand Estate',
            adress: 'Mosco, 121B',
            price: '20.000.000'
        },
        {
            imageURL: Latest1,
            title: 'The Grand Estate',
            adress: 'Mosco, 121B',
            price: '20.000.000'
        },
        {
            imageURL: Latest1,
            title: 'The Grand Estate',
            adress: 'Mosco, 121B',
            price: '20.000.000'
        },
        {
            imageURL: Latest1,
            title: 'The Grand Estate',
            adress: 'Mosco, 121B',
            price: '20.000.000'
        },
    ]
  return (
    <div className='container my-10 mx-auto'>
        <Title section='Latest Projects' title='Make your dream project with Estato' />
        <div className='sm:grid mx-4 sm:mx-0 grid-cols-3 gap-10 my-8'>
            {latestItems.map(item => (
                <div key={item.title} className='shadow-md mb-6 sm:mb-0 rounded-2xl group w-full'>
                    <Image src={item.imageURL} alt='Latest1' width="100%" layout="responsive" objectFit="contain"/>
                    
                    <div className='p-3 rounded-b-2xl group-hover:bg-secondary'>
                        <p className='font-semibold mb-2 text-2xl text-primary group-hover:text-white'>{item.title}</p>
                        <p className='text-primary mb-2 text-lg group-hover:text-white'>{item.adress}</p>
                        <p className='text-secondary text-lg group-hover:text-white'>${item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
