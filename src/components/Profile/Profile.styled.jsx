import styled from '@emotion/styled';

export const UserProfile = styled.div`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: white;
  border-radius: 10px;
  display: block;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.img`
margin-top: 20px;
  border-radius: 50%;
`;

export const UserName = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

export const Contacts = styled.p`
  color: rgb(201, 193, 193);
  font-weight: 600;
`;

export const Stats = styled.ul`
  background-color: rgb(238, 232, 232);
  border-radius: 0 0 10px 10px;
  padding: 0;
  display: flex;
`;

export const StatsItem = styled.li`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 33.3%;
`;

export const Label = styled.span``;

export const Quantity = styled.span``;
