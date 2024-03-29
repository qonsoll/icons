import React from 'react'

const DropperOutlined = (props) => {
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
        d="M10.5 6.50006L17.5 13.5001M2 22.0001C2 22.0001 6.5 21.5001 9 19.0001L21 7.00006C22.1046 5.89549 22.1046 4.10463 21 3.00006C19.8954 1.89549 18.1046 1.89549 17 3.00006L5 15.0001C2.5 17.5001 2 22.0001 2 22.0001Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default DropperOutlined
