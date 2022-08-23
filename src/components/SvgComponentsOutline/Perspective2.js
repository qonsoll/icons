 import React from 'react'
  
  const Perspective2Outlined = (props) => {
    const { size = '24' , strokeWidth = '2', fill = 'none', stroke = 'black' } = props
    
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M16 4.99994L16 18.9999M10 3.99995L10 19.9999M3 11.9999H21M3 5.98912L3 18.0108C3 19.3748 3 20.0568 3.28134 20.5296C3.52803 20.9441 3.9162 21.2554 4.37434 21.4063C4.89685 21.5784 5.56262 21.4305 6.89418 21.1346L18.4942 18.5568C19.3883 18.3581 19.8354 18.2588 20.1691 18.0183C20.4634 17.8063 20.6945 17.5182 20.8377 17.1848C21 16.8069 21 16.3489 21 15.433V8.5669C21 7.65096 21 7.193 20.8377 6.81508C20.6945 6.48174 20.4634 6.19361 20.1691 5.98155C19.8354 5.74114 19.3883 5.64179 18.4942 5.4431L6.89418 2.86532C5.56262 2.56942 4.89685 2.42147 4.37434 2.59356C3.9162 2.74445 3.52803 3.05583 3.28134 3.47033C3 3.94306 3 4.62508 3 5.98912Z" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  }

  export default Perspective2Outlined 
  