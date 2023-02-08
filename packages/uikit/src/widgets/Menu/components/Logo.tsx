import { useTheme } from "@pancakeswap/hooks";
import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import Flex from "../../../components/Box/Flex";
import { LogoIcon, LogoWithTextIcon } from "../../../components/Svg";
import { MenuContext } from "../context";

interface Props {
  href: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); }
  50% { transform:  scaleY(0.1); }
`;

const StyledLink = styled("a")`
  display: flex;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.lg} {
      display: none;
    }
  }
  .desktop-icon {
    width: 160px;
    display: none;
    ${({ theme }) => theme.mediaQueries.lg} {
      display: block;
    }
  }
  .eye {
    animation-delay: 20ms;
  }
  &:hover {
    .eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;

const StyledText = styled("p")`
  display: flex;
  ${({ theme }) => theme.mediaQueries.xs} {
    display: none;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
  }
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.lg} {
      display: none;
    }
  }
`;

const Logo: React.FC<React.PropsWithChildren<Props>> = ({ href }) => {
  const { theme } = useTheme();
  const { linkComponent } = useContext(MenuContext);
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoIcon className="mobile-icon" />
      <StyledText>Sakai Vault</StyledText>
    </>
  );

  return (
    <Flex alignItems="center">
      <StyledLink
        as="a"
        href={"https://bridge.sakaivault.io"}
        aria-label="sakai"
        style={{ alignItems: "center", gap: "0.5rem" }}
      >
        {innerLogo}
      </StyledLink>
    </Flex>
  );
};

export default React.memo(Logo);
