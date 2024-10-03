import React from 'react'
import { FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Hero = (props) => {
    const id = props.data.id, name = props.data.name, job = props.data.job, image = props.data.image, text = props.data.text, setIndex = props.setIndex, index = props.index;
  return (
    <div className='bg-white flex-col relative w-5/12 justify-center items-center pb-6 rounded'>
        <div className='flex-col items-center justify-center w-full'>
                <img src={image} alt=""  height='150px' width='150px' className='object-fit absolute rounded-full h-auto top-[-4rem] z-10'/>
                <div className='bg-violet-400 rounded-full h-[150px] w-[150px] absolute top-[-4.4rem] left-3'></div>
            <div className='text-center mt-16'>
                <div className='my-8'>
                    <h2 className='text-2xl font-bold'>{name}</h2>
                    <h3 className='text-violet-400 uppercase'>{job}</h3>
                </div>
                <p className='flex justify-center'><FaQuoteLeft color='rgb(167 139 250)'/></p>
                <p className='my-2 flex-grow text-sm h-20 px-6 opacity-[0.5] flex justify-center items-center'>{text}</p>
                <p className='flex justify-center'><FaQuoteRight color='rgb(167 139 250)'/></p>
                <div className='flex gap-2 justify-center my-6'>
                    <button onClick={() => {
                        setIndex(index - 1)
                    }}><FaChevronLeft color='rgb(167 139 250)' /></button>
                    <button onClick={() => {
                        setIndex(index + 1)
                    }}><FaChevronRight color='rgb(167 139 250)'/></button>
                </div>
                <button onClick={() => {
                    setIndex(Math.floor(Math.random() * 100 % 6));
                }} className='bg-violet-400 py-2 px-4 rounded text-white font-bold'>Surprise Me</button>
            </div>
        </div>
    </div>
  )
}
