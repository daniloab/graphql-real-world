import React from "react";
import styled from "styled-components";
import { space, width, fontSize, color } from "styled-system";
import QRCode from "qrcode.react";

export const Root = styled.div([], {
  width: "50vw",
  height: "70vh",
});

const FeedbackText = styled.span`
  font-size: 50px;
  color: #ffffff;
`;

const SocialLink = styled.span`
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

export const Social = () => (
  <Root>
    <Center>
      <FeedbackText>Social Medias</FeedbackText>
    </Center>
    <Center mt={60} mb={60}>
      <QRCode value="https://linktr.ee/daniloab" size={256} />
    </Center>
    <Center>
      <SocialLink>
        <a href="https://linktr.ee/daniloab" target={"_blank"}>
          https://linktr.ee/daniloab
        </a>
      </SocialLink>
    </Center>
  </Root>
);
