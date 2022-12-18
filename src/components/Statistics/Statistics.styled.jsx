import styled from '@emotion/styled';

export const StatSection = styled.section`
  background-color: white;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const StatTitle = styled.h2`
  margin: 0;
  padding: 20px;
  text-align: center;
  text-transform: uppercase;
  color: rgb(105, 96, 96);
  
`;

export const StatList = styled.ul`
  padding: 0;
  display: flex;
  font-weight: 600;
`;

export const StatItem = styled.li`
  height: 100px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
`;

export const StatLabel = styled.span``;

export const StatPercentage = styled.span``;
