import React, { useState } from 'react'

export default function Add() {
    const [name, setName] = useState("")
    const [fatherName, setFatherName] = useState("")
    const [email, setEmail] = useState("")
    const [mainArr, setMainArr] = useState([])

    

    const handleAdd = () => {
        setMainArr([...mainArr, [name, fatherName, email]])
        setName('')
        setFatherName('')
        setEmail('')
    }
  return (
    <>
        <input value={name} type="text" onChange={ (e) => setName(e.target.value) } className='border-2 ml-2' placeholder='Name'/>
        <input value={fatherName} type="text" onChange={ (e) => setFatherName(e.target.value) } className='border-2 ml-2' placeholder='Father Name'/>
        <input  type="text" onChange={ (e) => setEmail(e.target.value) } className='border-2 ml-2' placeholder='Email'/>
        <button className='border-2' onClick={handleAdd}>Add</button>

        <div>
            {
                mainArr.map((item, index) => (
                    <div key={index} className='border-[1px] border-black w-fit p-1'>
                        <p>{item[0]}</p>
                        <p>{item[1]}</p>
                        <p>{item[2]}</p>
                    </div>
                ))
            }
        </div>
    </>
  )
}
