 import React from 'react'
  
  const SpacingWidth2Outlined = (props) => {
    const { size = '24' , fill = 'black' } = props
    
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21V3M3 21V3M6.5 12H17.5M17.5 15L17.5 9M6.5 15L6.5 9" stroke={fill} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  }

  export default SpacingWidth2Outlined 
  