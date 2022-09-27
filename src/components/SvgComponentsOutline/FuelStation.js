import React from 'react'

const FuelStationOutlined = (props) => {
  const { size = '24', fill = 'black' } = props

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 11V19C3 20.1046 3.89543 21 5 21H11C12.1046 21 13 20.1046 13 19V15M3 11V5C3 3.89543 3.89543 3 5 3H11C12.1046 3 13 3.89543 13 5V11M3 11H13M13 11V15M13 15H15C16.1046 15 17 15.8954 17 17V19C17 20.1046 17.8954 21 19 21V21C20.1046 21 21 20.1046 21 19V14M17 4L18.5 5.5M18.5 5.5L19.8284 6.82843C20.5786 7.57857 21 8.59599 21 9.65685V14M18.5 5.5L17.4235 8.37057C17.163 9.06524 17.3085 9.84704 17.8014 10.4015L21 14"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  )
}

export default FuelStationOutlined
