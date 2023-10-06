import React, { useState } from 'react'

const Form = ({addIteam}) => {

  const [description, setDescription] = useState("")
  const [quality, setQuality] = useState(1)


  let handleSubmit = (event)=>{
    event.preventDefault();

    if(!description) return;

    let newItem = {id: Date.now(), description, quality, packed: false }
    addIteam(newItem)

    setDescription("")
    setQuality(1)
  }


  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip? </h3>
      <select onChange={el=> {
          console.log(el.target.value)
          setQuality(el.target.value)
        }}>
      {Array.from({length: 10}, (_, i) => i + 1).map(el=>(
        <option value={el} key={el} >{el}</option>
      ))} 
      </select>
      <input type='text' maxLength={10}  placeholder='Item...' onChange={(el)=> { console.log(el.target.value)
         setDescription(el.target.value)}}/>
      <button>ADD</button>
    </form>
  )
}

export default Form
