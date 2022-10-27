import PropTypes from 'prop-types'
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return <li className={css.item_friends}>
        <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
    </li>
}

FriendListItem.propTypes = {
    cardsFriends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    )
}