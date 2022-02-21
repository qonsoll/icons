import React from 'react'

const Link = (props) => {
  const { size = '16', fill = '#424851' } = props

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M7.29493201,10.2908544 L8.00203879,10.9979612 C8.58782523,11.5837476 8.58782523,12.5334951 8.00203879,13.1192816 L5.56066017,15.5606602 C4.76573473,16.3555856 4.76573473,17.6444144 5.56066017,18.4393398 C6.31374743,19.1924271 7.51011636,19.2320633 8.30986484,18.5582483 L8.43933983,18.4393398 L11.5810907,15.297589 C11.7763528,15.1023268 12.0929353,15.1023268 12.2881975,15.297589 L12.9953043,16.0046957 C13.5810907,16.5904822 13.5810907,17.5402296 12.9953043,18.1260161 L10.5606602,20.5606602 C8.59416186,22.5271585 5.40583814,22.5271585 3.43933983,20.5606602 C1.5306797,18.652 1.47454264,15.5923297 3.27092864,13.615963 L3.43933983,13.4393398 L6.58782523,10.2908544 C6.78308737,10.0955923 7.09966986,10.0955923 7.29493201,10.2908544 Z M13.4696699,9.46966991 L14,10 C14.4881554,10.4881554 14.4881554,11.2796116 14,11.767767 L11.2374369,14.5303301 C11.0421747,14.7255922 10.7255922,14.7255922 10.5303301,14.5303301 L10,14 C9.51184464,13.5118446 9.51184464,12.7203884 10,12.232233 L12.7625631,9.46966991 C12.9578253,9.27440777 13.2744078,9.27440777 13.4696699,9.46966991 Z M20.5606602,3.43933983 C22.4693203,5.34799995 22.5254574,8.40767035 20.7290714,10.384037 L20.5606602,10.5606602 L17.4145977,13.7067227 C17.2193355,13.9019848 16.902753,13.9019848 16.7074909,13.7067227 L16.0003841,12.9996159 C15.4145977,12.4138295 15.4145977,11.464082 16.0003841,10.8782956 L18.4393398,8.43933983 C19.2342653,7.64441439 19.2342653,6.35558561 18.4393398,5.56066017 C17.6862526,4.80757292 16.4898836,4.76793674 15.6901352,5.44175166 L15.5606602,5.56066017 L12.4143643,8.70695604 C12.2191022,8.90221819 11.9025197,8.90221819 11.7072575,8.70695604 L11.0001507,7.99984926 C10.4143643,7.41406282 10.4143643,6.46431535 11.0001507,5.87852892 L13.4393398,3.43933983 C15.4058381,1.47284152 18.5941619,1.47284152 20.5606602,3.43933983 Z"
        id="Link"
        fill={fill}
      ></path>
    </svg>
  )
}

export default Link
