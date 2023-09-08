import * as React from "react";
import Svg, { Mask, Path } from "react-native-svg";
const ChevronDownIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Mask id="a" fill="#fff">
      <Path d="m10 13.752-6.25-6.25.875-.875L10 12.002l5.375-5.375.875.875-6.25 6.25Z" />
    </Mask>
    <Path
      fill="#121417"
      d="m10 13.752-6.25-6.25.875-.875L10 12.002l5.375-5.375.875.875-6.25 6.25Z"
    />
    <Path
      fill="#121417"
      d="m10 13.752-1.06 1.06L10 15.874l1.06-1.06L10 13.752Zm-6.25-6.25-1.06-1.06-1.061 1.06 1.06 1.06 1.061-1.06Zm.875-.875 1.06-1.06-1.06-1.061-1.06 1.06 1.06 1.061ZM10 12.002l-1.06 1.06L10 14.124l1.06-1.06L10 12.002Zm5.375-5.375 1.06-1.06-1.06-1.061-1.06 1.06 1.06 1.061Zm.875.875 1.06 1.06 1.061-1.06-1.06-1.06-1.061 1.06Zm-5.19 5.19-6.25-6.25-2.12 2.12 6.25 6.25 2.12-2.12Zm-6.25-4.13.876-.874-2.122-2.122-.875.875 2.122 2.122Zm-1.246-.874 5.375 5.375 2.122-2.122-5.375-5.375-2.122 2.122Zm7.497 5.375 5.375-5.375-2.122-2.122-5.375 5.375 2.122 2.122Zm3.253-5.375.875.875 2.122-2.122-.875-.875-2.122 2.122Zm.875-1.247-6.25 6.25 2.122 2.122 6.25-6.25-2.122-2.122Z"
      mask="url(#a)"
    />
  </Svg>
);
export default ChevronDownIcon;