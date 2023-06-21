import React from 'react'

const SortDownAlphabetDescOutlined = (props) => {
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
        d="M7 3V21M7 21L3 17M7 21L11 17M15.5 14H20.5L15.5 21H20.5M16 9H20M15 10L18 3L21 10"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SortDownAlphabetDescOutlined
