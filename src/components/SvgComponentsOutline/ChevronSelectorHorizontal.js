 import React from 'react'
  
  const ChevronSelectorHorizontalOutlined = (props) => {
    const { size = '24' , fill = 'black' } = props
    
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 7L4 12L9 17M15 7L20 12L15 17" stroke={fill} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  }

  export default ChevronSelectorHorizontalOutlined 
  