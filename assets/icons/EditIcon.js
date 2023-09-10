import * as React from "react";
import Svg, { Path } from "react-native-svg";
const EditIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#FCFCFC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      {...props}
      d="M11 4H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 6.28 2 7.12 2 8.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 22 5.12 22 6.8 22h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 19.72 20 18.88 20 17.2V13"
    />
    <Path
      stroke="#FCFCFC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      {...props}
      d="M8 14.325c0-.489 0-.733.055-.963a2 2 0 0 1 .24-.579c.123-.201.296-.374.642-.72L18.5 2.5a2.121 2.121 0 0 1 3 3l-9.563 9.563c-.346.346-.519.519-.72.642a2 2 0 0 1-.579.24c-.23.055-.474.055-.963.055H8v-1.675Z"
    />
  </Svg>
);
export default EditIcon;
