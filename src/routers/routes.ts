
import React, { lazy } from 'react';

const EntryPage = lazy(() => import('@views/entry/EntryPage'));

/**
 * 진입페이지
 */
const entryRoutes = [
    {path: "/", component: EntryPage,}
];

const myPageRoutes = [
    // { path: "/myPage/:id"}
]

/**
 * 모든 라우팅 
 */
const pageRoutes = [
    ...entryRoutes,
    ...myPageRoutes
]

export {
    pageRoutes,
}