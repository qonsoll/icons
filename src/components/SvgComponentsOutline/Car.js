import React from 'react'

const CarOutlined = (props) => {
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
        d="M3 15H2C2 15.5523 2.44772 16 3 16V15ZM21 15V16C21.5523 16 22 15.5523 22 15H21ZM6.67845 6.60777L5.69787 6.41165L6.67845 6.60777ZM22 15V12H20V15H22ZM2 12V15H4V12H2ZM6 9H5V11H6V9ZM6.98058 10.1961L7.65903 6.80388L5.69787 6.41165L5.01942 9.80388L6.98058 10.1961ZM19 9H18V11H19V9ZM15.5744 6.62861L17.0715 10.3714L18.9285 9.62861L17.4314 5.88583L15.5744 6.62861ZM8.63961 6H12V4H8.63961V6ZM12 6H14.6459V4H12V6ZM18 9H12V11H18V9ZM12 9H6V11H12V9ZM11 5V10H13V5H11ZM3 16H6V14H3V16ZM21 14H18V16H21V14ZM16 14H8V16H16V14ZM7 13C5.3492 13 4 14.3417 4 16H6C6 15.4492 6.4508 15 7 15V13ZM4 16C4 17.6569 5.34315 19 7 19V17C6.44772 17 6 16.5523 6 16H4ZM7 19C8.65685 19 10 17.6569 10 16H8C8 16.5523 7.55228 17 7 17V19ZM10 16C10 14.3417 8.6508 13 7 13V15C7.5492 15 8 15.4492 8 16H10ZM17 13C15.3492 13 14 14.3417 14 16H16C16 15.4492 16.4508 15 17 15V13ZM14 16C14 17.6569 15.3431 19 17 19V17C16.4477 17 16 16.5523 16 16H14ZM17 19C18.6569 19 20 17.6569 20 16H18C18 16.5523 17.5523 17 17 17V19ZM20 16C20 14.3417 18.6508 13 17 13V15C17.5492 15 18 15.4492 18 16H20ZM17.4314 5.88583C16.9758 4.74685 15.8726 4 14.6459 4V6C15.0548 6 15.4225 6.24895 15.5744 6.62861L17.4314 5.88583ZM7.65903 6.80388C7.75251 6.33646 8.16293 6 8.63961 6V4C7.20956 4 5.97832 5.00938 5.69787 6.41165L7.65903 6.80388ZM4 12C4 11.4477 4.44772 11 5 11V9C3.34315 9 2 10.3431 2 12H4ZM22 12C22 10.3431 20.6569 9 19 9V11C19.5523 11 20 11.4477 20 12H22Z"
        fill={fill}
      />
    </svg>
  )
}

export default CarOutlined