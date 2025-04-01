type NavigationConfigKey =
  | "home"
  | "chapter2"
  | "chapter1"
  | "chapter3"
  | "emptyDepArray";

export interface NavigationConfig {
  [key: string]: {
    path: string;
    title: string;
    prev: NavigationConfigKey | null;
    next: NavigationConfigKey | null;
  };
}

export const navigationConfig: NavigationConfig = {
  home: {
    path: "/",
    title: "Chapter 1 Introduction",
    prev: null,
    next: null,
  },
  chapter1: {
    path: "/the-right-way-to-useeffect",
    title: "Chapter 1 - Introduction",
    prev: "home",
    next: "chapter2",
  },
  noEffect: {
    path: "/the-right-way-to-useeffect/broken-sync-no-state",
    title: "Broken Sync (No useEffect)",
    prev: "chapter1",
    next: "chapter2",
  },
  noState: {
    path: "/the-right-way-to-useeffect/broken-sync-no-useeffect",
    title: "Broken Sync (No State)",
    prev: "chapter1",
    next: "chapter2",
  },
  emptyDepArray: {
    path: "/the-right-way-to-useeffect/no-sync",
    title: "Empty Dependency Array",
    prev: "chapter1",
    next: "chapter2",
  },
  synced: {
    path: "/the-right-way-to-useeffect/synchronised",
    title: "Synchronised State",
    prev: "chapter1",
    next: "chapter2",
  },

  chapter2: {
    path: "/react-server-components",
    title: "Chapter 2 - React Server Components",
    prev: "home",
    next: "chapter3",
  },
  chapter3: {
    path: "/design-patterns",
    title: "Chapter 2 - Design Patterns",
    prev: "chapter2",
    next: null,
  },

  // bookfinder: {
  //   path: "/the-right-way-to-use-effect/broken-sync-no-useeffect",
  //   title: "Broken Sync (No useEffect)",
  //   prev: "chapter1",
  //   next: null,
  // },
};
