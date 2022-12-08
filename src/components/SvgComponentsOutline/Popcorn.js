import React from 'react'

const PopcornOutlined = (props) => {
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
        d="M16 10L12 8.5L8 10M16 10L14.5 21M16 10L20.2336 8.30657M8 10L9.5 21M8 10L3.76642 8.30657M14.5 21H17.2045C17.6701 21 18.0742 20.6786 18.1789 20.2249L21 8L20.2336 8.30657M14.5 21H9.5M9.5 21H6.79551C6.32986 21 5.92583 20.6786 5.82112 20.2249L3 8L3.76642 8.30657M3.76642 8.30657C3.81256 7.84048 3.95536 7.38781 4.18707 6.97798C4.47379 6.47087 4.88688 6.04661 5.38616 5.74648C5.88545 5.44634 6.45391 5.28055 7.03626 5.26523C7.61861 5.24992 8.19501 5.3856 8.70938 5.65907C8.871 4.90633 9.28582 4.23175 9.88465 3.74786C10.4835 3.26396 11.2301 3 12 3C12.7699 3 13.5165 3.26396 14.1154 3.74786C14.7142 4.23175 15.129 4.90633 15.2906 5.65907C15.805 5.3856 16.3814 5.24992 16.9637 5.26523C17.5461 5.28055 18.1146 5.44634 18.6138 5.74648C19.1131 6.04661 19.5262 6.47087 19.8129 6.97798C20.0446 7.38781 20.1874 7.84048 20.2336 8.30657"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default PopcornOutlined
