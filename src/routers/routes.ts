import React, { lazy } from "react";
import { RouteObject } from "react-router-dom";

interface RouteLeave {
  ignoreConfirm?: boolean;
}

export type RouteRecord = RouteObject & RouteLeave;

const entryRoutes: RouteRecord[] = [
  {
    path: "/",
    Component: lazy(() => import("@views/Entry")),
  },
];

const statsRoutes: RouteObject[] = [
  {
    path: "/stats",
    Component: lazy(() => import("@views/MonthlyStats")),
  },
];

const textStickerRoutes: RouteObject[] = [
  {
    path: "/text-sticker",
    Component: lazy(() => import("@views/EditImage")),
  },
];

const pageRoutes: RouteRecord[] = [
  ...entryRoutes,
  ...statsRoutes,
  ...textStickerRoutes,
];

export { pageRoutes };
