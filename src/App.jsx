import { X } from 'lucide-react'
import React, { useState } from 'react'

const App = () => {

  const [heading, setHeading] = useState('')
  const [detail, setDetail] = useState('')

  const [task, setTask] = useState([])

  const submitHandle = (e) => {
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({ heading, detail})
    setTask(copyTask)

    setHeading('')
    setDetail('')
  }

  const deleateNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex w-full bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandle(e)
      }} className='flex gap-4 lg:w-1/2 flex-col items-center px-12 py-10 '>
        <h1 className='text-2xl font-bold'>Add notes</h1>
          <input onChange={(e) => {
            setHeading(e.target.value)
          }} value={heading} className='w-full font-medium outline-none px-5 py-2 rounded border-2' type="text" placeholder='Enter notes heading' />
          <textarea onChange={(e) => {
            setDetail(e.target.value)
          }} value={detail} className='w-full font-medium outline-none px-5 py-2 h-32 rounded border-2' type="text" placeholder='Write details here . . .' />
          <button className='w-full outline-none px-5 py-2 bg-white text-black rounded cursor-pointer'>Add Notes</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-2xl font-bold'>Recent notes</h1>
        <div className='flex gap-4 justify-center flex-wrap mt-5 h-[90%] overflow-auto'>
          {task.map(function(elem, idx) {
            return <div key={idx} className='h-62 p-4 relative w-40 bg-[url("https://tse2.mm.bing.net/th/id/OIP.gX5fBcT5glrhtLfjPgMtAAAAAA?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3")] bg-cover bg-center rounded-xl'>
              <h2 onClick={() => {
                deleateNote(idx)
              }} className='absolute top-2 right-2 cursor-pointer rounded active:scale-95 bg-red-500'><X /></h2>
              <h3 className='text-black leading-5 font-medium text-xl mb-1'>{elem.heading}</h3>
              <p className='text-gray-950 leading-5'>{elem.detail}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App