import React from 'react'

const RoadSignOutlined = (props) => {
  const { size = '24', fill = 'black' } = props

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_548_11)">
        <path
          d="M9.5 14.5V12H15.5M15.5 12L13.5 10M15.5 12L13.5 14M2.41421 13.4142L10.5858 21.5858C11.3668 22.3668 12.6332 22.3668 13.4142 21.5858L21.5858 13.4142C22.3668 12.6332 22.3668 11.3668 21.5858 10.5858L13.4142 2.41421C12.6332 1.63316 11.3668 1.63317 10.5858 2.41421L2.41421 10.5858C1.63316 11.3668 1.63317 12.6332 2.41421 13.4142Z"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_548_11">
          <rect width={size} height={size} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default RoadSignOutlined
