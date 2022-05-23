import React from 'react'
import { useState } from 'react';

import "./TopBar.css"
export default function TopBar() {
  const [bar_lst, set_bar_lst] = useState(["introduction", 'Projects', "contact"])
  return (
    <div className='TopBar'>
        {bar_lst.map((elem) =>
            {
                console.log(elem)
                return <div className='Top_Bar_element'><div>{elem}</div></div>
            })
        }
    </div>
  )
}
