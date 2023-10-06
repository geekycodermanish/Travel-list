import React from 'react'

const Stats = ({items}) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numIteam = items.length
  const numPackeed = items.filter(item => item.packed).length
  const percent = Math.round(( numPackeed / numIteam) * 100)

  return (
    <footer className='stats'>
      <em>
        {percent === 100
        ? "You got everything! Ready to go ✈️" 
        : `💼 You have ${numIteam} items on your list, and you already packed ${numPackeed} (${percent})%`
        }
      </em>
      
    </footer>
  )
}

export default Stats
