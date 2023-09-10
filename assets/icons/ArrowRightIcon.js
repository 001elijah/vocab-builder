import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowRightIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#85AA9F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.332 10h13.333m0 0-3.333-3.333M16.665 10l-3.333 3.333"
    />
  </Svg>
);
export default ArrowRightIcon;
