 import React from 'react'
  
  const GridDotsTopOutlined = (props) => {
    const { size = '24' , strokeWidth = '2', fill = 'none', stroke = 'black' } = props
    
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M3 21H3.01M3 12H3.01M3 16.5H3.01M3 7.5H3.01M7.5 21H7.51M7.5 12H7.51M16.5 21H16.51M16.5 12H16.51M12 21H12.01M12 12H12.01M12 16.5H12.01M12 7.5H12.01M21 21H21.01M21 12H21.01M21 16.5H21.01M21 7.5H21.01M21 3H3" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  }

  export default GridDotsTopOutlined 
  