import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf9Pxt0hKUL4UKDY5fFDJKKrLA8NUyD6eVjA&usqp=CAU"
                    alt="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/09c313067497ecc6e859cf77a802affb~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1709478000&x-signature=Vn7NOqxsOc7BQFtTe%2Bvc0HGWBo4%3D"
                />
                <Button className={cx('follow-btn')} outline >
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>loitaitoi</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Ngo Nguyen Duy Nhan</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>2.4M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {};

export default AccountPreview;
