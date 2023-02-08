import { vars } from "@pancakeswap/ui/css/vars.css";
import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
import Image from "next/image";
import logoLight from "./../../../../../../apps/bridge/img/logo-light.svg";
import logoDark from "./../../../../../../apps/bridge/img/logo-dark.svg";
import { useTheme } from "@pancakeswap/hooks";
const Logo: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  const { isDark } = useTheme();
  return (
    <Image
      src={isDark ? logoDark : logoLight}
      alt="sakaivault-logo"
      style={{ height: "36px", objectFit: "contain", width: "100px" }}
    />
  );
};

export default Logo;
