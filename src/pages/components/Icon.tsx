import { ReactNode } from 'react';

type ButtonProps = {
	children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
	return (
		<span className="icon icon-default">
			{children}
		</span>
	);
};

export default Button;
