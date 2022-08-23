 import React from 'react'
  
  const MusicNote2Outlined = (props) => {
    const { size = '24' , fill = 'black' } = props
    
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 18V5.58886C12 4.73164 12 4.30303 12.1805 4.04489C12.3382 3.81949 12.5817 3.66898 12.8538 3.62877C13.1655 3.58273 13.5488 3.77441 14.3155 4.15777L18 6M12 18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3431 7.34315 15 9 15C10.6569 15 12 16.3431 12 18Z" stroke={fill} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  }

  export default MusicNote2Outlined 
  