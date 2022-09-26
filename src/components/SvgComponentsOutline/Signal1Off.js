import React from 'react'

const Signal1OffOutlined = (props) => {
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
        d="M16.2426 7.75736C17.6695 9.18422 18.2275 11.1509 17.9166 13M7.75736 16.2426C5.41421 13.8995 5.41421 10.1005 7.75736 7.75732M4.92893 19.0711C1.02369 15.1658 1.02369 8.83418 4.92893 4.92893M19.0711 4.92898C21.9628 7.8207 22.7133 12.0428 21.3225 15.6251M10.5 10.6771C10.1888 11.0297 10 11.4928 10 12C10 13.1046 10.8954 14 12 14C12.5072 14 12.9703 13.8112 13.3229 13.5M21 21L3 3"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default Signal1OffOutlined
