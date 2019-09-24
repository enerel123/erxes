import { colors, dimensions } from 'modules/common/styles';
import styled from 'styled-components';

const ScoreWrapper = styled.div``;

const CalculatedAmount = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: ${colors.colorPrimaryDark};
  margin-left: 40px;
  text-align: right;
  position: relative;

  &:after {
    content: '\\e945';
    font-family: 'erxes';
    position: absolute;
    left: -20px;
    color: ${colors.colorSecondary};
    font-size: 12px;
    display: none;
    top: 15px;
  }

  &:hover {
    cursor: pointer;

    &:after {
      display: block;
    }
  }
`;

const Amounts = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 30px;
`;

const Factor = styled.div`
  display: flex;
`;

const AmountItem = styled.div`
  margin-left: ${dimensions.coreSpacing}px;
  position: relative;
  text-align: center;

  > span {
    text-transform: capitalize;
  }

  input {
    text-align: center;
  }

  &:nth-of-type(1) {
    color: ${colors.colorCoreRed};
    margin: 0;

    &:after {
      content: '';
    }
  }

  &:nth-of-type(2) {
    color: ${colors.colorCoreBlue};
  }

  &:nth-of-type(3) {
    color: ${colors.colorCoreGreen};
  }

  &:nth-of-type(4) {
    color: ${colors.colorCoreTeal};
  }

  &:nth-of-type(4):after {
    content: '\/';
    left: -10px;
  }

  &:after {
    content: '\\ecdb';
    font-family: 'erxes';
    position: absolute;
    left: -17px;
    bottom: 7px;
    color: ${colors.colorCoreGray};
  }
`;

const ScoreAmount = styled.div`
  position: absolute;
  right: -3px;
  top: 5px;
  border-radius: 2px;
  background: #9a73b6;
  padding: 2px 6px;
  color: ${colors.colorWhite};
  font-weight: 500;
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  background: ${colors.bgLight};
  overflow: auto;
  border-top: 1px solid ${colors.borderPrimary};
`;

const LeftContent = styled.div`
  flex: 1;
  background: ${colors.colorWhite};
  box-shadow: 0 0 6px 1px ${colors.shadowPrimary};
  z-index: 2;
  overflow: auto;

  input {
    width: 40px;
    text-align: center;
    outline: 0;
    border: 1px solid ${colors.borderPrimary};
    border-radius: 2px;
    font-size: 12px;
  }
`;

const RightContent = styled.div`
  flex: 2;
  padding: 20px 80px 40px 80px;
  overflow: hidden;
`;

export {
  ScoreWrapper,
  CalculatedAmount,
  Amounts,
  AmountItem,
  Factor,
  ScoreAmount,
  ContentContainer,
  LeftContent,
  RightContent
};
