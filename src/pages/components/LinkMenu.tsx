import Link from 'next/link';
import { ReactNode } from 'react';
import aliasRoutes from '../utils/aliasRoute';

type LinkMenuProps = {
	children: ReactNode;
};

const LinkMenu = ({ children }: LinkMenuProps) => {
	const route = aliasRoutes('index');
	return (
		<Link {...route}>
			<a href={route.href}>{children}</a>
		</Link>
	);
};

export default LinkMenu;
