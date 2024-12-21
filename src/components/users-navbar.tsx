'use client'
import { Navbar  } from  "flowbite-react"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import RestoLogo from '../assets/food-logo.png'

const UsersNavbar = () => {
  return (
    <div className="sticky top-0 left-0 z-[999] ">
      <Navbar className="bg-primary h-16 items-center flex  text-white">
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <Image src={RestoLogo.src} className="mr-3 h-16 w-max" alt="Flowbite React Logo" width={50} height={90} />
        <h1 className="self-center whitespace-nowrap text-xl font-semibold  dark:text-white">Resto Menus</h1>
      </Navbar.Brand>
      <div className="md:flex hidden">
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active className="!text-text !font-semibold text-base">
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#" className="!text-white !font-semibold hover:!text-text text-base">
          Cart
        </Navbar.Link>
        <Navbar.Link href="#" className="!text-white !font-semibold hover:!text-text text-base">Contact</Navbar.Link>
        <Navbar.Link href="/admin/signup" className="!text-white !font-semibold hover:!text-text text-base">Admin</Navbar.Link>
      </Navbar.Collapse>
      </div>
      
    </Navbar>
    </div>
    
  )
}

export default UsersNavbar
