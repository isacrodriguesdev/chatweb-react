import React from 'react'

export default function(props) {

   return (
      <div className="output">
         <div className="content-message-out">
            <p>{props.message}</p> 
         </div>
      </div>
   )
}