 import React from 'react'
  
  const Flag3Outlined = (props) => {
    const { size = '24' , strokeWidth = '2', fill = 'none', stroke = 'black' } = props
    
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M4 13H19.587C20.0495 13 20.2808 13 20.4128 12.903C20.528 12.8185 20.6015 12.6887 20.6147 12.5464C20.63 12.3833 20.511 12.185 20.273 11.7884L18.247 8.4116C18.1572 8.26195 18.1123 8.18712 18.0947 8.10724C18.0792 8.03659 18.0792 7.96341 18.0947 7.89276C18.1123 7.81288 18.1572 7.73805 18.247 7.5884L20.273 4.2116C20.511 3.81503 20.63 3.61674 20.6147 3.45359C20.6015 3.31133 20.528 3.18154 20.4128 3.09698C20.2808 3 20.0495 3 19.587 3H4L4 21" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  }

  export default Flag3Outlined 
  