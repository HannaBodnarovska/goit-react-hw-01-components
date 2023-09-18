import css from './Friends.module.css';

export const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;

  return (
    <li className={css.item}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
