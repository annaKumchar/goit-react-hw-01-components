import PropTypes from 'prop-types';
import { FriendListEl } from '../FriendList/FriendList.styled';

import { FriendListItem } from '../FriendList/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendListEl>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendListEl>
  );
};
FriendList.prototype = {
  friends: PropTypes.shape,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
