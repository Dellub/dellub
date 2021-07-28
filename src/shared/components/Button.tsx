import { ReactNode } from "react";

type ButtonProps = {
	children: ReactNode;
	size?: 'sm' | 'md' | 'lg';
	type?: 'primary' | 'secondary' | 'tertiary';
	disabled?: boolean;
}

const Button = ({ children, size, type, disabled }: ButtonProps) => {
	return (
		<button
			className={`btn btn-${size} btn-${type}`}
			disabled={!!disabled}
		>
			{children}
		</button>
	);
};

Button.defaultProps = {
	size: 'sm',
	type: 'primary',
	disabled: false,
}

export default Button;
