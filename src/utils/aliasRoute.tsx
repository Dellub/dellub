import Router from 'next/router';

type RouteObjType = {
  path: string;
  href: string;
  valid?: boolean;
};
type RoutesListType = { [key: string]: RouteObjType };

const RoutesList: RoutesListType = {
	index: {
    path: '/',
    href: `/`,
  },
	aboutMe: {
    path: '/about-me',
    href: `/about-me`,
  },
	cases: {
    path: '/cases',
    href: `/cases`,
  },
	contactUs: {
    path: '/contact-us',
    href: `/contact-us`,
  },
}

const aliasRoutes = (alias: string): RouteObjType => {
  const a = RoutesList?.[alias];
  if (a?.href) {
    return a;
  }

  return { path: '', href: '', valid: false };
};

export const isRouteByPath = (alias: string, path: string): boolean => {
  const key = Object.keys(RoutesList).find((k) => {
    return RoutesList[k].path === path;
  });

  if (key && key === alias) {
    return true;
  }

  return false;
};

export default aliasRoutes;
