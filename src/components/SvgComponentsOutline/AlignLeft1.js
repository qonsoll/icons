import React from 'react'

const AlignLeft1Outlined = (props) => {
  const {
    size = '24',
    strokeWidth = '2',
    fill = 'none',
    stroke = 'black'
  } = props

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 3V21M21 12H7M7 12L14 19M7 12L14 5"
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default AlignLeft1Outlined
