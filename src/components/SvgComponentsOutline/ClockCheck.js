import React from 'react'

const ClockCheckOutlined = (props) => {
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
        d="M14.5 19L16.5 21L21 16.5M21.9851 12.5499C21.995 12.3678 22 12.1845 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.4354 6.33651 21.858 11.7385 21.9966M12 6V12L15.7384 13.8692"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ClockCheckOutlined
