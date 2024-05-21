import React from 'react'
import Logo, { Cube, Dark, DotBox, Light, Logout, Person, Setting, SideIn, Star } from '../assets/icon'
import { Link } from '@nextui-org/react'
import useDarkMode from 'use-dark-mode'

export default function SideBar() {
  const darkMode = useDarkMode(false)
  return (
    <div className='flex flex-col bg-[#fff] w-[94px] items-center border h-screen justify-between rounded-ful rounded-l-3xl'>
    <div className='flex flex-col'>
    <Link to="#" className='py-6 transition-all hover:scale-125 duration-200 '>
      <Logo width={42} height={42} />
    </Link>
    <Link to="#" className='py-4 transition-all hover:scale-125 duration-200 '>
      <DotBox width={30} height={30} />
    </Link>
    <Link to="#" className='py-4 transition-all hover:scale-125 duration-200 '>
      <Person width={30} height={30} />
    </Link>
    <Link to="#" className='py-4 transition-all hover:scale-125 duration-200 '>
      <Cube width={30} height={30} />
    </Link>  
    <Link to="#" className='py-4 transition-all hover:scale-125 duration-200 '>
      <Star width={30} height={30} />
    </Link>
    <Link to="#" className='py-4 transition-all hover:scale-125 duration-200 '>
    <button onClick={darkMode.disable}>
      <Light width={30} height={30} />
    </button>
    </Link>
    <Link to="#" className='py-4 transition-all hover:scale-125 duration-200 '>
    <button onClick={darkMode.enable}>
      <Dark width={30} height={30} />
    </button>
    </Link>
    </div>
    <div className='flex flex-col pb-10'>
    <Link to="#" className='py-4 transition-all hover:scale-125 duration-200 '>
      <SideIn width={30} height={30} />
    </Link>
    <Link to="#" className='py-4 transition-all hover:scale-125 duration-200 '>
      <Setting width={30} height={30} />
    </Link>
    <Link to="#" className='py-4 transition-all hover:scale-125 duration-200 '>
      <Logout width={30} height={30} />
    </Link>
    </div>
    </div>
   )
}
