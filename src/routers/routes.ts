import React, { lazy } from "react";
import { RouteObject } from "react-router-dom";

interface RouteLeave {
  ignoreConfirm?: boolean;
}

export type RouteRecord = RouteObject & RouteLeave;

/**
 * 진입페이지
 */
const entryRoutes: RouteRecord[] = [
  { path: "/", Component: lazy(() => import("@views/EntryPage")) },
];

const statsRoutes: RouteObject[] = [
  { path: "/stats", Component: lazy(() => import("@views/MonthlyStats")) },
];

const textStickerRoutes: RouteObject[] = [
  {
    path: "/text-sticker",
    Component: lazy(() => import("@views/TextSticker")),
  },
];

/**
 * 모든 라우팅
 */
const pageRoutes: RouteRecord[] = [
  ...entryRoutes,
  ...statsRoutes,
  ...textStickerRoutes,
];

export { pageRoutes };
