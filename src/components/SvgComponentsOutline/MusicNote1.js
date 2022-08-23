 import React from 'react'
  
  const MusicNote1Outlined = (props) => {
    const { size = '24' , strokeWidth = '2', fill = 'none', stroke = 'black' } = props
    
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M9 18V6.3554C9 5.87387 9 5.6331 9.0876 5.43782C9.16482 5.26569 9.28917 5.11891 9.44627 5.01444C9.62449 4.89592 9.86198 4.85634 10.337 4.77717L19.137 3.31051C19.7779 3.20368 20.0984 3.15027 20.3482 3.24304C20.5674 3.32445 20.7511 3.48009 20.8674 3.6829C21 3.91402 21 4.23893 21 4.88874V16M9 18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.3431 4.34315 15 6 15C7.65685 15 9 16.3431 9 18ZM21 16C21 17.6569 19.6569 19 18 19C16.3431 19 15 17.6569 15 16C15 14.3431 16.3431 13 18 13C19.6569 13 21 14.3431 21 16Z" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  }

  export default MusicNote1Outlined 
  