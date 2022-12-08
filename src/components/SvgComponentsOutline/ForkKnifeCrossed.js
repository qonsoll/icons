import React from 'react'

const ForkKnifeCrossedOutlined = (props) => {
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
        d="M3 21L9 15M19 5L13.5 10.5M17 3L13 7L13.5 10.5M13.5 10.5L17 11L21 7M13.5 10.5L12 12M12 12L3 3V4.85786C3 7.51003 4.05357 10.0536 5.92893 11.9289L9 15M12 12L9 15M21 21L15 15"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ForkKnifeCrossedOutlined
