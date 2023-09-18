import { FriendListItem } from './FriendListItem';
import css from './Friends.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendListItem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};


