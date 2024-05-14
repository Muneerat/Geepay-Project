import React from 'react'
import Logo, { Cube, Dark, DotBox, Important, Light, Logout, Person, Rectangle, Setting, SideIn, Star } from '../assets/icon'
import { Link } from '@nextui-org/react'

export default function SideBar() {
  return (
    <div className='flex flex-col bg-[#f7f8fa] w-[80px] items-center border h-screen justify-between'>
    <div className='flex flex-col'>
    <Link to="#" className='py-5'>
      <Logo width={40} height={40} />
    </Link>
    <Link to="#" className='py-4'>
      <DotBox width={30} height={30} />
    </Link>
    <Link to="#" className='py-4'>
      <Rectangle width={30} height={30} />
    </Link>
    <Link to="#" className='py-4'>
      <Person width={30} height={30} />
    </Link>
    <Link to="#" className='py-4'>
      <Cube width={30} height={30} />
    </Link>  
    <Link to="#" className='py-4'>
      <Star width={30} height={30} />
    </Link>
    <Link to="#" className='py-4'>
      <Important width={30} height={30} />
    </Link>
    <Link to="#" className='py-4'>
      <Light width={30} height={30} />
    </Link>
    <Link to="#" className='py-4'>
      <Dark width={30} height={30} />
    </Link>

    </div>
    <div className='flex flex-col pb-10'>
    <Link to="#" className='py-4'>
      <SideIn width={30} height={30} />
    </Link>
    <Link to="#" className='py-4'>
      <Setting width={30} height={30} />
    </Link>
    <Link to="#" className='py-4'>
      <Logout width={30} height={30} />
    </Link>
    </div>
    </div>
   )
}
