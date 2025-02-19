type LoaderProps = {
  size: number
}
export const Loader = ({ size }: LoaderProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'
      width={size}
      height={size}
      style={{
        shapeRendering: "auto",
        display: "block",
      }}
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <g>
        <circle
          stroke-dasharray='108.38494654884786 38.12831551628262'
          r='23'
          stroke-width='8'
          stroke='#ffffff'
          fill='none'
          cy='50'
          cx='50'
        >
          <animateTransform
            keyTimes='0;1'
            values='0 50 50;360 50 50'
            dur='1s'
            repeatCount='indefinite'
            type='rotate'
            attributeName='transform'
          ></animateTransform>
        </circle>
        <g></g>
      </g>
    </svg>
  )
}
