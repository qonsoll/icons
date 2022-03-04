import React from 'react'

const Activities = (props) => {
  const { size = '16', fill = '#52c41a' } = props

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M16.3401,1.9999 C19.7301,1.9999 22.0001,4.3799 22.0001,7.9199 L22.0001,7.9199 L22.0001,16.0909 C22.0001,19.6199 19.7301,21.9999 16.3401,21.9999 L16.3401,21.9999 L7.6701,21.9999 C4.2801,21.9999 2.0001,19.6199 2.0001,16.0909 L2.0001,16.0909 L2.0001,7.9199 C2.0001,4.3799 4.2801,1.9999 7.6701,1.9999 L7.6701,1.9999 Z M17.4039967,6.54471974 C17.1845514,6.37710073 16.8707727,6.41909933 16.7031329,6.63852885 L16.7031329,6.63852885 L10.926,14.201 L8.7610756,12.384418 C8.23222586,11.9406616 7.44377609,12.0096284 7,12.5384615 L7,12.5384615 L6.51788866,13.1129776 C6.34038016,13.3245085 6.36796082,13.6398873 6.57949177,13.8173958 L6.57949177,13.8173958 L10.3214811,16.9575267 L10.4341234,17.041877 C10.9748964,17.4015712 11.7144648,17.2875082 12.1183388,16.7588004 L12.1183388,16.7588004 L18.2345383,8.7521392 C18.6536122,8.20353335 18.5486058,7.41907391 18,7 L18,7 Z"
        id="CheckMarkInShape"
        fill={fill}
      ></path>
    </svg>
  )
}

export default Activities