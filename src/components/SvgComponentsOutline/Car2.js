import React from 'react'

const Car2Outlined = (props) => {
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
        d="M5 10V10C3.89543 10 3 10.8954 3 12V16C3 17.1046 3.89543 18 5 18V18M5 10L6.54415 5.36754C6.81638 4.55086 7.58066 4 8.44152 4H15.5585C16.4193 4 17.1836 4.55086 17.4558 5.36754L19 10M5 10H19M19 10V10C20.1046 10 21 10.8954 21 12V16C21 17.1046 20.1046 18 19 18V18M19 18V20M19 18H5M5 18V20M11 14H13M7 14H7.01M17 14H16.99"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default Car2Outlined
