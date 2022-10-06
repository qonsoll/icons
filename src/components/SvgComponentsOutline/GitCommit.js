import React from 'react'

const GitCommitOutlined = (props) => {
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
        d="M16 12C16 14.2091 14.2092 16 12 16C9.79091 16 8.00005 14.2091 8.00005 12M16 12C16 9.79086 14.2092 8 12 8C9.79091 8 8.00005 9.79086 8.00005 12M16 12H22M8.00005 12H2.00024"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default GitCommitOutlined
