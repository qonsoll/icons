import React from 'react'

const Globe2Outlined = (props) => {
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
        d="M2.66113 18.3388L7.25499 13.745M18.2175 2.78247C21.9275 6.49245 21.9275 12.5075 18.2175 16.2175C14.5075 19.9275 8.49243 19.9275 4.78245 16.2175M17 22H6.99997M12 22V19M17.5 9.49998C17.5 12.8137 14.8137 15.5 11.5 15.5C8.18626 15.5 5.49997 12.8137 5.49997 9.49998C5.49997 6.18628 8.18626 3.49998 11.5 3.49998C14.8137 3.49998 17.5 6.18628 17.5 9.49998Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Globe2Outlined
