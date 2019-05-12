import React from 'react'

import b64e from './base64Emojis'

export default function (props) {

   function getEmoji(e) {
      e.stopPropagation()
      console.log(e.target.src)
   }


   return (
      <div className="mini-panel-emojis">
         <div className="emojis" onClick={(e) => getEmoji(e)}>
            <img src="https://image.flaticon.com/icons/svg/742/742751.svg" />
            <img src="https://image.flaticon.com/icons/svg/742/742752.svg" />
            <img src="https://image.flaticon.com/icons/svg/742/742860.svg" />
            <img src="https://image.flaticon.com/icons/svg/742/742744.svg" />
            <img src="https://image.flaticon.com/icons/svg/742/742814.svg" />
            <img src="https://image.flaticon.com/icons/svg/742/742919.svg" />
            <img src="https://image.flaticon.com/icons/svg/742/742822.svg" />
            <img src="https://image.flaticon.com/icons/svg/742/742872.svg" />
            <img src="https://image.flaticon.com/icons/svg/742/742816.svg" />
            <img src="https://image.flaticon.com/icons/svg/742/742774.svg" />
         </div>
      </div>
   )
}


{/* <img src="https://image.flaticon.com/icons/svg/742/742751.svg" />
<img src="https://image.flaticon.com/icons/svg/742/742752.svg" />
<img src="https://image.flaticon.com/icons/svg/742/742860.svg" />
<img src="https://image.flaticon.com/icons/svg/742/742744.svg" />
<img src="https://image.flaticon.com/icons/svg/742/742814.svg" />
<img src="https://image.flaticon.com/icons/svg/742/742919.svg" />
<img src="https://image.flaticon.com/icons/svg/742/742822.svg" />
<img src="https://image.flaticon.com/icons/svg/742/742872.svg" />
<img src="https://image.flaticon.com/icons/svg/742/742816.svg" />
<img src="https://image.flaticon.com/icons/svg/742/742774.svg" /> */}