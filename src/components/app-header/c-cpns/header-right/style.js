import styled from "styled-components";

export const HeaderRightWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  .btns {
    display: flex;
    align-items: center;
    font-weight: 600;

    .btn {
      padding: 10px 12px;
      height: 18px;
      line-height: 18px;
      cursor: pointer;
      border-radius: 22px;

      .common {
        color: ${props => props.theme.isAlpha ? '#fff': '#000'};
      }

      &:hover {
        background-color: ${props => props.theme.isAlpha ? 'rgba(255, 255, 255, .1)': '#f5f5f5'};
      }
    }
  }
  .profile {
    display: flex;
    position: relative;
    align-items: center;
    margin: 0 20px 0 5px;
    border: 1px solid #f5f5f5;
    border-radius: 32px;
    padding: 6px 10px;
    background-color: #fff;
    z-index: 999;
    cursor: pointer;
    ${props => props.theme.mixin.boxshow}
    .menu {
      margin-right: 10px;
    }

    .avatar {
      color: #666;
    }

    .message {
      position: absolute;
      top: 1px;
      right: 8px;
      width: 10px;
      height: 10px;
      background-color: ${props => props.theme.color.primaryColor};
      border-radius: 50%;
      border: 2px solid #fff;
    }

    .panel {
      width: 240px;
      position: absolute;
      top: 60px;
      right: 0;
      background-color: #fff;
      border-radius: 10px;
      color: #666;
      box-shadow: 0 0 5px rgba(0, 0, 0, .18);

      .top-r, .bottom-r {
        padding: 10px 0;

        .registered {
          color: #000;
        }

        .login {
          color: #666;
        }

        .help {
          color: #666;
        }

        .common {
          display: flex;
          width: 240px;
        }

        .item {
          display: flex;
          height: 38px;
          line-height: 38px;
          padding-left: 15px;
          cursor: pointer;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }

      .top-r {
        border-bottom: 1px solid #999;
      }
    }
  }

`