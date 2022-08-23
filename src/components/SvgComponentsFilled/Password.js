import React from 'react'

const Activities = (props) => {
  const { size = '16', fill = '#424851' } = props

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M16.3347,1.9992 C19.7227,1.9992 21.9997,4.3772 21.9997,7.9162 L21.9997,7.9162 L21.9997,16.0832 C21.9997,19.6222 19.7227,21.9992 16.3337,21.9992 L16.3337,21.9992 L7.6657,21.9992 C4.2767,21.9992 1.9997,19.6222 1.9997,16.0832 L1.9997,16.0832 L1.9997,7.9162 C1.9997,4.3772 4.2767,1.9992 7.6657,1.9992 L7.6657,1.9992 Z M8.8407,9.3982 C7.4067,9.3982 6.2397,10.5652 6.2397,11.9992 C6.2397,13.4342 7.4067,14.6012 8.8407,14.6012 C10.0127,14.6012 10.9947,13.8172 11.3187,12.7492 L11.3187,12.7492 L13.4307,12.7492 L13.4307,13.8512 C13.4307,14.2652 13.7667,14.6012 14.1807,14.6012 C14.5947,14.6012 14.9307,14.2652 14.9307,13.8512 L14.9307,13.8512 L14.9307,12.7492 L16.2607,12.7492 L16.2607,13.8512 C16.2607,14.2652 16.5967,14.6012 17.0107,14.6012 C17.4247,14.6012 17.7607,14.2652 17.7607,13.8512 L17.7607,13.8512 L17.7607,11.9992 C17.7607,11.5852 17.4247,11.2492 17.0107,11.2492 L17.0107,11.2492 L11.3187,11.2492 C10.9947,10.1822 10.0127,9.3982 8.8407,9.3982 Z M8.8408,10.8981 C9.4478,10.8981 9.9428,11.3921 9.9428,12.0001 C9.9428,12.6071 9.4478,13.1011 8.8408,13.1011 C8.2338,13.1011 7.7388,12.6071 7.7388,12.0001 C7.7388,11.3921 8.2338,10.8981 8.8408,10.8981 Z"
        id="Password"
        fill={fill}
      ></path>
    </svg>
  )
}

export default Activities