 import React from 'react'
  
  const Disc1Outlined = (props) => {
    const { size = '24' , fill = 'black' } = props
    
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={fill} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke={fill} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  }

  export default Disc1Outlined 
  