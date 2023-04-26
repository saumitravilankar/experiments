

// AUTO FADE CAROUSEL 


import React, { useEffect, useState } from 'react'

import { easeInOut, motion } from 'framer-motion'

import img1 from '../assests/img/pexels-andrea-piacquadio-762020.jpg'
import img2 from '../assests/img/pexels-matheus-bertelli-573299.jpg'
import img3 from '../assests/img/pexels-murat-esibatir-4355347.jpg'
import img4 from '../assests/img/pexels-noelle-otto-906052.jpg'

function Carousel() {
    
    const images = [ {img : img1}, {img : img2}, {img : img3}, {img : img4} ]
    const values = [ {val : 'अष्टपैलू व्यक्तिमत्व'}, {val : 'लोकांचा नेता'}, {val : 'तेजोमय सूर्य'} ]
    const positions = [
        {mt: 'mt-[-8rem]', left: 'left-[50vw]', leftSm: 'left-[50vw]'},
        {mt: 'mt-[-25rem]', left: 'left-[55vw]', leftSm: 'left-[55vw]'},
        {mt: 'mt-[-15rem]', left: 'sm:left-[27vw]', leftSm: 'left-[5vw]'},
    ]

    const [image, setImage] = useState(0)
    const [value, setValue] = useState(0)
    const [position, setPosition] = useState(0)

    const showNextImage = () => {
        if (image === (images.length - 1)) {
            setImage(0)
        } else if (image < images.length) {
            setImage(image + 1)
        }
    }

    const showNextValue = () => {
        if (value === (values.length - 1)) {
            setValue(0)
        } else if (value < values.length) {
            setValue(value + 1)
        }
    }

    const showNextPosition = () => {
        if (position === (positions.length - 1)) {
            setPosition(0)
        } else if (position < positions.length) {
            setPosition(position + 1)
        }
    }

    useEffect(() => {
    
        setTimeout(() => {
            showNextImage()
          }, 4000);

        setTimeout(() => {
            showNextValue()
            showNextPosition()
          }, 8000);
    })
    
  return (
    <div className='mx-auto sm:mt-[10rem]'>
        <div className='flex justify-center items-center gap-5'>
            <motion.div
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatDelay:0.1, easeInOut, repeatType: 'mirror' , }}>
                <img className='sm:w-[50vw] h-[60vh]' src={images[image].img} alt="current image" />
            </motion.div>
        </div>
        <motion.div
        className=''
        >
            <motion.div
            initial={{ opacity: 0.5  }}
            animate={{ opacity: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatDelay:0.1, easeInOut, repeatType: 'reverse' , }}>
                <p className={`absolute ${positions[value].left} ${positions[value].leftSm} ${(positions[value].mt)} text-[2.5rem] sm:text-[3rem] font-black text-white`}>{values[value].val}</p>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Carousel

{/* <img onClick={previousImage} className='w-20 h-20 cursor-pointer' src={left} alt="back" />
<img onClick={showNextImage} className='w-20 h-20 cursor-pointer' src={right} alt="next" /> 
// const previousImage = () => {
//     console.log(image);
//     if (image === 0) {
//         setImage((images.length - 1))
//     } else if (image > 0) {
//         setImage(image - 1)
//     }
// }
// import left from '../assests/img/back.png'
// import right from '../assests/img/arrow-right.png' */}