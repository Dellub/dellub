import { ReactNode } from 'react';

type TextProps = {
	children: ReactNode;
}

const Text = ({ children }: TextProps) => {
	return (
		<span>{children}</span>
	);
};

export default Text;
