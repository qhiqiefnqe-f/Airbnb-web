import styled from "styled-components";

export const AppFooterWrapper = styled.div`
  padding-top: 50px;
 .list {
  width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  box-sizing: border-box;
  border-top: 1px solid #eee;
 }

 .title {
  margin: 20px 0 15px 0;
  font-weight: 700;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
 }

 .content {
  display: flex;
  margin: 8px 0;
  color: #999;
  font-size: 12px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
 }

 .footer {
  width: 1032px;
  margin: 0 auto;
  height: 90px;
  border-top: 1px solid #eee;
  padding-top: 20px;
  text-align: center;
  color: #888;
 }
`