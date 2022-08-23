 import React from 'react'
  
  const FramerOutlined = (props) => {
    const { size = '24' , strokeWidth = '2', fill = 'none', stroke = 'black' } = props
    
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M12 15.5V22.5L5 15.5M5 15.5V8.5H12M5 15.5H19L12 8.5M12 8.5H19V1.5H5L12 8.5Z" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  }

  export default FramerOutlined 
  