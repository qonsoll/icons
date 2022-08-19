 import React from 'react'
  
  const Globe1Outlined = (props) => {
    const { size = '24' , strokeWidth = '2', fill = 'none', stroke = 'black' } = props
    
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M18.6318 2.36816C23.1228 6.85919 23.1228 14.1406 18.6318 18.6316C14.3309 22.9325 7.47106 23.1146 2.95347 19.178C2.75646 19.0064 2.65795 18.9205 2.61348 18.8032C2.57607 18.7044 2.57188 18.5824 2.60244 18.4813C2.63875 18.3612 2.73717 18.2628 2.934 18.0659L5.14925 15.8507M18 10.4999C18 14.642 14.6422 17.9999 10.5 17.9999C6.35791 17.9999 3.00004 14.642 3.00004 10.4999C3.00004 6.35776 6.35791 2.99989 10.5 2.99989C14.6422 2.99989 18 6.35776 18 10.4999Z" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  }

  export default Globe1Outlined 
  