import React from 'react'

const TrafficCone2Outlined = (props) => {
  const { size = '24', fill = 'black' } = props

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 19H17M1 19H3M3 19H17M3 19L4.66667 13M17 19L15.3333 13M15.3333 13H4.66667M15.3333 13L13.6667 7M4.66667 13L6.33333 7M13.6667 7L12.4069 2.46471C12.1664 1.59907 11.3782 1 10.4798 1H9.52017C8.62176 1 7.83359 1.59907 7.59314 2.46471L6.33333 7M13.6667 7H6.33333"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default TrafficCone2Outlined
