import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import aliasRoutes, { isRouteByPath } from '../utils/aliasRoute';

type LinkMenuProps = {
	children: ReactNode;
	alias: string;
};

const LinkMenu = ({ children, alias }: LinkMenuProps) => {
  const router = useRouter();
  const { pathname } = router;
	const route = aliasRoutes(alias);
	return (
		<Link {...route}>
			<a className={`link-menu ${isRouteByPath(alias, pathname) ? 'active' : ''}`} href={route.href}>{children}</a>
		</Link>
	);
};

export default LinkMenu;
