import React from 'react'

const Invalid2Outlined = (props) => {
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
        d="M6.5 8L9 6.5L13.5 9L11.5 15H17.5V21H19.5M8.97736 11.0274C8.153 11.114 7.36311 11.4043 6.67877 11.872C5.99442 12.3397 5.43709 12.9702 5.05691 13.7068C4.67674 14.4433 4.48565 15.2629 4.50084 16.0916C4.51603 16.9204 4.73702 17.7324 5.14393 18.4545C5.55084 19.1767 6.1309 19.7863 6.83193 20.2286C7.53295 20.671 8.33294 20.932 9.15992 20.9884C9.9869 21.0448 10.8149 20.8947 11.5695 20.5516C12.3241 20.2085 12.9815 19.6832 13.4826 19.023M17 5C17 5.55228 16.5523 6 16 6C15.4477 6 15 5.55228 15 5C15 4.44772 15.4477 4 16 4C16.5523 4 17 4.44772 17 5Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Invalid2Outlined
