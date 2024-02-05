import React, { ReactNode } from 'react'

interface NavListProp{
    title: string,
    href: string,
    icon:ReactNode
}

function NavList({title,href,icon : Icon}:NavListProp) {
  return (
      <li className='flex relative group   z-20 cursor-pointer items-center text-[14px] justify-center gap-2'>{Icon}{title}
      <span className='border-t-[1px] w-[0px] duration-500 group-hover:w-[75%]  absolute bottom-[-5px] left-6'></span>
      </li>
  )
}

export default NavList