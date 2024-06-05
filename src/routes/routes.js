import config from '~/config';

//Layout
import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import Friend from '~/pages/Friend';
import Video from '~/pages/Video';
import VideoLayout from '~/layouts/VideoLayout';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.live,
        component: Live,
    },
    {
        path: config.routes.friend,
        component: Friend,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.search,
        component: Search,
        layout: null,
    },
    {
        path: config.routes.video,
        component: Video,
        layout: VideoLayout
    }
];

// Những router cần đăng nhập để xem
const privateRoutes = [];

export { publicRoutes, privateRoutes };
