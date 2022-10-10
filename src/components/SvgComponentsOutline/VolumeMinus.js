import React from 'react'

const VolumeMinusOutlined = (props) => {
  const { size = '24', fill = 'black' } = props

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 12H22M9.63432 5.36569L6.46863 8.53137C6.29568 8.70433 6.2092 8.7908 6.10828 8.85264C6.01881 8.90747 5.92127 8.94788 5.81923 8.97237C5.70414 9 5.58185 9 5.33726 9H3.6C3.03995 9 2.75992 9 2.54601 9.109C2.35785 9.20487 2.20487 9.35785 2.10899 9.54601C2 9.75992 2 10.04 2 10.6V13.4C2 13.9601 2 14.2401 2.10899 14.454C2.20487 14.6422 2.35785 14.7951 2.54601 14.891C2.75992 15 3.03995 15 3.6 15H5.33726C5.58185 15 5.70414 15 5.81923 15.0276C5.92127 15.0521 6.01881 15.0925 6.10828 15.1474C6.2092 15.2092 6.29568 15.2957 6.46863 15.4686L9.63431 18.6343C10.0627 19.0627 10.2769 19.2769 10.4608 19.2914C10.6203 19.3039 10.7763 19.2393 10.8802 19.1176C11 18.9774 11 18.6744 11 18.0686V5.93137C11 5.32556 11 5.02265 10.8802 4.88239C10.7763 4.76068 10.6203 4.69609 10.4608 4.70865C10.2769 4.72312 10.0627 4.93731 9.63432 5.36569Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default VolumeMinusOutlined
