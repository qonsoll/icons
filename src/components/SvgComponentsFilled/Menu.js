import React from 'react'

const Activities = (props) => {
  const { size = '16', fill = '#424851' } = props

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M2.0002,7.6599 C2.0002,4.34873721 4.27078951,2.10608713 7.6751207,2.00356861 L7.9202,1.9999 L16.0902,1.9999 C19.538107,1.9999 21.8888804,4.1655463 21.9963539,7.42522003 L22.0002,7.6599 L22.0002,16.3299 C22.0002,19.6410628 19.7296105,21.8932532 16.3345977,21.9962154 L16.0902,21.9999 L7.9202,21.9999 C4.46252558,21.9999 2.11152504,19.8247134 2.0040462,16.5645959 L2.0002,16.3299 L2.0002,7.6599 Z M10.8012,16.4799 C10.8012,17.1399 11.3402,17.6799 12.0002,17.6799 C12.6602,17.6799 13.2002,17.1399 13.2002,16.4799 C13.2002,15.8199 12.6602,15.2799 12.0002,15.2799 C11.3402,15.2799 10.8012,15.8199 10.8012,16.4799 Z M10.8012,11.9999 C10.8012,12.6599 11.3402,13.1999 12.0002,13.1999 C12.6602,13.1999 13.2002,12.6599 13.2002,11.9999 C13.2002,11.3399 12.6602,10.7999 12.0002,10.7999 C11.3402,10.7999 10.8012,11.3399 10.8012,11.9999 Z M10.8012,7.5199 C10.8012,8.1799 11.3402,8.7199 12.0002,8.7199 C12.6602,8.7199 13.2002,8.1799 13.2002,7.5199 C13.2002,6.8599 12.6602,6.3299 12.0002,6.3299 C11.3402,6.3299 10.8012,6.8599 10.8012,7.5199 Z"
        id="Shape"
        fill={fill}
      ></path>
    </svg>
  )
}

export default Activities