import React from 'react'

const ForkKnifeOutlined = (props) => {
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
        d="M16 21V11M16 3V11M19 3V9L16 11M16 11L13 9V3M9 21V14M9 14H5V9.32624C5 6.67483 6.49802 4.25099 8.8695 3.06525L9 3V14Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ForkKnifeOutlined
