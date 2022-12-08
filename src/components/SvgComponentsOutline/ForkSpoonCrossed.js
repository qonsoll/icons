import React from 'react'

const ForkSpoonCrossedOutlined = (props) => {
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
        d="M4.25 21.25L10.25 15.25L12.25 13.25M20.25 5.25L14.75 10.75M18.25 3.25L14.25 7.25L14.75 10.75M14.75 10.75L18.25 11.25L22.25 7.25M14.75 10.75L12.25 13.25M12.25 13.25L8.75 9.75M8.75 9.75L8.87766 9.62234C9.71872 8.78128 10.0124 7.53722 9.63627 6.40882V6.40882C9.38782 5.66347 8.86901 5.03834 8.18222 4.65679L6.60437 3.7802C5.50675 3.17041 4.13787 3.36213 3.25 4.25V4.25C2.36213 5.13787 2.17041 6.50674 2.7802 7.60437L3.65679 9.18221C4.03834 9.86901 4.66347 10.3878 5.40882 10.6363V10.6363C6.53722 11.0124 7.78128 10.7187 8.62234 9.87766L8.75 9.75ZM20.25 21.25L14.25 15.25"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ForkSpoonCrossedOutlined
