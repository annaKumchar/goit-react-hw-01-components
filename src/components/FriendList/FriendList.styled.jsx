import styled from '@emotion/styled';

export const FriendListEl = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FriendItem = styled.li`
  border-radius: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  height: 100px;
  gap: 20px;
  padding: 10px 10px 10px 40px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 0;
  background-color: ${props => (props.statusType ? 'green' : 'red')};
`;

export const FriendAvatar = styled.img``;

export const FriendName = styled.p`
  font-size: 30px;
  font-weight: 600;
`;
