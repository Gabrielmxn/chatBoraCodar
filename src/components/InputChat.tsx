import { PaperPlaneRight } from "phosphor-react";

export function InputChat(){
  return(
      <div className='mt-20'>
        <label htmlFor="" className='flex justify-between bg-blue-300 rounded-full py-3 px-4 '>
          <input className="w-full bg-transparent outline-none border-none placeholder-white-300" type="text" placeholder='Digite sua mensagem'/>
          <PaperPlaneRight className="cursor-pointer" size={32} color="#E1E1E6" weight="fill" />
        </label>
      </div>
  )
}