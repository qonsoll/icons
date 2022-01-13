import React from 'react'

const Activities = (props) => {
  const { size = '16', fill = '#424851' } = props

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M7.9199,13.4697 C9.3299,13.4697 10.4599,14.6107 10.4599,16.0307 L10.4599,16.0307 L10.4599,19.4397 C10.4599,20.8497 9.3299,21.9997 7.9199,21.9997 L7.9199,21.9997 L4.5399,21.9997 C3.1399,21.9997 1.9999,20.8497 1.9999,19.4397 L1.9999,19.4397 L1.9999,16.0307 C1.9999,14.6107 3.1399,13.4697 4.5399,13.4697 L4.5399,13.4697 Z M19.46,13.4697 C20.86,13.4697 22,14.6107 22,16.0307 L22,16.0307 L22,19.4397 C22,20.8497 20.86,21.9997 19.46,21.9997 L19.46,21.9997 L16.08,21.9997 C14.67,21.9997 13.54,20.8497 13.54,19.4397 L13.54,19.4397 L13.54,16.0307 C13.54,14.6107 14.67,13.4697 16.08,13.4697 L16.08,13.4697 Z M7.9199,2 C9.3299,2 10.4599,3.15 10.4599,4.561 L10.4599,4.561 L10.4599,7.97 C10.4599,9.39 9.3299,10.53 7.9199,10.53 L7.9199,10.53 L4.5399,10.53 C3.1399,10.53 1.9999,9.39 1.9999,7.97 L1.9999,7.97 L1.9999,4.561 C1.9999,3.15 3.1399,2 4.5399,2 L4.5399,2 Z M19.46,2 C20.86,2 22,3.15 22,4.561 L22,4.561 L22,7.97 C22,9.39 20.86,10.53 19.46,10.53 L19.46,10.53 L16.08,10.53 C14.67,10.53 13.54,9.39 13.54,7.97 L13.54,7.97 L13.54,4.561 C13.54,3.15 14.67,2 16.08,2 L16.08,2 Z"
        id="Category"
        fill={fill}
      ></path>
    </svg>
  )
}

export default Activities
