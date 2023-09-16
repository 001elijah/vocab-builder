import * as React from "react";
import Svg, { Circle, Defs, RadialGradient, Stop } from "react-native-svg";
const ProgressCircleWithText = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} {...props}>
    <Defs>
      <RadialGradient id="a" cx={0.75} cy={0.6} r={1}>
        <Stop offset={0} stopColor="#fff" />
        <Stop offset={0.6} stopColor="#85AA9F" />
      </RadialGradient>
    </Defs>
    <Circle cx={22} cy={22} r={20} fill="none" stroke="#FFF" strokeWidth={4} />
    <Circle
      cx={22}
      cy={22}
      r={20}
      fill="none"
      stroke="url(#a)"
      strokeDasharray={`${
        (props.progress * 2 * 3.14 * 22) / (props.total + props.total / 10)
      }, 138`}
      strokeLinecap="round"
      strokeWidth={4}
    />
  </Svg>
);
export default ProgressCircleWithText;
