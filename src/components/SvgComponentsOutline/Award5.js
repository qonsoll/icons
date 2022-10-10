import React from 'react'

const Award5Outlined = (props) => {
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
        d="M7.13502 11.189L3.33028 4.38052C2.89279 3.59765 2.67405 3.20621 2.71091 2.88573C2.74307 2.60611 2.89158 2.353 3.11998 2.18852C3.38176 2 3.83017 2 4.72698 2H6.96181C7.2951 2 7.46175 2 7.61123 2.04813C7.7435 2.09073 7.86544 2.16042 7.96927 2.25276C8.08661 2.35712 8.1712 2.5007 8.34037 2.78788L12 9L15.6596 2.78788C15.8288 2.5007 15.9134 2.35712 16.0307 2.25276C16.1345 2.16042 16.2565 2.09073 16.3887 2.04813C16.5382 2 16.7049 2 17.0382 2H19.273C20.1698 2 20.6182 2 20.88 2.18852C21.1084 2.353 21.2569 2.60611 21.2891 2.88573C21.3259 3.20621 21.1072 3.59765 20.6697 4.38052L16.8649 11.189M10.5 14L12 13V18M10.75 18H13.25M16.5962 10.9038C19.1346 13.4422 19.1346 17.5578 16.5962 20.0962C14.0578 22.6346 9.9422 22.6346 7.40378 20.0962C4.86538 17.5578 4.86538 13.4422 7.40378 10.9038C9.94219 8.3654 14.0578 8.3654 16.5962 10.9038Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Award5Outlined
