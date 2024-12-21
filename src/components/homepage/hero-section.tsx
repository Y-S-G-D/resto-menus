import React from 'react'
import CustomButton from '../custom-theme-components/custom-button'
import Image from 'next/image'
import PastaImage from '../../assets/pasta-image.png'

const HeroSection = () => {
  return (
    <main className='h-max w-full flex justify-between bg-secondary/20 pl-6 overflow-hidden box-border'>
        {/* Content div */}
        <div className='w-[55%] py-4 md:py-16'>
            <h1 className='text-3xl md:text-6xl xl:text-7xl font-semibold'>Get the <strong className='text-secondary'>Yum</strong> </h1>
            <h1 className='text-3xl md:text-6xl xl:text-7xl font-semibold'>for <strong className='text-text'>Your</strong> Tum </h1>
            <p className='text-gray-500 text-xs md:text-base my-4 md:my-0 md:mt-4'>We serve your daily meal needs, from breakfast to fine dining. </p>
            <p className='text-gray-500 text-xs md:text-base  md:flex hidden mb-4'>Experience the best culinary delights crafted with love and passion.</p>
            <CustomButton hoverBgColor='!hover:bg-accent'>Start Now</CustomButton>
        </div>
        {/* Image div */}
        <div className='relative w-[40%] pl-4 md:pl-20 flex'>
           <div className='ml-8 h-full w-6 md:w-16 bg-primary'></div>
           <div className='h-full  ml-8 w-10 md:w-32 bg-secondary'></div>
           <Image src={PastaImage.src} alt='Pasta Image' width={200} height={200}  className='w-full  h-full  md:h-[80%] md:object-fill object-cover absolute z-10 top-5 left-2 md:-left-24' />
        </div>
      
    </main>
  )
}

export default HeroSection
