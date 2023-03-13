import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 74px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputSearchContainer = styled.div`
  margin-top: 48px;
  width: 100%;

  input {
    background: #fff;
    border: none;
    border-radius: 24px;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.04);
    height: 50px;
    outline: 0;
    padding: 0 16px;
    width: 100%;

    &::placeholder{
      color: #BCBCBC;
    }
  }
`;
