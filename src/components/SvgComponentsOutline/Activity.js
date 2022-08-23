 import React from 'react'
  
  const ActivityOutlined = (props) => {
    const { size = '24' , fill = 'black' } = props
    
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12H18L15 21L9 3L6 12H2" stroke={fill} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  }

  export default ActivityOutlined 
  