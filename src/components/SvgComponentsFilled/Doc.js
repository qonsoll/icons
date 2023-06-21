import React from 'react'

const Activities = (props) => {
  const { size = '16', fill = '#424851' } = props

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M16.191,2 C19.28,2 21,3.78 21,6.83 L21,6.83 L21,17.16 C21,20.26 19.28,22 16.191,22 L16.191,22 L7.81,22 C4.77,22 3,20.26 3,17.16 L3,17.16 L3,6.83 C3,3.78 4.77,2 7.81,2 L7.81,2 Z M8.08,15.74 C7.78,15.71 7.49,15.85 7.33,16.11 C7.17,16.36 7.17,16.69 7.33,16.95 C7.49,17.2 7.78,17.35 8.08,17.31 L8.08,17.31 L15.92,17.31 C16.319,17.27 16.62,16.929 16.62,16.53 C16.62,16.12 16.319,15.78 15.92,15.74 L15.92,15.74 Z M15.92,11.179 L8.08,11.179 C7.649,11.179 7.3,11.53 7.3,11.96 C7.3,12.39 7.649,12.74 8.08,12.74 L8.08,12.74 L15.92,12.74 C16.35,12.74 16.7,12.39 16.7,11.96 C16.7,11.53 16.35,11.179 15.92,11.179 L15.92,11.179 Z M11.069,6.65 L8.08,6.65 L8.08,6.66 C7.649,6.66 7.3,7.01 7.3,7.44 C7.3,7.87 7.649,8.22 8.08,8.22 L8.08,8.22 L11.069,8.22 C11.5,8.22 11.85,7.87 11.85,7.429 C11.85,7 11.5,6.65 11.069,6.65 L11.069,6.65 Z"
        id="Document"
        fill={fill}
      ></path>
    </svg>
  )
}

export default Activities