
import React, { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

interface RouteLeave {
    ignoreConfirm?: boolean;
}

export type RouteRecord = RouteObject & RouteLeave;

/**
 * 진입페이지
 */
const entryRoutes: RouteRecord[] = [
    { path: "/", Component: lazy(() => import('@views/EntryPage')), ignoreConfirm: false }
];

const statsRoutes: RouteObject[] = [
    {path: "/stats", Component: lazy(() => import('@views/MonthlyStats'))}
]

/**
 * 모든 라우팅 
 */
const pageRoutes: RouteRecord[] = [
    ...entryRoutes,
    ...statsRoutes
]

export {
    pageRoutes,
}