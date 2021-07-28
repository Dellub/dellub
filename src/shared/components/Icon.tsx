import { ReactNode } from 'react';

type IconProps = {
	children: ReactNode;
}

const Icon = ({ children }: IconProps) => {
	return (
		<span className="icon icon-default">
			{children}
		</span>
	);
};

export default Icon;
