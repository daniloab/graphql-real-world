import React from "react";
import styled from "styled-components";
import { space, width, fontSize, color } from "styled-system";
import QRCode from "qrcode.react";

// Add styled-system functions to your component
const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;

export const Root = styled.div([], {
  width: "50vw",
  height: "70vh",
});

const SpaceBetween = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const FeedbackText = styled.span`
  font-size: 50px;
  color: #ffffff;
`;

const PatreonLink = styled.span`
  font-size: 50px;
  color: #25d7fd;
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${space}
`;

export const Patreon = () => (
  <Root>
    <Center>
      <FeedbackText>Be my Patreon:</FeedbackText>
    </Center>
    <Center mt={60} mb={60}>
      <QRCode value="https://www.patreon.com/daniloab" size={256} />
    </Center>
    <Center>
      <PatreonLink>
        <a href="https://www.patreon.com/daniloab" target={"_blank"}>
          https://www.patreon.com/daniloab
        </a>
      </PatreonLink>
    </Center>
  </Root>
);


