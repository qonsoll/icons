 import React from 'react'
  
  const PieChart3Outlined = (props) => {
    const { size = '24' , fill = 'black' } = props
    
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C13.3132 2 14.6136 2.25866 15.8268 2.76121C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7363 6.95991 21.2388 8.17317C21.7413 9.38643 22 10.6868 22 12M12 2V12M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5229 22 12M12 2C17.5228 2 22 6.47716 22 12M22 12L12 12M22 12C22 13.5781 21.6265 15.1338 20.9101 16.5399C20.1936 17.946 19.1546 19.1626 17.8779 20.0902L12 12" stroke={fill} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  }

  export default PieChart3Outlined 
  