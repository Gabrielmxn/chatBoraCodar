
import {v4 as uuid4 } from 'uuid';
interface User {

  name: string;
  date: Date;
  message: string;
}

interface Users {
  users: User[]
}

export function Message({ users }: Users) {
  return(
    <>
    {
    users.map(user => {
      if (user.name === 'Me') {
        return (
          <div className='flex justify-between items-stretch' key={uuid4()}>
            <span></span>
            <div className='text-right'>
              <p className='mb-2'>{`Você - 11/20`}</p>
              <span className='inline-block  rounded-lg rounded-tr-none bg-green-500 p-4'>
              {user.message}
              </span>
            </div>
          </div>
        )
      } else {
        return (
          <div className='text-left'  key={uuid4()}>
            <p className='mb-2'>{`${user.name} - 11/20`}</p>
            <span className='inline-block  rounded-lg rounded-tl-none bg-blue-700 p-4'>
              {user.message}
            </span>
          </div>
        )
      }
    })
  }
    </>
  )

}