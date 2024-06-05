import classNames from "classnames/bind";
import images from "~/assets/images";

import styles from "./Video.module.scss";
import CommentItem from "~/components/CommentItem";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faCommentDots, faHeart, faMusic, faShare } from "@fortawesome/free-solid-svg-icons";
import { EmbedIcon, FacebookIcon, SendIcon, TwitterIcon, WhatsappIcon } from "~/components/Icons";

const cx = classNames.bind(styles);

function Video() {
    return <div className={cx("container")}>
        <div className={cx("wrapper-video")}>
            <div className={cx("overlay")}></div>
            <video muted autoPlay controls className={cx('video')}>
                <source src="http://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
        </div>
        <div className={cx("wrapper-info")}>
            <div className={cx("header")}>
                <div className={cx("title")}>
                    <div className={cx("info-user")}>
                        <img className={cx("avatar")} src={images.avatar} alt="avatar" />
                        <div className={cx("username")}>
                            <span>Ngô Nguyễn Duy Nhân</span>
                            <p>Creator name</p>
                        </div>
                        <Button className={cx("follow-btn")} primary>
                            Follow
                        </Button>
                    </div>
                    <div className={cx("description")}>
                        <p className={cx("content-des")}>
                            Hiếu chắc cũng hay bị mẹ gọi nv :))) #emilypham #vtvcab #vietnam #dailyvlog #xuhuong #trending #dieud
                        </p>
                        <span className={cx("music")}>
                            <FontAwesomeIcon className={cx("icon-music")} icon={faMusic} />
                            nhạc nền - hacoi1711
                        </span>
                    </div>
                </div>
                <div className={cx("action")}>
                    <div className={cx("wrapper-react")}>
                        <button className={cx("react-btn")}>
                            <span className={cx("react-icon")}>
                                <FontAwesomeIcon icon={faHeart} />
                            </span>
                            <strong>1.2M</strong>
                        </button>
                        <button className={cx("react-btn")}>
                            <span className={cx("react-icon")}>
                                <FontAwesomeIcon icon={faCommentDots} />
                            </span>
                            <strong>1.2K</strong>
                        </button>
                        <button className={cx("react-btn")}>
                            <span className={cx("react-icon")}>
                                <FontAwesomeIcon icon={faBookmark} />
                            </span>
                            <strong>1.2K</strong>
                        </button>
                    </div>
                    <div className={cx("wrapper-link")}>
                        <a href="/" className={cx("link-btn")}>
                            <EmbedIcon />
                        </a>
                        <a href="/" className={cx("link-btn")}>
                            <SendIcon />
                        </a>
                        <a href="/" className={cx("link-btn")}>
                            <FacebookIcon />
                        </a>
                        <a href="/" className={cx("link-btn")}>
                            <WhatsappIcon />
                        </a>
                        <a href="/" className={cx("link-btn")}>
                            <TwitterIcon />
                        </a>
                        <a href="/" className={cx(["link-btn", "share-btn"])}>
                            <FontAwesomeIcon icon={faShare} />
                        </a>
                    </div>
                </div>
                <div className={cx("copy-link")}>
                    <p className={cx("link")}>https://www.tiktok.com/@hacoi1711/video/7367178376...</p>
                    <button className={cx("copy-btn")}>Copy link</button>
                </div>
            </div>
            <div className={cx("wrapper-comments")}>
                <div className={cx("wrapper-btn")}>
                    <button className={cx(["nav-btn", "active"])}>Comments (9097)</button>
                    <button className={cx("nav-btn")}>Creator videos</button>
                </div>
                <span className={cx("separator")}></span>
                <div className={cx("comments")}>
                    <CommentItem />
                    <CommentItem />
                    <CommentItem />
                    <CommentItem />
                    <CommentItem />
                </div>
            </div>
            <div className={cx("comment-action")}>
                <input className={cx("content")} placeholder="Add comment..." />
                <button className={cx("comment-btn")}>Post</button>
            </div>
        </div>
    </div>;
}

export default Video;