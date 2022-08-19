 import React from 'react'
  
  const Download4Outlined = (props) => {
    const { size = '24' , strokeWidth = '2', fill = 'none', stroke = 'black' } = props
    
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M8 12.0001L12 16.0001M12 16.0001L16 12.0001M12 16.0001V6.80006C12 5.40935 12 4.714 11.4495 3.93546C11.0837 3.41818 10.0306 2.77974 9.40278 2.69468C8.45789 2.56666 8.09907 2.75384 7.38143 3.1282C4.18333 4.79649 2 8.14331 2 12.0001C2 17.5229 6.47715 22.0001 12 22.0001C17.5228 22.0001 22 17.5229 22 12.0001C22 8.29865 19.989 5.06693 17 3.33788" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  }

  export default Download4Outlined 
  