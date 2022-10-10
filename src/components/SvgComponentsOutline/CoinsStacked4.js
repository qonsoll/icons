import React from 'react'

const CoinsStacked4Outlined = (props) => {
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
        d="M20 5C20 6.65685 16.4183 8 12 8C7.58172 8 4 6.65685 4 5M20 5C20 3.34315 16.4183 2 12 2C7.58172 2 4 3.34315 4 5M20 5V19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19V5M20 9.6666C20 11.3235 16.4183 12.6666 12 12.6666C7.58172 12.6666 4 11.3235 4 9.6666M20 14.33C20 15.9869 16.4183 17.33 12 17.33C7.58172 17.33 4 15.9869 4 14.33"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default CoinsStacked4Outlined
