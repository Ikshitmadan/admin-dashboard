import React from 'react'
import './Menu.scss'
import {menu} from '../../data'
import { Link } from 'react-router-dom'
const Menu = () => {
  return (

    <div className="menu">
    {
 
    menu.map((item) => (
      <div className="item" key={item.id}>
        <div className="title">
          {item.title}
        </div>
        <div className="listItems">
     
     {item.listItems.map((listItem)=>(

<Link to={listItem.url}  key={listItem.id}> 
<div className="listItem">


<div className="icon">
 
 <img src={listItem.icon} alt="" srcset="" />
</div>

<div className="listTitle">
{listItem.title}
</div>
</div>
</Link>
     ))
    


    }
        </div>
      </div>
    ))}
  </div>
  )
}

export default Menu
