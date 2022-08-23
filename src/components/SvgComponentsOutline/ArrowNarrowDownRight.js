 import React from 'react'
  
  const ArrowNarrowDownRightOutlined = (props) => {
    const { size = '24' , strokeWidth = '2', fill = 'none', stroke = 'black' } = props
    
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M6 6L18 18M18 18V10M18 18H10" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  }

  export default ArrowNarrowDownRightOutlined 
  