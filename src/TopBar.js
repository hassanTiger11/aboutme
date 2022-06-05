import React from 'react'
import { useState } from 'react';

import "./TopBar.css"
export default function TopBar({setCurrPage}) {
  const [bar_lst, set_bar_lst] = useState(["introduction", 'Projects', "contact"])
  
  return (
    <div className='TopBar'>
        {bar_lst.map((elem) =>{
              return <div key={elem} className='Top_Bar_element' onClick={()=>setCurrPage(elem)}><div>{elem}</div></div>
          })
        }
    </div>
  )
}
