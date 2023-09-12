import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ChevronLeftIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      fill="#85AA9F"
      d="M0 10.439c0 .382.146.707.45 1l8.759 8.568c.236.247.55.37.91.37.73 0 1.302-.56 1.302-1.302 0-.36-.146-.685-.393-.932L3.133 10.44l7.895-7.704c.247-.258.393-.584.393-.943A1.28 1.28 0 0 0 10.12.5c-.36 0-.674.124-.91.37L.449 9.44a1.376 1.376 0 0 0-.449.999Z"
    />
  </Svg>
);
export default ChevronLeftIcon;
