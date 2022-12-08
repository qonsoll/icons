import React from 'react'

const CookieOutlined = (props) => {
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
        d="M12.1521 4.08723C12.1513 3.71959 12.1001 3.3538 12 3C16.9683 3.00545 20.9944 7.03979 21 12C21.0161 16.9625 16.9705 20.9838 12 21C7.02946 21.016 3.01615 16.9625 3 12C4.11168 12.2358 5.27038 11.9986 6.1499 11.28C7.0562 10.5457 7.5789 9.43968 7.5702 8.2744C7.56959 8.01228 7.5461 7.75069 7.5 7.49264C8.51784 7.89621 9.67043 7.76477 10.5708 7.1423C11.5696 6.44605 12.161 5.3034 12.1521 4.08723Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default CookieOutlined
