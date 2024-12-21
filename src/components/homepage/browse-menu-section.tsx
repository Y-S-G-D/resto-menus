'use client'
import React ,{useState} from 'react'
import { Button } from 'flowbite-react'
import Image from 'next/image'
import BurgerImage from '@/assets/chicken-burger.jpg'
import { HiOutlineShoppingCart } from "react-icons/hi2";
import QuickViewSection from './quick-view-section'
// import { HiShoppingCart } from "react-icons/hi2";

const BrowseMenuSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className='w-full h-max py-2 flex items-center justify-center flex-col'>
        <h1 className='text-3xl font-semibold text-center'>Browse Our <strong className='text-primary'>Menus</strong></h1>
        <p className='text-gray-500 text-center text-xs my-2 w-[80%] '>These are our regular menus, You can order anything you want.</p>
        <div className=' w-full flex flex-col'>
            <div className='flex items-center  space-x-2 my-2'>
                <div className='w-3 h-3 rounded-sm bg-green-500'/>
                <h1 className='text-xl font-semibold '>Breakfast</h1>
            </div>
            <div className=' ml-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-y-12 my-2 mb-20'>
                {
                    Array.from({length: 8}).map((_,index) => {
                        return (
                            <div key={index} 
                             className='w-[90%] relative top-5 py-2 px-2 bg-primary/10 rounded-2xl flex items-center justify-start'>
                                <div className='w-full'>
                                    <div className='w-16 h-16'/>
                                    <h1 className='text-base font-semibold  text-ellipsis text-nowrap'>Chicken Burger</h1>
                                    <p className='text-xs my-1'>Menu Description</p>
                                    <div className='flex items-center justify-between w-full my-2'>
                                        <p className='text-lg font-semibold'>$5.00</p>
                                        <Button 
                                            onClick={() => {
                                                setIsModalOpen(true)
                                            }}
                                            size='xs' className='bg-primary px-0 hover:!bg-secondary '><HiOutlineShoppingCart size={20}/></Button>

                                    </div>
                                </div>
                                <Image src={BurgerImage.src} alt='Burger Image' width={100} height={50} className='rounded-full absolute -top-8 right-0 border-4 border-primary object-cover'/>
                                

                               
                            </div>
                        )
                    })
                }

            </div>
            {
                isModalOpen && (<QuickViewSection isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>)
            }
            
        </div>
      
    </section>
  )
}

export default BrowseMenuSection
