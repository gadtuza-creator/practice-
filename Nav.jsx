

import{navData} from '../data/nav.js'
import {User} from 'lucide-react'
const Nav=()=>{
    return(
        <>
     
            <div className='justify-between flex w-200px bg-[darkgreen] m-0 rounded-2xl p-1.5'>
                <div className='flex m-2.5 ] gap-1.5'>
                    <span className= ' w-10 flex items-center justify-center rounded-[5px] text-amber-400 text-2xl bg-[#bdedbd]'>✳</span>
                    <p className='text-white text-[20px] font-bold'>Tuzamure Cooperative</p>
                    
                    

                </div>
                <div className='flex p-2 gap-10  text-white font-bold text-[20px]'>{navData.map((data)=>
                (
                    <h2 className=' hover:text-amber-300 cursor-pointer'>{data.name}</h2>
                ))}</div>
            
        </div>
        </>
    )
}

export default Nav;