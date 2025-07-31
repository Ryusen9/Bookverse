import React from 'react'

const MobileMenu = ({mobileMenuCurrentState}) => {
    
  return (
    <aside className={`border-2 w-[350px] z-10 absolute top-0 left-0 min-h-screen transform transition-transform duration-300 ease-in-out ${mobileMenuCurrentState ? 'translate-x-0' : '-translate-x-full'} bg-white dark:bg-black`}>
        Side menu
    </aside>
  )
}

export default MobileMenu