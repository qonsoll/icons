import './Loading.style.css'

import React from 'react'

const Loading = (props) => {
  const { size = '16', fill = '#424851', spin } = props

  return (
    <div className={spin && 'spin'}>
      <svg width={size} height={size} viewBox="0 0 24 24">
        <path
          d="M12,2 C14.6882705,2 17.2112345,3.06769864 19.0737405,4.93160588 C19.6593066,5.51761256 19.6589495,6.46735996 19.0729428,7.05292608 C18.4869361,7.63849219 17.5371887,7.63813505 16.9516226,7.05212838 C15.646211,5.74573464 13.8840456,5 12,5 C8.13400675,5 5,8.13400675 5,12 C5,12.8284271 4.32842712,13.5 3.5,13.5 C2.67157288,13.5 2,12.8284271 2,12 C2,6.4771525 6.4771525,2 12,2 Z"
          id="Loading"
          fill={fill}
        ></path>
      </svg>
    </div>
  )
}

export default Loading
