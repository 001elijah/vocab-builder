import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const EyeIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <G
      stroke="#121417"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <Path d="M14.95 14.95A8.392 8.392 0 0 1 10 16.667C4.168 16.667.835 10 .835 10a15.375 15.375 0 0 1 4.217-4.95m3.2-1.517a7.6 7.6 0 0 1 1.75-.2c5.833 0 9.166 6.667 9.166 6.667a15.412 15.412 0 0 1-1.8 2.658m-5.6-.891a2.5 2.5 0 1 1-3.533-3.534M.834.833l18.333 18.334" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default EyeIcon;
