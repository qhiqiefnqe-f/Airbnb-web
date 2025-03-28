import styled from "styled-components";

export const SectionTabsWrapper = styled.div`
  padding-bottom: 15px;
  .itemNames {
    box-sizing: border-box;
    background-color: #fff;
    border: 0.5px solid #d8d8d8;
    padding: 13px 25px;
    flex-basis: 120px;
    flex-shrink: 0;
    margin-right: 15px;
    white-space: nowrap;
    text-align: center;
    ${props => props.theme.mixin.boxshow};
    cursor: pointer;
    border-radius: 3px;
    box-shadow: 0 1px 5px rgb(0, 0, 0, .1);

    &.active {
      color: #fff;
      background-color: ${props => props.theme.color.secondaryColor} ;
    }
  }
`