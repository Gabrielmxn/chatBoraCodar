import { InputChat } from '@/components/InputChat'
import { Message } from '../components/Message'
import {v4 as uuid4 } from 'uuid';
import { Inter } from '@next/font/google'
import { X , PaperPlaneRight} from 'phosphor-react'
const users = [
  {

    name: 'Cecilia',
    date: new Date(),
    message: 'E se a gente fizesse um chat moderno e responsivo em apenas uma semana?'
  },
  {

    name: 'Me',
    date: new Date(),
    message: '#boraCodar! 🚀'
  },
  {

    name: 'Me',
    date: new Date(),
    message: '#boraCodar! 🚀'
  },
  {

    name: 'Cecilia',
    date: new Date(),
    message: 'E se a gente fizesse um chat moderno e responsivo em apenas uma semana?'
  },
]

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='grid max-w-[880px] items-center m-auto gap-8 mt-8 text-xs px-8'>
      <header >
        <div className='flex items-center justify-between'>
          <div className="flex items-center gap-4">
            <img className="w-12 h-12 rounded-full" src="https://github.com/gabrielmxn.png" alt="" />
            <div>
              <strong className="block text-base">Gabriel Alves</strong>
              <div className="flex items-center gap-2">
                <span className="bg-green-800 w-2 h-2 rounded-full"></span> 
                <span className='text-green-800 text-xs'>
                  Online
                </span>
                
              </div>
                  
               
            </div>

          </div>
          <X size={20} color="#FFFFFF" weight="bold" />
        </div>
        <div className="text-center">
          <span >Hoje 11:30</span>
        </div>
      </header>

        <Message users={users}/>
      <InputChat />
    </main>
  )
}
