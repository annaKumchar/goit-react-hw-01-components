import {
  FriendItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from '../FriendList/FriendList.styled';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendItem>
      <FriendStatus statusType={isOnline}>{isOnline}</FriendStatus>
      <FriendAvatar src={avatar} alt={name} width="70" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
}
