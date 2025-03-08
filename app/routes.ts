import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  ...prefix("bookfinder", [
    layout("./bookfinder/layout/index.tsx", [
      index("bookfinder/home.tsx"),
      route("contact", "./bookfinder/test.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
