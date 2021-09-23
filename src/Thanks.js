import React from "react";
import styled from "styled-components";
import { space } from "styled-system";
import { OpenPixLogo } from "./OpenPixLogo";

export const Root = styled.div([], {
  width: "50vw",
  height: "70vh",
});

const SpaceBetween = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${space}
`;

const ThanksText = styled.span`
  font-size: 50px;
  color: #ffffff;
`;

const HiringText = styled.span`
  font-size: 100px;
  color: #25d7fd;
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Thanks = () => (
  <Root>
    <Center>
      <ThanksText>Thanks!</ThanksText>
    </Center>
    <SpaceBetween mt={50} mb={50}>
      <HiringText>We are hiring!</HiringText>
    </SpaceBetween>
    <a href="https://entria.contrata.vc/">Join Us</a>
    <Center>
      <OpenPixLogo />
    </Center>
  </Root>
);
