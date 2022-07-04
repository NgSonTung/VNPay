import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 9 15 2.3" {...props}>
      <Path
        d="M-1 11.3V10c0-1 .402-1 1-1h4.8c.75 0 .4.635 1.376.999a1 1 90 00.648 0C7.8 9.635 7.45 9 8.2 9H13c.598 0 1 0 1 1v1.3"
        fill="#005AAB"
      />
    </Svg>
  )
}

export default SvgComponent
