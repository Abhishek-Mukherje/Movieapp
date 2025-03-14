import React from 'react'
import { mobileNavigation } from "../contants/navigations"
import { NavLink } from 'react-router-dom'

function MobileNavigation() {
    return (
        <section className='lg:hidden h-14 bg-black bg-opacity-70 fixed bottom-0 w-full z-40'>
            <div className='flex items-center justify-between h-full  bg-neutral-600'>
                {
                    mobileNavigation.map((nav, index) => {
                        return (
                            <NavLink key={nav.label + "mobileNavigation"}
                                to={nav.href} className={({isActive})=>`px-3 flex h-full items-center flex-col justify-center ${isActive && "text-white"}`}>
                                
                                <div className='text-2xl'>
                                    {nav.icon }
                                </div>
                                <p className='text-sm'>{nav.label}</p>

                            </NavLink>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default MobileNavigation