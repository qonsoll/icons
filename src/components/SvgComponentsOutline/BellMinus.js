 import React from 'react'
  
  const BellMinusOutlined = (props) => {
    const { size = '24' , strokeWidth = '2', fill = 'none', stroke = 'black' } = props
    
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M9.35418 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M15 5H21M13 2.08389C12.6717 2.02841 12.3373 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 11.0902 5.22047 13.206 4.34967 14.6054C3.61513 15.7859 3.24786 16.3761 3.26133 16.5408C3.27624 16.7231 3.31486 16.7926 3.46178 16.9016C3.59446 17 4.19259 17 5.38886 17H18.6111C19.8075 17 20.4056 17 20.5383 16.9016C20.6852 16.7926 20.7238 16.7231 20.7388 16.5407C20.7522 16.3761 20.385 15.786 19.6505 14.6057C18.877 13.3626 18.1754 11.5544 18.0283 9" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  }

  export default BellMinusOutlined 
  