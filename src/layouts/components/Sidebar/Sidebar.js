import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    ExploreActiveIcon,
    ExploreIcon,
    FollowingActiveIcon,
    FollowingIcon,
    FriendActiveIcon,
    FriendIcon,
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '../../../components/SuggestedAccount/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FollowingIcon />}
                    activeIcon={<FollowingActiveIcon />}
                />
                <MenuItem title="Friend" to={config.routes.friend} icon={<FriendIcon />} activeIcon={<FriendActiveIcon />} />
                <MenuItem title="Explore" to={config.routes.explore} icon={<ExploreIcon />} activeIcon={<ExploreActiveIcon />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following" />
        </aside>
    );
}

export default Sidebar;
