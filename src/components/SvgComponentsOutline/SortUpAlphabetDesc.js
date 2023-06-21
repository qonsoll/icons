import React from 'react'

const SortUpAlphabetDescOutlined = (props) => {
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
        d="M7 3V21M7 3L11 7M7 3L3 7M15.5 3H20.5L15.5 10H20.5M16 20H20M15 21L18 14L21 21"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SortUpAlphabetDescOutlined
