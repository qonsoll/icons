 import React from 'react'
  
  const FlashOutlined = (props) => {
    const { size = '24' , fill = 'black' } = props
    
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2L4.09347 12.6879C3.74466 13.1064 3.57026 13.3157 3.56759 13.4925C3.56528 13.6461 3.63375 13.7923 3.75327 13.8889C3.89076 14 4.16319 14 4.70805 14H12L11 22L19.9066 11.3121C20.2554 10.8936 20.4298 10.6843 20.4324 10.5075C20.4348 10.3539 20.3663 10.2077 20.2468 10.1111C20.1093 10 19.8368 10 19.292 10H12L13 2Z" stroke={fill} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  }

  export default FlashOutlined 
  