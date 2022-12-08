import React from 'react'

const Invalid1Outlined = (props) => {
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
        d="M11.5 8.5V11.5M19.5 21.5H17.5V15.5H11.5V11.5M11.5 11.5H17.5M13.4932 19.5091C13.0343 20.118 12.4422 20.614 11.7622 20.959C11.0822 21.304 10.3323 21.4889 9.56981 21.4995C8.80737 21.5102 8.05259 21.3463 7.36321 21.0204C6.67383 20.6945 6.06812 20.2153 5.5924 19.6194C5.11668 19.0235 4.78356 18.3266 4.61852 17.5822C4.45348 16.8377 4.4609 16.0654 4.6402 15.3243C4.8195 14.5831 5.16593 13.8928 5.653 13.3062C6.14007 12.7195 6.75488 12.252 7.45039 11.9394M13 4.5C13 5.05228 12.5523 5.5 12 5.5C11.4477 5.5 11 5.05228 11 4.5C11 3.94772 11.4477 3.5 12 3.5C12.5523 3.5 13 3.94772 13 4.5Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Invalid1Outlined
