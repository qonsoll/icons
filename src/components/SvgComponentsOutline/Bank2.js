import React from 'react'

const Bank2Outlined = (props) => {
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
        d="M3 21H21M4 18H20M6 18V13M10 18V13M14 18V13M18 18V13M12 7.00683L12.0074 7.0001M21 9.99999L14.126 3.88974C13.3737 3.22108 12.9976 2.88675 12.5732 2.75979C12.1992 2.64794 11.8008 2.64794 11.4268 2.75979C11.0024 2.88675 10.6263 3.22108 9.87404 3.88974L3 9.99999H21Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Bank2Outlined
