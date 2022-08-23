import React from 'react'

const Activities = (props) => {
  const { size = '16', fill = '#424851' } = props

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M16.6602,2.0001 C20.0602,2.0001 22.0002,3.9201 22.0002,7.3301 L22.0002,7.3301 L22.0002,16.6701 C22.0002,20.0601 20.0702,22.0001 16.6702,22.0001 L16.6702,22.0001 L7.3302,22.0001 C3.9202,22.0001 2.0002,20.0601 2.0002,16.6701 L2.0002,16.6701 L2.0002,7.3301 C2.0002,3.9201 3.9202,2.0001 7.3302,2.0001 L7.3302,2.0001 Z M15.6602,11.1601 L8.3302,11.1601 C8.1102,11.1601 7.9002,11.2501 7.7402,11.4001 C7.5902,11.5601 7.5002,11.7691 7.5002,11.9901 C7.5002,12.4501 7.8702,12.8201 8.3302,12.8301 L8.3302,12.8301 L15.6602,12.8301 C16.1202,12.8201 16.4902,12.4501 16.4902,11.9901 C16.4902,11.5301 16.1202,11.1601 15.6602,11.1601 L15.6602,11.1601 Z"
        id="Plus"
        fill={fill}
      ></path>
    </svg>
  )
}

export default Activities