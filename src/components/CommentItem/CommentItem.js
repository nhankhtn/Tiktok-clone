import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './CommentItem.module.scss';
import images from '~/assets/images';

import { LikeIcon, MoreIcon } from '../Icons';

const cx = classNames.bind(styles);

function CommentItem() {
    return (
        <div className={cx("wrapper")}>
            <img className={cx("avatar")} src={images.avatar} alt="avatar" />
            <div className={cx("info")}>
                <h4 className={cx("username")}>Ngo Nguyen Duy Nhan</h4>
                <p className={cx("content")}>Bả ăn đúng cay</p>
                <span className={cx(["date", "sub"])}>4-22</span>
                <button className={cx(["reply-btn", "sub"])}>Reply</button>
            </div>
            <div className={cx("action")}>
                <button className={cx("more-btn")}>
                    <MoreIcon />
                </button>
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
