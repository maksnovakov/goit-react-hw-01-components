import PropTypes from 'prop-types'
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ cardsFriends }) => {
    return <ul className='friend_list'>{cardsFriends.map
                (({ avatar, name, isOnline, id }) =>
                <FriendListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline} />)}
            </ul>
}

FriendList.propTypes = {
    cardsFriends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
}