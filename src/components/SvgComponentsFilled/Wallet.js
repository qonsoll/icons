import React from 'react'

const Activities = (props) => {
  const { size = '16', fill = '#424851' } = props

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M16.5155556,3 C19.9644444,3 22,4.98459316 22,8.38180067 L22,8.38180067 L17.7688889,8.38180067 L17.7688889,8.41646606 C15.8052098,8.41646606 14.2133333,9.96848811 14.2133333,11.8830043 C14.2133333,13.7975206 15.8052098,15.3495426 17.7688889,15.3495426 L17.7688889,15.3495426 L22,15.3495426 L22,15.6615311 C22,19.0154068 19.9644444,21 16.5155556,21 L16.5155556,21 L7.48444444,21 C4.03555556,21 2,19.0154068 2,15.6615311 L2,15.6615311 L2,8.33846895 C2,4.98459316 4.03555556,3 7.48444444,3 L7.48444444,3 Z M21.2533333,9.87241213 C21.6657059,9.87241213 22,10.1983368 22,10.6003852 L22,10.6003852 L22,13.1309581 C21.9951999,13.531052 21.6637012,13.8542512 21.2533333,13.8589312 L21.2533333,13.8589312 L17.8488889,13.8589312 C16.8547801,13.8719719 15.9854845,13.2083726 15.76,12.2643235 C15.64708,11.678292 15.8055982,11.0735653 16.1930699,10.6122167 C16.5805417,10.1508682 17.1573445,9.88007476 17.7688889,9.87241213 L17.7688889,9.87241213 Z M18.2488889,11.0423688 L17.92,11.0423688 C17.7180785,11.0400526 17.5236085,11.1166388 17.3799861,11.2550374 C17.2363636,11.3934359 17.1555556,11.5821284 17.1555556,11.7790082 C17.1555276,12.1920544 17.4963752,12.5282326 17.92,12.5329803 L17.92,12.5329803 L18.2488889,12.5329803 C18.6710799,12.5329803 19.0133333,12.1992955 19.0133333,11.7876745 C19.0133333,11.3760535 18.6710799,11.0423688 18.2488889,11.0423688 L18.2488889,11.0423688 Z M12.3822222,6.89118922 L6.73777778,6.89118922 C6.31903387,6.89116161 5.97820245,7.21959601 5.97333333,7.6278286 C5.97333333,8.0408748 6.31415294,8.37705302 6.73777778,8.38180067 L6.73777778,8.38180067 L12.3822222,8.38180067 C12.8044132,8.38180067 13.1466667,8.04811593 13.1466667,7.63649494 C13.1466667,7.22487396 12.8044132,6.89118922 12.3822222,6.89118922 L12.3822222,6.89118922 Z"
        id="Wallet"
        fill={fill}
      ></path>
    </svg>
  )
}

export default Activities