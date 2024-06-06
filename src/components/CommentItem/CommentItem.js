import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';

import styles from './CommentItem.module.scss';
import images from '~/assets/images'
import { LikeIcon, MoreIcon } from '../Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from "~/components/SuggestedAccount/AccountPreview";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        title: 'Report',
        icon: <FontAwesomeIcon icon={faFlag} />,
    }
]

function CommentItem() {
    const renderPreview = (props) => (
        <div tabIndex={-1} {...props}>
            <PopperWrapper>
                <AccountPreview />
            </PopperWrapper>
        </div>
    );

    const renderMoreOption = (props) => (
        <div tabIndex={-1} {...props}>
            <div className={cx("more-option")}>
                {MENU_ITEMS.map((item, index) => (
                    <button key={index} className={cx("more-item")}>
                        <span>{item.icon}</span>
                        {item.title}
                    </button>
                ))}
            </div>
        </div>
    );

    return (
        <div className={cx("wrapper")}>
            <div>
                <Tippy
                    interactive
                    delay={[800, 0]}
                    offset={[50, 0]}
                    placement="bottom"
                    render={renderPreview}
                >
                    <img className={cx("avatar")} src={images.avatar} alt="avatar" />
                </Tippy>
            </div>
            <div className={cx("info")}>
                <a href='/'>
                    <span className={cx("username")}>
                        Ngo Nguyen Duy Nhan
                    </span>
                </a>
                <p className={cx("content")}>Bả ăn đúng cay</p>
                <span className={cx(["date", "sub"])}>4-22</span>
                <button className={cx(["reply-btn", "sub"])}>Reply</button>
            </div>
            <div className={cx("action")}>
                <div>
                    <Tippy
                        interactive
                        delay={[800, 0]}
                        offset={[-80, 0]}
                        placement="bottom"
                        render={renderMoreOption}
                    >
                        <button className={cx("more-btn")}>
                            <MoreIcon />
                        </button>
                    </Tippy>
                </div>
                <button className={cx("like-btn")}>
                    <LikeIcon />
                </button>
                <span className={cx("likes")}>32</span>
            </div>
        </div>
    )
}
CommentItem.propTypes = {
};

export default CommentItem;
