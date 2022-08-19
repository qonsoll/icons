 import React from 'react'
  
  const Speedometer4Outlined = (props) => {
    const { size = '24' , strokeWidth = '2', fill = 'none', stroke = 'black' } = props
    
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M17.7453 16C18.5362 14.8661 19 13.4872 19 12C19 11.4851 18.9444 10.9832 18.8389 10.5M6.25469 16C5.46381 14.8662 5 13.4872 5 12C5 8.13401 8.13401 5 12 5C12.4221 5 12.8355 5.03737 13.2371 5.10897M16.4999 7.5L11.9999 12M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  }

  export default Speedometer4Outlined 
  