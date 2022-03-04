import React from 'react'

const ArrowShortDown = (props) => {
  const { size = '16', fill = '#424851' } = props

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M6.46966991,9.46966991 C6.73593648,9.20340335 7.15260016,9.1791973 7.44621165,9.39705176 L7.53033009,9.46966991 L12,13.939 L16.4696699,9.46966991 C16.7359365,9.20340335 17.1526002,9.1791973 17.4462117,9.39705176 L17.5303301,9.46966991 C17.7965966,9.73593648 17.8208027,10.1526002 17.6029482,10.4462117 L17.5303301,10.5303301 L12.5303301,15.5303301 C12.2640635,15.7965966 11.8473998,15.8208027 11.5537883,15.6029482 L11.4696699,15.5303301 L6.46966991,10.5303301 C6.1767767,10.2374369 6.1767767,9.76256313 6.46966991,9.46966991 Z"
        id="Path-15"
        fill={fill}
      ></path>
    </svg>
  )
}

export default ArrowShortDown