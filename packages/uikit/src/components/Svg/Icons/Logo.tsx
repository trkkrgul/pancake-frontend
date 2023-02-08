import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
import Image from "next/image";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return <Image src={"/icon.svg"} alt="sakaivault-logo" width="24" height="24" />;
};

export default Icon;
