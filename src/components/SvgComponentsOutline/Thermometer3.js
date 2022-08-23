 import React from 'react'
  
  const Thermometer3Outlined = (props) => {
    const { size = '24' , fill = 'black' } = props
    
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 3L15 3M21 7L15 7M21 11L15 11M5.5 13.7578V4.5C5.5 3.11929 6.61929 2 8 2C9.38071 2 10.5 3.11929 10.5 4.5V13.7578C11.706 14.565 12.5 15.9398 12.5 17.5C12.5 19.9853 10.4853 22 8 22C5.51472 22 3.5 19.9853 3.5 17.5C3.5 15.9398 4.29401 14.565 5.5 13.7578ZM9 17.5C9 18.0523 8.55228 18.5 8 18.5C7.44772 18.5 7 18.0523 7 17.5C7 16.9477 7.44772 16.5 8 16.5C8.55228 16.5 9 16.9477 9 17.5Z" stroke={fill} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  }

  export default Thermometer3Outlined 
  