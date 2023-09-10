import * as React from "react";
import Svg, { Circle } from "react-native-svg";
const ProgressCircle = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    // className="circle-chart"
    {...props}
  >
    <Circle
      cx={12}
      cy={12}
      r={10}
      fill="none"
      stroke="#D4F8D3"
      strokeWidth={4}
      //   className="circle-chart__background"
    />
    <Circle
      cx={12}
      cy={12}
      r={10}
      fill="none"
      stroke="#2BD627"
      strokeDasharray={`${(props.progress * 63) / 100}, 100`}
      strokeLinecap="round"
      strokeWidth={4}
      //   className="circle-chart__circle"
    />
  </Svg>
);
export default ProgressCircle;
