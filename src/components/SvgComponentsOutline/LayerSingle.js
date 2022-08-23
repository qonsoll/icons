 import React from 'react'
  
  const LayerSingleOutlined = (props) => {
    const { size = '24' , strokeWidth = '2', fill = 'none', stroke = 'black' } = props
    
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M12.3578 7.17889C12.2266 7.1133 12.161 7.0805 12.0922 7.0676C12.0313 7.05616 11.9687 7.05616 11.9078 7.0676C11.839 7.0805 11.7734 7.1133 11.6422 7.17889L2 12L11.6422 16.8211C11.7734 16.8867 11.839 16.9195 11.9078 16.9324C11.9687 16.9438 12.0313 16.9438 12.0922 16.9324C12.161 16.9195 12.2266 16.8867 12.3578 16.8211L22 12L12.3578 7.17889Z" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  }

  export default LayerSingleOutlined 
  