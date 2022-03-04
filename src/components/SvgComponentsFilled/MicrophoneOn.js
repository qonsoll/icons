import React from 'react'

const Activities = (props) => {
  const { size = '16', fill = '#424851' } = props

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M19.5,9.5 C20.0522847,9.5 20.5,9.94771525 20.5,10.5 C20.5,14.8560807 17.2232094,18.4468259 13.0000759,18.941788 L13,21 C13,21.5522847 12.5522847,22 12,22 C11.4477153,22 11,21.5522847 11,21 L11.0009171,18.9419043 C6.77730429,18.4473888 3.5,14.8564221 3.5,10.5 C3.5,9.94771525 3.94771525,9.5 4.5,9.5 C5.05228475,9.5 5.5,9.94771525 5.5,10.5 C5.5,14.0898509 8.41014913,17 12,17 C15.5898509,17 18.5,14.0898509 18.5,10.5 C18.5,9.94771525 18.9477153,9.5 19.5,9.5 Z M12,2 C12.8832595,2 13.6776794,2.20558016 14.344346,2.57782698 C15.0110127,2.95007381 15.5499262,3.4889873 15.922173,4.15565397 C15.9805358,4.26017746 16.0468387,4.40271907 16.1210816,4.58327878 C16.1852062,4.7360522 16.1135213,4.91195583 15.9608134,4.97623598 C15.9040683,5.00012195 15.8413483,5.00597071 15.7797067,4.99975009 L14.9322586,4.99995577 C14.8747033,4.99996973 14.8139504,4.99998448 14.75,5 C14.3357864,5 14,5.33578644 14,5.75 C14,6.12969577 14.2821539,6.44349096 14.6482294,6.49315338 L14.75,6.5 L15.875,6.5 C16.220178,6.5 16.5,6.77982203 16.5,7.125 C16.5,7.47017797 16.220178,7.75 15.875,7.75 L14.75,7.75 C14.3703042,7.75 14.056509,8.03215388 14.0068466,8.39822944 L14,8.5 C14,8.87969577 14.2821539,9.19349096 14.6482294,9.24315338 L14.75,9.25 L15.875,9.25 C16.220178,9.25 16.5,9.52982203 16.5,9.875 C16.5,10.220178 16.220178,10.5 15.875,10.5 L14.75,10.5 C14.3357864,10.5 14,10.8357864 14,11.25 C14,11.6296958 14.2821539,11.943491 14.6482294,11.9931534 L14.75,12 L15.7717348,12.000917 L15.7717348,12.000917 C15.9348387,11.970526 16.0968725,12.0696514 16.1356732,12.2307296 C16.1506423,12.2928725 16.1453714,12.3581722 16.1208923,12.4172202 C16.0467104,12.5975639 15.9804707,12.7399392 15.922173,12.844346 C15.5499262,13.5110127 15.0110127,14.0499262 14.344346,14.422173 C13.6776794,14.7944198 12.8832595,15 12,15 C11.1167405,15 10.3223206,14.7944198 9.65565397,14.422173 C8.9889873,14.0499262 8.45007381,13.5110127 8.07782698,12.844346 C7.70558016,12.1776794 7.5,11.3832595 7.5,10.5 L7.5,6.5 C7.5,5.61674048 7.70558016,4.82232063 8.07782698,4.15565397 C8.45007381,3.4889873 8.9889873,2.95007381 9.65565397,2.57782698 C10.3223206,2.20558016 11.1167405,2 12,2 Z"
        id="MicrophoneOn"
        fill={fill}
      ></path>
    </svg>
  )
}

export default Activities