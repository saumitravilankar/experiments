
// Owl Carousel using SWiper Carousel

import React,{ useState, useEffect } from 'react'

import img1 from '../assests/img/pexels-andrea-piacquadio-762020.jpg'
import img2 from '../assests/img/pexels-matheus-bertelli-573299.jpg'
import img3 from '../assests/img/pexels-murat-esibatir-4355347.jpg'
import img4 from '../assests/img/pexels-noelle-otto-906052.jpg'

import left from '../assests/img/back.png'
import right from '../assests/img/arrow-right.png'

function OwlCarousel() {

    const images = [ {img : img1}, {img : img2}, {img : img3}, {img : img4}, {img : img1}, {img : img2}, {img : img3}, {img : img4}, {img : img1}, {img : img1}, {img : img1}, {img : img1} ]

    const [arr, setArr] = useState(images)

    // const shiftArrayHandler = async () => {
    //     const lastDigit = arr.pop();
    //     arr.unshift(lastDigit)
    //     arr.splice(0, arr.length, ...arr);
    //     let modifiedArr = [...arr]
    //     console.log(modifiedArr);
    //     return modifiedArr

    // }

    const shiftImageHandler = ()=>{
        const lastDigit = images.pop();
        images.unshift(lastDigit)
        // console.log(images);
        return images
    }

    const nextImage=()=>{
        shiftImageHandler();
        console.log(images);
        setArr(images);
        
    }
    

  return (
    <div className='my-[5rem]'>
        <div className='flex justify-end gap-2 mr-[2rem]'>
            <img className='w-[3rem] h-[3rem] cursor-pointer' src={left} alt="previous" />
            <img onClick={()=>nextImage()} className='w-[3rem] h-[3rem] cursor-pointer' src={right} alt="next" />
        </div>
        <div className='flex gap-1 mx-[1rem] overflow-x-hidden'>
            
            {arr.map((item,index)=>{
                return (<img key={index} className='w-40 h-40 m-[1rem]' src={item.img} alt="" />)
            })}

            {/* <img className='w-40 h-40 m-[1rem]' src={img2} alt="" />
            <img className='w-40 h-40 m-[1rem]' src={img3} alt="" />
            <img className='w-40 h-40 m-[1rem]' src={img4} alt="" />
            <img className='w-40 h-40 m-[1rem]' src={img1} alt="" />
            <img className='w-40 h-40 m-[1rem]' src={img2} alt="" />
            <img className='w-40 h-40 m-[1rem]' src={img3} alt="" />
            <img className='w-40 h-40 m-[1rem]' src={img4} alt="" />
            <img className='w-40 h-40 m-[1rem]' src={img1} alt="" />
            <img className='w-40 h-40 m-[1rem]' src={img2} alt="" />
            <img className='w-40 h-40 m-[1rem]' src={img3} alt="" />
            <img className='w-40 h-40 m-[1rem]' src={img4} alt="" /> */}
        </div>
    </div>
  )
}

export default OwlCarousel