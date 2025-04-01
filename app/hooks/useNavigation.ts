import { useLocation } from "react-router";
import { navigationConfig } from "~/config/navigationConfig";

// Define types for navigation items
interface NavigationItem {
  path: string;
  title: string;
  ariaLabel: string;
}

interface NavigationConfig {
  [key: string]: {
    path: string;
    title: string;
    prev: string | null;
    next: string | null;
  };
}

export const useCustomNavigation = () => {
  const location = useLocation();

  // Default navigation links (fallback)
  const defaultNav: NavigationItem = {
    path: "/",
    title: "Home",
    ariaLabel: "Go to Home page",
  };

  let currentPageKey = Object.keys(navigationConfig)[0]; // Default to first item

  Object.entries(navigationConfig).forEach(([key, config]) => {
    if (key !== "home" && location.pathname === config.path) {
      currentPageKey = key;
      console.log(key, "currentPageKey");
    }
  });

  const currentConfig = navigationConfig[currentPageKey];

  let prevNav = { ...defaultNav };
  let nextNav = { ...defaultNav };
  if (currentConfig) {
    const prevKey = currentConfig.prev;
    const nextKey = currentConfig.next;

    if (prevKey && navigationConfig[prevKey]) {
      prevNav = {
        path: navigationConfig[prevKey].path,
        title: `Previous: ${navigationConfig[prevKey].title}`,
        ariaLabel: `Go to ${navigationConfig[prevKey].title}`,
      };
    }

    if (nextKey && navigationConfig[nextKey]) {
      nextNav = {
        path: navigationConfig[nextKey].path,
        title: `Next: ${navigationConfig[nextKey].title}`,
        ariaLabel: `Go to ${navigationConfig[nextKey].title}`,
      };
    }
  }

  return {
    prevPath: prevNav,
    nextPath: nextNav,
    currentKey: currentPageKey,
  };
};
