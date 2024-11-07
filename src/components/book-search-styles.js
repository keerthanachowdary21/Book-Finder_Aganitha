import styled, { keyframes } from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
`;

export const InputButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const SearchInput = styled.input`
  padding: 10px;
  width: 100%;
  max-width: 400px;
  margin: 10px;
  border: 3px solid #04faee;
  border-radius: 10px;
  font-size: 1rem;
  margin: 10px;
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #000000;
  background-color: #04faee;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    color: #fff;
  }

  &:hover:enabled {
    background-color: #04faee;
    color: #000000;
  }
`;

export const BookList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

export const NoResults = styled.p`
  font-size: 1.2rem;
  color: #ffffff;
  margin-top: 20px;
  font-weight: bold;
  text-align: center;
`;

export const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerCircle = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border-left-color: #04faee;
  animation: ${spinAnimation} 1s ease infinite;
`;
