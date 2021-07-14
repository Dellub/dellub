import { ReactNode } from 'react';

type ContainerProps = {
	children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
	return (
		<div className="container-custom">
			{children}
		</div>
	);
};

export default Container;
