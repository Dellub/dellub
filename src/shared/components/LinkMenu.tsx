import { ReactNode } from 'react';
import { onScrollTo } from '../utils/window';

type LinkMenuProps = {
	children: ReactNode;
	id: string;
};

const LinkMenu = ({ children, id }: LinkMenuProps) => {
	return (
		<a className="link-menu" onClick={() => onScrollTo(id)}>{children}</a>
	);
};

export default LinkMenu;
