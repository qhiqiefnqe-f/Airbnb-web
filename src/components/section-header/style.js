import styled from "styled-components";

export const SectionHeaderWrapper = styled.div`
  color: ${props => props.theme.textColor.secondaryTextColor};
  .title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 16px;
    cursor: pointer;
  }

  .subTitle {
    font-size: 14px;
    margin: 20px 0;
    cursor: pointer;
  }
`