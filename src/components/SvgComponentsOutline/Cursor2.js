 import React from 'react'
  
  const Cursor2Outlined = (props) => {
    const { size = '24' , strokeWidth = '2', fill = 'none', stroke = 'black' } = props
    
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M20.5056 10.7756C21.1225 10.5357 21.431 10.4157 21.5176 10.2461C21.5926 10.0992 21.5903 9.9247 21.5115 9.77978C21.4205 9.61251 21.109 9.50069 20.486 9.27705L4.59629 3.57305C4.0866 3.39008 3.83175 3.29859 3.66514 3.35629C3.52029 3.40645 3.40645 3.52029 3.35629 3.66514C3.29859 3.83175 3.39008 4.08659 3.57304 4.59629L9.277 20.486C9.50064 21.109 9.61246 21.4205 9.77973 21.5115C9.92465 21.5904 10.0991 21.5927 10.2461 21.5176C10.4157 21.431 10.5356 21.1226 10.7756 20.5057L13.3724 13.8281C13.4194 13.7072 13.4429 13.6468 13.4792 13.5959C13.5114 13.5508 13.5508 13.5114 13.5959 13.4792C13.6468 13.4429 13.7072 13.4194 13.828 13.3724L20.5056 10.7756Z" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  }

  export default Cursor2Outlined 
  