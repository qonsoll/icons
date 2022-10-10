import React from 'react'

const PentagonOutlined = (props) => {
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
        d="M11.0605 2.93203C11.3983 2.68689 11.5672 2.56432 11.7518 2.51696C11.9148 2.47514 12.0858 2.47514 12.2488 2.51696C12.4334 2.56432 12.6023 2.68689 12.9401 2.93203L21.0586 8.82396C21.397 9.06956 21.5663 9.19235 21.6686 9.3535C21.7589 9.49579 21.8119 9.65862 21.8224 9.82684C21.8344 10.0174 21.7697 10.2162 21.6404 10.6138L18.5401 20.1449C18.4109 20.5421 18.3463 20.7407 18.2247 20.8876C18.1173 21.0173 17.979 21.1178 17.8224 21.1798C17.6451 21.25 17.4362 21.25 17.0186 21.25H6.98203C6.56437 21.25 6.35554 21.25 6.17822 21.1798C6.02164 21.1178 5.88325 21.0173 5.77589 20.8876C5.65429 20.7407 5.58969 20.5421 5.4605 20.1449L2.36021 10.6138C2.23086 10.2162 2.16619 10.0174 2.17817 9.82684C2.18874 9.65862 2.24166 9.49579 2.33202 9.3535C2.43434 9.19235 2.60355 9.06956 2.94196 8.82396L11.0605 2.93203Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default PentagonOutlined
