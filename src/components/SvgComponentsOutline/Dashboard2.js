import React from 'react'

const Dashboard2Outlined = (props) => {
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
        d="M8 3H5C3.89543 3 3 3.89543 3 5V8C3 9.10457 3.89543 10 5 10H8C9.10457 10 10 9.10457 10 8V5C10 3.89543 9.10457 3 8 3Z"
        stroke={fill}
        strokeWidth="2"
      />
      <path
        d="M8 14H5C3.89543 14 3 14.8954 3 16V19C3 20.1046 3.89543 21 5 21H8C9.10457 21 10 20.1046 10 19V16C10 14.8954 9.10457 14 8 14Z"
        stroke={fill}
        strokeWidth="2"
      />
      <path
        d="M19 14H16C14.8954 14 14 14.8954 14 16V19C14 20.1046 14.8954 21 16 21H19C20.1046 21 21 20.1046 21 19V16C21 14.8954 20.1046 14 19 14Z"
        stroke={fill}
        strokeWidth="2"
      />
      <path
        d="M16.0858 2.91421L13.9142 5.08579C13.1332 5.86684 13.1332 7.13316 13.9142 7.91421L16.0858 10.0858C16.8668 10.8668 18.1332 10.8668 18.9142 10.0858L21.0858 7.91421C21.8668 7.13316 21.8668 5.86684 21.0858 5.08579L18.9142 2.91421C18.1332 2.13317 16.8668 2.13316 16.0858 2.91421Z"
        stroke={fill}
        strokeWidth="2"
      />
    </svg>
  )
}

export default Dashboard2Outlined
