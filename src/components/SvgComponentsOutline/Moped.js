import React from 'react'

const MopedOutlined = (props) => {
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
        d="M22 13.2572C21.0491 12.4718 19.8296 12 18.5 12C15.631 12 13.275 14.1967 13.0224 17H12.2C11.0799 17 10.5198 17 10.092 16.782C9.71569 16.5903 9.40973 16.2843 9.21799 15.908C9 15.4802 9 14.9201 9 13.8V10H6.8C5.11984 10 4.27976 10 3.63803 10.327C3.07354 10.6146 2.6146 11.0735 2.32698 11.638C2 12.2798 2 13.1198 2 14.8V17H11M9 17.5C9 18.8807 7.88071 20 6.5 20C5.11929 20 4 18.8807 4 17.5M5 7H9M15.5 6H18.5M17 12L15 4H13M18.75 7L18.25 5M21 17.5C21 18.8807 19.8807 20 18.5 20C17.1193 20 16 18.8807 16 17.5C16 16.1193 17.1193 15 18.5 15C19.8807 15 21 16.1193 21 17.5Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default MopedOutlined
