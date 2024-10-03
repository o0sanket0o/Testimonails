import './App.css';
import reviews from './data';
import { Header } from './Components/Header';
import { Hero } from './Components/Hero';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
function App() {
  const [index, indexHandler] = useState(0);
  const [data, dataHandler] = useState(reviews[0]);
  function setIndex(ind){
    if(ind == -1) ind = reviews.length - 1;
    ind %= reviews.length;
    indexHandler(ind);
    dataHandler(reviews[ind]);
  }
  return (
    <div className='bg-gray-200 h-[100vh]'>
      <div className='w-full h-full flex flex-col justify-center items-center gap-10'>
        <Header></Header>
        <Hero setIndex={setIndex} data={data} index={index}></Hero>
      </div>
    </div>
  );
}

export default App;
