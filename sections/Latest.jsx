import Image from 'next/image'
import { useQuery } from 'react-query';
import HouseCard from '../components/HouseCard';
import { Title } from '../components/Title'
import Latest1 from "../images/Latest1.png"

function Latest() {
    const latestItems = [
        {
            imageURL: Latest1,
            title: 'The Grand Estate1',
            adress: 'Mosco, 121B',
            price: '20.000.000'
        },
        {
            imageURL: Latest1,
            title: 'The Grand Estate2',
            adress: 'Mosco, 121B',
            price: '20.000.000'
        },
        {
            imageURL: Latest1,
            title: 'The Grand Estate3',
            adress: 'Mosco, 121B',
            price: '20.000.000'
        },
        {
            imageURL: Latest1,
            title: 'The Grand Estate4',
            adress: 'Mosco, 121B',
            price: '20.000.000'
        },
        {
            imageURL: Latest1,
            title: 'The Grand Estate5',
            adress: 'Mosco, 121B',
            price: '20.000.000'
        },
        {
            imageURL: Latest1,
            title: 'The Grand Estate6',
            adress: 'Mosco, 121B',
            price: '20.000.000'
        },
    ]
    const { data:last } = useQuery("last", async () => {
        const data = await fetch("http://127.0.0.1:8000/last/");
        return data.json();
      });
  return (
    <div className='container my-10'>
        <Title section='Latest Projects' title='Make your dream project with Estato' />
        <div>
              <h1 className="text-3xl font-semibold py-3">Latest</h1>
              <div className="grid grid-cols-3 gap-x-6 gap-y-3">
                  {last
              ? last.map((house) => <HouseCard key={house.id} house={house} />)
              : null}
              </div>
            </div>
    </div>
  )
}

export default Latest;