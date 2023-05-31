import InfiniteScroll from 'react-infinite-scroll-component'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Conteudo from './Conteudo';


const fetchData = (setItems, items) => {
let pagi = 0;  
 axios
   .get(`https://test-candidaturas-front-end.onrender.com/families?skip=${pagi}&take=20`)
   .then((res) => {
    setItems([...items, ...res.data]);
    pagi = pagi + 20;
   });
};

const Main = () =>{
    const [items, setItems] = useState([]);    
    useEffect(() => {
      fetchData(setItems, items)
    }, [])
    return(
        <main className='container mx-auto py-8 px-2 flex flex-col justify-center'>
        <h2 className='md:text-2xl text-xl pl-2 font-medium text-left pb-2 flex'>Resultados</h2>
        <section className='flex'>
          <InfiniteScroll
          dataLength={items.length}
          next={() => {
            fetchData(setItems, items);
          }}
          hasMore={true}
          className='flex flex-wrap  md:justify-normal container mx-auto'
          >
            {items?.map((item, i) => (
              <section key={i}>
                <Conteudo key={item.id} image={`https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/${item.id}.jpg`} name={item.details.name} />
              </section>
            ))}
            
          </InfiniteScroll>
        </section>
      </main>
    )
}

export default Main;