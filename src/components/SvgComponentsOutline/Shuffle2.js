import React from 'react'

const Shuffle2Outlined = (props) => {
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
        d="M21 16V21M21 21H16M21 21L15 15M3 3L9 9M16 3H21M21 3V8M21 3L3 21"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Shuffle2Outlined
