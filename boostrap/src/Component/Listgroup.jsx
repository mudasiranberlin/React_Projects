import React from 'react'

function Listgroup() {

    const items=[
        'newyork',
        'paris',
        'london',
        'japan'
    ]

    
  return (
    <div>
        <ul class="list-group">
  {
    items.map((item)=>(
    <li key={item}>{item}</li>)
)
  }
</ul>
    </div>
  )
}

export default Listgroup