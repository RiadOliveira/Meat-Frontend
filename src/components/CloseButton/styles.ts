import styled from 'styled-components';

export const CloseButton = styled.button`
  #closeButton {
    height: 24px;
    width: 24px;
    border: none;
    background-color: transparent;
    margin: 0px 0px 0px 300px;

    img {
      height: 18px;
      width: 18px;
    }
    &:hover {
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
`;
