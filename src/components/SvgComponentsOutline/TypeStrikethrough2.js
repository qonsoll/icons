 import React from 'react'
  
  const TypeStrikethrough2Outlined = (props) => {
    const { size = '24' , strokeWidth = '2', fill = 'none', stroke = 'black' } = props
    
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M8 20H16M10.25 10.5V20M13.75 14V20M3 3L21 21M4 6.99995V5.99995C4 5.45873 4.21497 4.96773 4.56419 4.60767M9.5 4H17C17.9319 4 18.3978 4 18.7654 4.15224C19.2554 4.35523 19.6448 4.74458 19.8478 5.23463C20 5.60218 20 6.06812 20 7M10.25 4V5M13.75 4V8" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  }

  export default TypeStrikethrough2Outlined 
  