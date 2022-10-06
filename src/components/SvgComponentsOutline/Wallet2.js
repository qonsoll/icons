import React from 'react'

const Wallet2Outlined = (props) => {
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
        d="M16 8.00007V4.50073C16 3.66899 16 3.25312 15.8248 2.99755C15.6717 2.77425 15.4346 2.62257 15.1678 2.57715C14.8623 2.52517 14.4847 2.69944 13.7295 3.04799L4.85901 7.14206C4.18551 7.45291 3.84875 7.60834 3.60211 7.84939C3.38406 8.06249 3.21762 8.32262 3.1155 8.6099C3 8.93486 3 9.30575 3 10.0475V15.0001M16.5 14.5001H16.51M3 11.2001L3 17.8001C3 18.9202 3 19.4802 3.21799 19.9081C3.40973 20.2844 3.71569 20.5903 4.09202 20.7821C4.51984 21.0001 5.07989 21.0001 6.2 21.0001H17.8C18.9201 21.0001 19.4802 21.0001 19.908 20.7821C20.2843 20.5903 20.5903 20.2844 20.782 19.9081C21 19.4802 21 18.9202 21 17.8001V11.2001C21 10.08 21 9.51992 20.782 9.09209C20.5903 8.71577 20.2843 8.40981 19.908 8.21806C19.4802 8.00007 18.9201 8.00007 17.8 8.00007L6.2 8.00007C5.0799 8.00007 4.51984 8.00007 4.09202 8.21806C3.7157 8.40981 3.40973 8.71577 3.21799 9.09209C3 9.51991 3 10.08 3 11.2001ZM17 14.5001C17 14.7762 16.7761 15.0001 16.5 15.0001C16.2239 15.0001 16 14.7762 16 14.5001C16 14.2239 16.2239 14.0001 16.5 14.0001C16.7761 14.0001 17 14.2239 17 14.5001Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Wallet2Outlined
