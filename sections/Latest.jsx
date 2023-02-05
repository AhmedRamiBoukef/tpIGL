import { useQuery } from 'react-query';
import LightHouseCard from '../components/LightHouseCard';
import { Title } from '../components/Title'

function Latest() {
    const { data:last } = useQuery("last", async () => {
        const data = await fetch("http://127.0.0.1:8000/last/");
        return data.json();
      });
  return (
    <div className='container my-10'>
        <Title section='Latest Projects' title='Make your dream project with Estato' />
        <div>
              <div className="flex justify-center md:justify-start flex-wrap gap-4 mt-12">
                  {last
              ? last.map((house) => <LightHouseCard key={house.id} house={house} />)
              : null}
              </div>
            </div>
    </div>
  )
}

export default Latest;