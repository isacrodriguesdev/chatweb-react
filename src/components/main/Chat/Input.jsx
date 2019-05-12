import React from 'react'

export default function(props) {

   const p = {display:"flex", height: "24px", alignItems:"center"}
   const img = {margin:"0px 2px"}

   return (
      <div className="input">
         <div className="content-message-in">
            <p>{props.message}</p> 
         </div>
      </div>
   )
}