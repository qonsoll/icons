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
        d="M3 6.2C3 5.0799 3 4.51984 3.21799 4.09202C3.40973 3.71569 3.71569 3.40973 4.09202 3.21799C4.51984 3 5.07989 3 6.2 3H6.8C7.9201 3 8.48016 3 8.90798 3.21799C9.28431 3.40973 9.59027 3.71569 9.78201 4.09202C10 4.51984 10 5.07989 10 6.2V6.8C10 7.9201 10 8.48016 9.78201 8.90798C9.59027 9.28431 9.28431 9.59027 8.90798 9.78201C8.48016 10 7.92011 10 6.8 10H6.2C5.0799 10 4.51984 10 4.09202 9.78201C3.71569 9.59027 3.40973 9.28431 3.21799 8.90798C3 8.48016 3 7.92011 3 6.8V6.2Z"
        stroke={fill}
        stroke-width="2"
      />
    </svg>
  )
}

export default Dashboard2Outlined