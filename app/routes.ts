import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("home.tsx"),
  ...prefix("the-right-way-to-useeffect", [
    index("chapter1/home.tsx"),
    layout("./chapter1/layout/index.tsx", [
      route("synchronised", "./chapter1/bookFinder.tsx"),
      route("broken-sync-no-state", "./chapter1/noState.tsx"),
      route("broken-sync-no-useeffect", "./chapter1/noEffect.tsx"),
      route("no-sync", "./chapter1/emptyDepArray.tsx"),
    ]),
  ]),
  ...prefix("react-server-components", [
    index("chapter2/index.tsx"),
  ]),
  ...prefix("react-design-patterns", [
    index("chapter3/index.tsx"),
  ]),
] satisfies RouteConfig;
