import { LocationEditIcon } from "lucide-react";



const Footer=()=>{
    return(
        <div className=" rounded-2xl flex justify-around bg-[darkgreen] ">
            <div className="flex  flex-col text-white">
                <div className="flex">
             <span className= ' w-10 flex items-center justify-center rounded-[5px] text-amber-400 text-2xl bg-[#bdedbd]'>✳</span>
                <h2>Tuzamure Cooperative</h2>
                </div>
                <p className="ml-20">Growing opportunity together through quality products.</p>
            </div>
            
              <div className="flex gap-3">
                <LocationEditIcon className="text-amber-300"/><p className=" felx text-white">Rooted in Rwanda · Growing together
              
            </p>
              </div>

        </div>
    )
}

export default Footer;