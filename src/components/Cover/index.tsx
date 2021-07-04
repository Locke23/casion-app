import React from "react";
import { View, Image } from "react-native";
import { Colors } from "../../config/constants";
import { hp, wp } from "../../utils/dimensions";

// import { Container } from './styles';

enum CoverType {
  "mini" = "mini",
  "banner" = "banner",
}
interface CoverProps {
  img_url: string;
  type: "mini" | "banner";
}

const ImageSize = {
  [CoverType.banner]: {
    style: {
      width: wp(366),
      height: hp(200),
      marginBottom: hp(15),
    },
  },
  [CoverType.mini]: {
    style: {
      width: wp(96),
      height: hp(96),
      borderLeftWidth: wp(10),

      borderColor: Colors.orange,
      borderBottomRightRadius: wp(16),
    },
  },
};

const Cover: React.FC<CoverProps> = ({ img_url, type }) => {
  return <Image source={{ uri: img_url }} style={ImageSize[type].style} />;
};

export default Cover;
