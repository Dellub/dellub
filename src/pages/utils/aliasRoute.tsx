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
}

const aliasRoutes = (alias: string): RouteObjType => {
  const a = RoutesList?.[alias];
  if (a?.href) {
    return a;
  }

  return { path: '', href: '', valid: false };
};

export default aliasRoutes;
