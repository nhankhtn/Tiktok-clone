import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './VideoLayout.module.scss';

const cx = classNames.bind(styles);

function VideoLayout({ children }) {
    return (
        <div className={cx('container')}>
            {children}
        </div >
    );
}

VideoLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default VideoLayout;
