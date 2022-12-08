import React from 'react'

const HamburgerOutlined = (props) => {
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
        d="M3 12.5H21M3 17L6.5 15.5L10 17L14 15.5L17.5 17L21 15.5M20 15.9286V17.5C20 19.1569 18.6569 20.5 17 20.5H7C5.34315 20.5 4 19.1569 4 17.5V16.5714M12 3.5C6.60203 3.5 4.65235 6.60347 4.14641 8.51491C4.00509 9.04881 4.44772 9.5 5 9.5H19C19.5523 9.5 19.9949 9.04881 19.8536 8.51491C19.3476 6.60347 17.398 3.5 12 3.5Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default HamburgerOutlined
