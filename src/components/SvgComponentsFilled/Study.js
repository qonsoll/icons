import React from 'react'

const Activities = (props) => {
  const { size = '16', fill = '#424851' } = props

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M17.9995431,12.4141909 L18,16.502246 C18.000014,16.8261543 17.84313,17.130001 17.5790478,17.3175567 C15.9997724,18.4391856 14.1400898,19 12,19 C9.85990218,19 8.00021367,18.4391814 6.42093446,17.3175442 C6.15687721,17.1299759 6,16.8261414 6,16.5022462 L5.99954314,12.4141909 L10.4621562,14.0368795 C11.4555647,14.398119 12.5444353,14.398119 13.5378438,14.0368795 L17.9995431,12.4141909 Z M13.0252292,5.37281061 L21.707784,8.53010329 C21.9673008,8.62447303 22.101179,8.91135474 22.0068092,9.17087153 C21.9562656,9.30986656 21.8467791,9.41935306 21.707784,9.46989671 L20.7499514,9.81719088 L20.75,18 C20.75,18.4142136 20.4142136,18.75 20,18.75 C19.6203042,18.75 19.306509,18.4678461 19.2568466,18.1017706 L19.25,18 L19.2499514,10.3621909 L13.0252292,12.6271894 C12.3629568,12.8680157 11.6370432,12.8680157 10.9747708,12.6271894 L2.29221596,9.46989671 C2.03269917,9.37552697 1.89882104,9.08864526 1.99319078,8.82912847 C2.04373443,8.69013344 2.15322093,8.58064694 2.29221596,8.53010329 L10.9747708,5.37281061 C11.6370432,5.13198431 12.3629568,5.13198431 13.0252292,5.37281061 Z"
        id="Path-2"
        fill={fill}
      ></path>
    </svg>
  )
}

export default Activities
