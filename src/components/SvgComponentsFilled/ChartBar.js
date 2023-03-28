import React from 'react'

const Activities = (props) => {
  const { size = '16', fill = '#424851' } = props

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M16.6694,2.0004 C20.0704,2.0004 21.9904,3.9294 22.0004,7.3304 L22.0004,7.3304 L22.0004,16.6704 C22.0004,20.0704 20.0704,22.0004 16.6694,22.0004 L16.6694,22.0004 L7.3304,22.0004 C3.9294,22.0004 2.0004,20.0704 2.0004,16.6704 L2.0004,16.6704 L2.0004,7.3304 C2.0004,3.9294 3.9294,2.0004 7.3304,2.0004 L7.3304,2.0004 Z M12.5004,6.1304 C12.2194,5.9604 11.8794,5.9604 11.6104,6.1304 C11.3394,6.2994 11.1904,6.6104 11.2194,6.9204 L11.2194,6.9204 L11.2194,17.1104 C11.2704,17.5404 11.6294,17.8604 12.0494,17.8604 C12.4804,17.8604 12.8394,17.5404 12.8794,17.1104 L12.8794,17.1104 L12.8794,6.9204 C12.9194,6.6104 12.7704,6.2994 12.5004,6.1304 Z M7.8304,9.4104 C7.5604,9.2404 7.2194,9.2404 6.9504,9.4104 C6.6794,9.5804 6.5304,9.8894 6.5604,10.2004 L6.5604,10.2004 L6.5604,17.1104 C6.5994,17.5404 6.9594,17.8604 7.3894,17.8604 C7.8204,17.8604 8.1794,17.5404 8.2194,17.1104 L8.2194,17.1104 L8.2194,10.2004 C8.2504,9.8894 8.0994,9.5804 7.8304,9.4104 Z M17.0894,13.0404 C16.8204,12.8704 16.4804,12.8704 16.2004,13.0404 C15.9294,13.2104 15.7804,13.5094 15.8204,13.8304 L15.8204,13.8304 L15.8204,17.1104 C15.8604,17.5404 16.2194,17.8604 16.6504,17.8604 C17.0704,17.8604 17.4294,17.5404 17.4804,17.1104 L17.4804,17.1104 L17.4804,13.8304 C17.5094,13.5094 17.3604,13.2104 17.0894,13.0404 Z"
        id="Chart"
        fill={fill}
      ></path>
    </svg>
  )
}

export default Activities