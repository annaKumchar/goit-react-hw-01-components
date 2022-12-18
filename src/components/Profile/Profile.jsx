import PropTypes from 'prop-types';
import {
  UserProfile,
  Description,
  Avatar,
  UserName,
  Contacts,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from '../Profile/Profile.styled';
export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <UserProfile>
      <Description>
        <Avatar src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <Contacts>@{tag}</Contacts>
        <Contacts>{location}</Contacts>
      </Description>

      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </Stats>
    </UserProfile>
  );
};

Profile.prototype = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
