import * as React from "react";
import Svg, { Rect } from "react-native-svg";
const HandleIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={4}
    fill="none"
    {...props}
  >
    <Rect width={36} height={4} fill="#121417" fillOpacity={0.5} rx={2} />
  </Svg>
);
export default HandleIcon;
