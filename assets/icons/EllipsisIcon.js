import * as React from "react";
import Svg, { Path } from "react-native-svg";
const EllipsisIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={4}
    fill="none"
    {...props}
  >
    <Path
      fill="#121417"
      fillOpacity={0.5}
      d="M2.123 3.192C1.42 3.192.86 2.664.86 2.008v-.08c0-.64.56-1.168 1.264-1.168.688 0 1.28.528 1.28 1.168v.08c0 .656-.591 1.184-1.28 1.184Zm3.875 0c-.704 0-1.264-.528-1.264-1.184v-.08c0-.64.56-1.168 1.264-1.168.688 0 1.28.528 1.28 1.168v.08c0 .656-.591 1.184-1.28 1.184Zm3.875 0c-.704 0-1.263-.528-1.263-1.184v-.08c0-.64.56-1.168 1.264-1.168.688 0 1.28.528 1.28 1.168v.08c0 .656-.592 1.184-1.28 1.184Z"
    />
  </Svg>
);
export default EllipsisIcon;
