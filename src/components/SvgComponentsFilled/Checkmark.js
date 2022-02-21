import React from 'react'

const Activities = (props) => {
  const { size = '16', fill = '#52c41a' } = props

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M20.207376,4.39028924 L21,5 C21.6566312,5.50510093 21.7794708,6.44687091 21.2743698,7.10350212 L12.188936,18.9145661 L12.188936,18.9145661 C11.700369,19.5497033 10.807029,19.6827144 10.1583292,19.2417555 L10.0397234,19.1523319 L4.42383404,14.4724241 C4.21169559,14.2956421 4.18303356,13.9803597 4.3598156,13.7682213 L5,13 C5.53034811,12.3635823 6.47619629,12.27759 7.11262082,12.8079299 L10.762,15.849 L10.762,15.849 L19.5062051,4.48174313 C19.6745765,4.26287166 19.9884976,4.22192686 20.207376,4.39028924 Z"
        id="CheckMark"
        fill={fill}
      ></path>
    </svg>
  )
}

export default Activities
