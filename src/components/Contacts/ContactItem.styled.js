import styled from 'styled-components';

export const ItemEl = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NumberEl = styled.span`
  margin: 0 10px;
  font-style: italic;
`;
export const BtnDellete = styled.button`
  padding: 4px;
  font-size: 40px;
  cursor: pointer;
  border: 1px solid rgba(33, 33, 33, 0.5);
  border-radius: 4px;
  outline: none;
  &:hover {
    background-color: #70a1ff;
    border-color: #70a1ff;
    overflow: hidden;
  }
`;
