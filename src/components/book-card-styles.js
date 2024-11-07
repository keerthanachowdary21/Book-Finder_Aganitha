import styled from "styled-components";

export const BookCardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 10px;
  margin: 10px;
  width: 200px;
  text-align: center;
  background-color: #f9f9f9;
  border-bottom: 5px solid #82fff9;

  &:hover {
    transform: translateY(-5px);
    background-color: #82fff9;
    border-bottom: 5px solid #ffffff;
  }
`;

export const BookImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

export const BookTitle = styled.h3`
  font-size: 1rem;
  margin: 10px 0 5px;
  color: #333;
`;

export const BookInfo = styled.p`
  font-size: 0.9rem;
  margin: 4px 0;
  color: #666;
`;
