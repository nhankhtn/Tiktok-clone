import classNames from 'classnames/bind';
import {
    faVolumeHigh,
    faVolumeMute,
    faPlay,
    faPause
} from '@fortawesome/free-solid-svg-icons';

import styles from './Video.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useRef, useState } from 'react';
import ActionVideo from './ActionVideo';

const cx = classNames.bind(styles);

function Video({
    id,
    src,
    title,
    description,
    avatar,
    favorites,
    likes,
    comments,
    shares,
    onFollow,
    onComment,
    onFavorite,
    onShare,
    ...passProps }) {

    const [volume, setVolume] = useState(1)
    const [isMute, setIsMute] = useState(false)
    const [progressVideo, setProgressVideo] = useState(0)
    const [isHovering, setIsHovering] = useState(false)
    const [isPlaying, setIsPlaying] = useState(true)

    const videoRef = useRef();
    const infoVideoRef = useRef();
    const progressVideoRef = useRef();

    // Handle when user change volume
    useEffect(() => {
        videoRef.current.volume = isMute ? 0 : volume;
    }, [volume, isMute])

    const handleLoadedData = (e) => {
        // e.target.muted = false;
    };

    const handleEndedVideo = useCallback((e) => {
        e.target.currentTime = 0;
        e.target.play();
    }, []);

    const handlePlayVideo = useCallback(() => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying)
    }, [isPlaying]);

    const handleChangeProgress = useCallback((e) => {
        const progress = e.target.value;
        const currentTime = (progress * videoRef.current.duration) / 100;

        videoRef.current.currentTime = currentTime;
        setProgressVideo(progress)
    }, [])

    const handleTimeUpdate = (e) => {
        const video = e.target;
        const progress = (video.currentTime / video.duration) * 100;
        setProgressVideo(progress)
    }

    useEffect(() => {
        if (isHovering) {
            progressVideoRef.current.style.display = 'flex';
            infoVideoRef.current.style.bottom = "32px";
        } else {
            infoVideoRef.current.style.bottom = "0";
            progressVideoRef.current.style.display = 'none';
        }
    }, [isHovering])

    return <div className={cx('wrapper')} {...passProps}>
        <div className={cx('video-container')}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <video
                muted
                controls
                autoPlay
                ref={videoRef}
                className={cx("video")}
                onEnded={handleEndedVideo}
                onLoadedData={handleLoadedData}
                onTimeUpdate={handleTimeUpdate}
            >
                <source src={src} type="video/mp4" />
            </video>
            <div className={cx("wrapper-volume")}>
                <button onClick={() => setIsMute(!isMute)} className={cx("btn-volume")}>
                    {!isMute ? (
                        <span className={cx("volume-on")} >
                            <FontAwesomeIcon icon={faVolumeHigh} />
                        </span>
                    ) : (
                        <span className={cx("volume-off")}>
                            <FontAwesomeIcon icon={faVolumeMute} />
                        </span>
                    )}
                </button>
                <input
                    min="0"
                    max="1"
                    step="0.01"
                    type="range"
                    value={isMute ? 0 : volume}
                    className={cx("volume-slider")}
                    onChange={e => setVolume(e.target.value)}
                />
            </div>
            <div className={cx('video-info')} ref={infoVideoRef}>
                <h3 className={cx('video-title')}>{title}</h3>
                <p className={cx('video-description')}>{description}</p>
            </div>
            <div className={cx('wrapper-progress')} ref={progressVideoRef}>
                <button onClick={handlePlayVideo} className={cx('play-btn')}>
                    {!isPlaying ? (
                        <span className={cx("play-icon")} >
                            <FontAwesomeIcon icon={faPlay} />
                        </span>
                    ) : (
                        <span className={cx("pause-icon")}>
                            <FontAwesomeIcon icon={faPause} />
                        </span>
                    )}
                </button>
                <input
                    type='range'
                    min='0'
                    max='100'
                    step='1'
                    value={progressVideo}
                    onInput={handleChangeProgress}
                    className={cx('progress-video')}
                />
            </div>
        </div>

        <ActionVideo
            id={id}
            avatar={avatar}
            likes={likes}
            comments={comments}
            favorites={favorites}
            shares={shares}
            onFollow={onFollow}
            onComment={onComment}
            onFavorite={onFavorite}
            onShare={onShare}
        />
    </div >;
}

export default Video;