import React, { lazy } from "react";
import { RouteObject } from "react-router-dom";

const entryRoutes: RouteObject[] = [
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
    Component: lazy(() => import("@views/ImageEditor")),
  },
];

const pageRoutes: RouteObject[] = [
  ...entryRoutes,
  ...statsRoutes,
  ...textStickerRoutes,
];

export { pageRoutes };
