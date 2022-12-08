import React from 'react'

const ClocheOutlined = (props) => {
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
        d="M12 9C14.5 9 16 10 17 12M12 6C7.58172 6 4 9.58172 4 14C4 15.4571 4.38958 16.8233 5.07026 18M12 6C16.4183 6 20 9.58172 20 14C20 15.4571 19.6104 16.8233 18.9297 18M12 6C12.8284 6 13.5 5.32843 13.5 4.5C13.5 3.67157 12.8284 3 12 3C11.1716 3 10.5 3.67157 10.5 4.5C10.5 5.32843 11.1716 6 12 6ZM4.5 21H19.5C20.3284 21 21 20.3284 21 19.5C21 18.6716 20.3284 18 19.5 18H4.5C3.67157 18 3 18.6716 3 19.5C3 20.3284 3.67157 21 4.5 21Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ClocheOutlined
