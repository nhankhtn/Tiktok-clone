import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faCommentDots, faHeart, faMailReply, faMusic, faShare } from "@fortawesome/free-solid-svg-icons";
import { EmbedIcon, FacebookIcon, SendIcon, TwitterIcon, WhatsappIcon } from "~/components/Icons";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';


import images from "~/assets/images";
import styles from "./Video.module.scss";
import CommentItem from "~/components/CommentItem";
import Button from "~/components/Button";
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from "~/components/SuggestedAccount/AccountPreview";
import AccountItem from "~/components/SuggestedAccount/AccountItem";
import Menu from "~/components/Popper/Menu";
import { faLine, faLinkedin, faPinterest, faReddit, faTelegram } from "@fortawesome/free-brands-svg-icons";


const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLinkedin} />,
        title: 'Share to LinkedIn',
        href: "https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Furl%3Dhttps%253A%252F%252Fwww.tiktok.com%252F%2540sinhvienhuce.tts%252Fvideo%252F7377010783718296839%253Fis_from_webapp%253D1%2526sender_device%253Dpc%2526web_id%253D7374741999008712208"
    },
    {
        icon: <FontAwesomeIcon icon={faReddit} />,
        title: 'Share to Reddit',
        href: "https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2Fsubmit%3Furl%3Dhttps%253A%252F%252Fwww.tiktok.com%252F%2540sinhvienhuce.tts%252Fvideo%252F7377010783718296839%253Fis_from_webapp%253D1%2526sender_device%253Dpc%2526web_id%253D7374741999008712208"
    },
    {
        icon: <FontAwesomeIcon icon={faTelegram} />,
        title: 'Share to Telegram',
        href: "https://t.me/share/url?text=https%3A%2F%2Fwww.tiktok.com%2F%40sinhvienhuce.tts%2Fvideo%2F7377010783718296839%3Fis_from_webapp%3D1%26sender_device%3Dpc%26web_id%3D7374741999008712208&url=https%3A%2F%2Fwww.tiktok.com%2F%40sinhvienhuce.tts%2Fvideo%2F7377010783718296839%3Fis_from_webapp%3D1%26sender_device%3Dpc%26web_id%3D7374741999008712208"
    },
    {
        icon: <FontAwesomeIcon icon={faMailReply} />,
        title: 'Share to Email',
        href: "mailto:example@example.com"
    },
    {
        icon: <FontAwesomeIcon icon={faLine} />,
        title: 'Share to Line',
        href: "https://lineit.line.me/share/ui?text=https%3A%2F%2Fwww.tiktok.com%2F%40sinhvienhuce.tts%2Fvideo%2F7377010783718296839%3Fis_from_webapp%3D1%26sender_device%3Dpc%26web_id%3D7374741999008712208&url=https%3A%2F%2Fwww.tiktok.com%2F%40sinhvienhuce.tts%2Fvideo%2F7377010783718296839%3Fis_from_webapp%3D1%26sender_device%3Dpc%26web_id%3D7374741999008712208"
    },
    {
        icon: <FontAwesomeIcon icon={faPinterest} />,
        title: 'Share to Pinterest',
        href: "https://www.pinterest.com/pin/create/button/?desc=https%3A%2F%2Fwww.tiktok.com%2F%40sinhvienhuce.tts%2Fvideo%2F7377010783718296839%3Fis_from_webapp%3D1%26sender_device%3Dpc%26web_id%3D7374741999008712208&media=https%3A%2F%2Flf16-tiktok-web.ttwstatic.com%2Fobj%2Ftiktok-web-common-sg%2Fmtact%2Fstatic%2Fimages%2Fshare_img.png&url=https%3A%2F%2Fwww.tiktok.com%2F%40sinhvienhuce.tts%2Fvideo%2F7377010783718296839%3Fis_from_webapp%3D1%26sender_device%3Dpc%26web_id%3D7374741999008712208"
    },
];

function Video() {

    const renderPreview = (props) => (
        <div tabIndex={-1} {...props}>
            <PopperWrapper>
                <AccountPreview />
            </PopperWrapper>
        </div>
    );


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
                        <div className={cx("show-info")}>
                            <Tippy
                                interactive
                                delay={[800, 0]}
                                offset={[50, 0]}
                                placement="bottom"
                                content="Account Preview"
                            // render={renderPreview}
                            >
                                <div className={cx("show-info")}>
                                    <img className={cx("avatar")} src={images.avatar} alt="avatar" />
                                    <div className={cx("username")}>
                                        <span>Ngô Nguyễn Duy Nhân</span>
                                        <p>Creator name</p>
                                    </div>
                                </div>
                            </Tippy>
                        </div>
                        {/* <div className={cx("show-info")}>
                            <AccountItem />
                        </div> */}
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
                        <Tippy delay={[0, 50]} content="Embed" placement="top">
                            <button className={cx('link-btn')}>
                                <EmbedIcon />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Send to friends" placement="top">
                            <button className={cx("link-btn")}>
                                <SendIcon />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Send to Facebook" placement="top">
                            <a href="/" className={cx("link-btn")}>
                                <FacebookIcon />
                            </a>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Send to WhatsApp" placement="top">
                            <a href="/" className={cx("link-btn")}>
                                <WhatsappIcon />
                            </a>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Send to Twitter" placement="top">
                            <a href="/" className={cx("link-btn")}>
                                <TwitterIcon />
                            </a>
                        </Tippy>
                        <Menu items={MENU_ITEMS}>
                            <span className={cx(["link-btn", "share-btn"])}>
                                <FontAwesomeIcon icon={faShare} />
                            </span>
                        </Menu>
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
        </div >
    </div >;
}

export default Video;