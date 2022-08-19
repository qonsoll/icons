import React from 'react'

const Plus2Outlined = (props) => {
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
        d="M12 5V19M5 12H19"
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default Plus2Outlined
