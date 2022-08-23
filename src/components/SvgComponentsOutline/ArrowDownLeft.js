 import React from 'react'
  
  const ArrowDownLeftOutlined = (props) => {
    const { size = '24' , strokeWidth = '2', fill = 'none', stroke = 'black' } = props
    
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M17 7L7 17M7 17H17M7 17V7" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  }

  export default ArrowDownLeftOutlined 
  