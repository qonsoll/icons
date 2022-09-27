import React from 'react'

const DashboardOutlined = (props) => {
  const { size = '24', strokeWidth = '2', fill = 'black' } = props

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.75 6H16.25C15.5596 6 15 6.55964 15 7.25V9.75C15 10.4404 15.5596 11 16.25 11H18.75C19.4404 11 20 10.4404 20 9.75V7.25C20 6.55964 19.4404 6 18.75 6Z"
        stroke={fill}
        stroke-width={strokeWidth}
      />
      <path
        d="M18.75 15H16.25C15.5596 15 15 15.5596 15 16.25V18.75C15 19.4404 15.5596 20 16.25 20H18.75C19.4404 20 20 19.4404 20 18.75V16.25C20 15.5596 19.4404 15 18.75 15Z"
        stroke={fill}
        stroke-width={strokeWidth}
      />
      <path
        d="M11 16.25V18.75C11 19.4404 10.4404 20 9.75 20H7.25C6.55964 20 6 19.4404 6 18.75V16.25C6 15.5596 6.55964 15 7.25 15H9.75C10.4404 15 11 15.5596 11 16.25Z"
        stroke={fill}
        stroke-width={strokeWidth}
      />
      <path
        d="M11 5.25V9.75C11 10.4404 10.4404 11 9.75 11H5.25C4.55964 11 4 10.4404 4 9.75V5.25C4 4.55964 4.55964 4 5.25 4H9.75C10.4404 4 11 4.55964 11 5.25Z"
        stroke={fill}
        stroke-width={strokeWidth}
      />
    </svg>
  )
}

export default DashboardOutlined
