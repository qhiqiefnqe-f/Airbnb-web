import styled from "styled-components";

export const SectionFooterWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  .info {
    display: flex;
    align-items: center;
    font-size: 17px;
    cursor: pointer;
    font-weight: 700;
    color: ${ props => props.color };

    &:hover {
      text-decoration: underline;
    }

    .text {
      margin-right: 8px;
    }
  }
`