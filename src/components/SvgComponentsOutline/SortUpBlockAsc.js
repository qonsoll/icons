import React from 'react'

const SortUpBlockAscOutlined = (props) => {
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
        d="M7 3V21M7 3L11 7M7 3L3 7M15.6 20H19.4C19.9601 20 20.2401 20 20.454 19.891C20.6422 19.7951 20.7951 19.6422 20.891 19.454C21 19.2401 21 18.9601 21 18.4V14.6C21 14.0399 21 13.7599 20.891 13.546C20.7951 13.3578 20.6422 13.2049 20.454 13.109C20.2401 13 19.9601 13 19.4 13H15.6C15.0399 13 14.7599 13 14.546 13.109C14.3578 13.2049 14.2049 13.3578 14.109 13.546C14 13.7599 14 14.0399 14 14.6V18.4C14 18.9601 14 19.2401 14.109 19.454C14.2049 19.6422 14.3578 19.7951 14.546 19.891C14.7599 20 15.0399 20 15.6 20ZM15.6 9H17.4C17.9601 9 18.2401 9 18.454 8.89101C18.6422 8.79513 18.7951 8.64215 18.891 8.45399C19 8.24008 19 7.96005 19 7.4V5.6C19 5.03995 19 4.75992 18.891 4.54601C18.7951 4.35785 18.6422 4.20487 18.454 4.10899C18.2401 4 17.9601 4 17.4 4H15.6C15.0399 4 14.7599 4 14.546 4.10899C14.3578 4.20487 14.2049 4.35785 14.109 4.54601C14 4.75992 14 5.03995 14 5.6V7.4C14 7.96005 14 8.24008 14.109 8.45399C14.2049 8.64215 14.3578 8.79513 14.546 8.89101C14.7599 9 15.0399 9 15.6 9Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SortUpBlockAscOutlined
