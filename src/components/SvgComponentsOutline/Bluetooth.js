 import React from 'react'
  
  const BluetoothOutlined = (props) => {
    const { size = '24' , strokeWidth = '2', fill = 'none', stroke = 'black' } = props
    
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M6 17L12 12V22L17.4398 17.4668M12 7V2L18 7L15.0817 9.43194M21 21L3 3" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  }

  export default BluetoothOutlined 
  