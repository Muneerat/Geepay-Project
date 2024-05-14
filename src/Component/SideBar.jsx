import React from 'react'
import Logo, { Cube, Dark, DotBox, Important, Light, Logout, Person, Rectangle, Setting, SideIn, Star } from '../assets/icon'
import { Link } from '@nextui-org/react'

export default function SideBar() {
  return (
    <div className='flex flex-col bg-[#f7f8fa] w-[80px] items-center border h-screen justify-between'>
    <div className='flex flex-col'>
    <Link to="#" className='py-5 transition-all hover:scale-125 duration-200 '>
      <Logo width={40} height={40} />
    </Link>
    <Link to="#" className='py-4 transition-all hover:scale-125 duration-200 '>
      <DotBox width={28} height={28} />
    </Link>
    <Link to="#" className='py-4 transition-all hover:scale-125 duration-200 '>
      <Rectangle width={28} height={28} />
    </Link>
    <Link to="#" className='py-4 transition-all hover:scale-125 duration-200 '>
      <Person width={28} height={28} />
    </Link>
    <Link to="#" className='py-4 transition-all hover:scale-125 duration-200 '>
      <Cube width={28} height={28} />
    </Link>  
    <Link to="#" className='py-4 transition-all hover:scale-125 duration-200 '>
      <Star width={28} height={28} />
    </Link>
    <Link to="#" className='py-4 transition-all hover:scale-125 duration-200 '>
      <Important width={28} height={28} />
    </Link>
    <Link to="#" className='py-4 transition-all hover:scale-125 duration-200 '>
      <Light width={28} height={28} />
    </Link>
    <Link to="#" className='py-4 transition-all hover:scale-125 duration-200 '>
      <Dark width={28} height={28} />
    </Link>

    </div>
    <div className='flex flex-col pb-10'>
    <Link to="#" className='py-4 transition-all hover:scale-125 duration-200 '>
      <SideIn width={28} height={28} />
    </Link>
    <Link to="#" className='py-4 transition-all hover:scale-125 duration-200 '>
      <Setting width={28} height={28} />
    </Link>
    <Link to="#" className='py-4 transition-all hover:scale-125 duration-200 '>
      <Logout width={28} height={28} />
    </Link>
    </div>
    </div>
   )
}
