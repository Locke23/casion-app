import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function ArrowLeft(props: SvgProps) {
  return (
    <Svg width={12} height={12} viewBox="0 0 12 12" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 6a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 012 6z"
        fill="#6E7983"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.354 2.146a.5.5 0 010 .708L3.207 6l3.147 3.146a.5.5 0 11-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0z"
        fill="#6E7983"
      />
    </Svg>
  );
}

export default ArrowLeft;
