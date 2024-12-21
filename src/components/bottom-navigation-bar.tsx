'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
// import { Navbar } from 'flowbite-react'
import {FaHome ,FaCartPlus ,FaList} from "react-icons/fa"

interface INavItem {
  name: string;
  icon: React.ReactElement;
  path: string;

}
const BottomNavigationBar = () => { 
  const router = useRouter()
  const [selectedBar, setSelectedBar] = React.useState<number>(0)

  const navItems:INavItem[] = [
    {
      name: "Browse",
      icon: <FaHome/>,
      path: "/"
    },
    {
      name: "Cart",
      icon: <FaCartPlus/>,
      path: "/client/add-to-bag"
    },
    {
      name: "Orders",
      icon: <FaList/>,
      path: "/"
    },
    // {
    //   name: "Payment",
    //   icon: <FaPaypal/>,
    //   path: "/"
    // },
  ]
  return (
    <div className='fixed md:hidden   bottom-0 left-0 w-full z-[1000]'>
      <div className='relative bg-primary flex justify-around  items-center px-4 pb-2'>
         <ul className='flex items-center space-x-6 justify-evenly w-full mb-2'>
          {navItems.map((item : INavItem, index:number) => {
              return (
                <li 
                 onClick={() => {
                  router.push(item.path)
                  setSelectedBar(index)

                }}
                  key={index} className='text-white flex flex-col items-center '>
                  <div className={`${index===selectedBar?"absolute  transition duration-500 -top-6 p-4  rounded-full bg-accent border-4  border-background":"static p-2"} `}>
                    {React.cloneElement(item.icon, { className: `${index===selectedBar?" transition duration-500 text-text":""}`, size: 20 })}</div>
                  <span className={`${index===selectedBar?"relative -bottom-5 transition duration-500":""}`}>{item.name}</span>
                </li>
              )
            })
          }
            
         </ul>
      </div>
    </div>
  )
}

export default BottomNavigationBar
