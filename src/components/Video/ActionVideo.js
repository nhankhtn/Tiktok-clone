import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHeart, faBookmark, faShare, faPlus } from '@fortawesome/free-solid-svg-icons';
import { memo, useCallback, useRef, useState } from 'react';
import styles from './Video.module.scss';
import { LikedIcon } from '../Icons';


const cx = classNames.bind(styles);


function ActionVideo({ id, avatar, likes, comments, favorites, shares, onFollow, onComment, onFavorite, onShare, ...passProps }) {
    const [isLiked, setIsLiked] = useState(false);
    const likesRef = useRef(likes);

    const handleLike = useCallback(() => {

        // fetch(`http://localhost:3001/videos/${id}/like`, {
        //     method: 'PATCH',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         likes: likes
        //     })
        // })

        likesRef.current = isLiked ? likesRef.current - 1 : likesRef.current + 1;

        setIsLiked(!isLiked)
    }, [isLiked])



    return (<div className={cx('action')} {...passProps}>
        <div className={cx('info')}>
            <a href="/">
                <img
                    className={cx('avatar')}
                    src={avatar}
                    alt="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/09c313067497ecc6e859cf77a802affb~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1709478000&x-signature=Vn7NOqxsOc7BQFtTe%2Bvc0HGWBo4%3D"
                ></img>
            </a>
            <button className={cx('follow-icon')} onClick={onFollow}>
                <FontAwesomeIcon className={cx("icon-plus")} icon={faPlus} />
            </button>
        </div>
        <button className={cx("wrapper-icon")} onClick={handleLike}>
            {!isLiked ? (
                <span className={cx('icon-action')}>
                    <FontAwesomeIcon className={cx("icon")} icon={faHeart} />
                </span>
            ) : (
                <span className={cx('icon-action')}>
                    <LikedIcon />
                </span>
            )}
            <strong>{likesRef.current}</strong>
        </button>
        <button className={cx("wrapper-icon")} onClick={onComment}>
            <span className={cx('icon-action')}>
                <FontAwesomeIcon className={cx("icon")} icon={faCommentDots} />
            </span>
            <strong>{comments}</strong>
        </button>
        <button className={cx("wrapper-icon")} onClick={onFavorite}>
            <span className={cx('icon-action')}>
                <FontAwesomeIcon className={cx("icon")} icon={faBookmark} />
            </span>
            <strong>{favorites}</strong>
        </button>
        <button className={cx("wrapper-icon")} onClick={onShare}>
            <span className={cx('icon-action')}>
                <FontAwesomeIcon className={cx("icon")} icon={faShare} />
            </span>
            <strong>{shares}</strong>
        </button>
    </div>);
}

export default memo(ActionVideo);