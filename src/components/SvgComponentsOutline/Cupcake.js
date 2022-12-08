import React from 'react'

const CupcakeOutlined = (props) => {
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
        d="M19 14H5M19 14C20.3031 13.3956 21 11.7636 21 10.3334C21 8.79795 19.9706 7.48289 18.5098 6.93677C18.197 6.81985 18 6.51797 18 6.20837C18 4.94272 16.8807 3.91663 15.5 3.91663C15.2737 3.91663 15.0546 3.94418 14.8462 3.99583C14.414 4.10292 13.9305 4.07934 13.5586 3.85083C12.6841 3.31346 11.6319 3 10.5 3C7.46243 3 5 5.25723 5 8.04167C5 8.39362 4.77089 8.71596 4.44287 8.89889C3.57772 9.38137 3 10.2538 3 11.25C3 12.5274 3.71228 13.6908 5 14M19 14L18.2453 19.2829C18.1046 20.2681 17.2607 21 16.2654 21H7.73459C6.73929 21 5.89545 20.2681 5.75469 19.2828L5 14M14 21L14.5 14M10 21L9.5 14"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default CupcakeOutlined
