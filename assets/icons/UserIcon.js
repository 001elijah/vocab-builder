import * as React from "react";
import Svg, { Path } from "react-native-svg";
const UserIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#FCFCFC"
      fillOpacity={0.7}
      d="M12.5 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 16s8 0 8-2c0-2.4-3.9-5-8-5s-8 2.6-8 5c0 2 8 2 8 2Z"
    />
  </Svg>
);
export default UserIcon;
