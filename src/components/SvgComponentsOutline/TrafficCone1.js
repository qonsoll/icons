import React from 'react'

const TrafficCone1Outlined = (props) => {
  const { size = '24', fill = 'black' } = props

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 6.99999H13M5 12H15M1 17H19M17 17L11.0597 1.72489C10.8897 1.28787 10.4689 1 10 1C9.53109 1 9.11027 1.28787 8.94032 1.72489L3 17H17Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default TrafficCone1Outlined
