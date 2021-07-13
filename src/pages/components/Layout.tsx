import { ReactNode } from "react";

type ButtonProps = {
	children: ReactNode;
}

const Layout = ({ children }: ButtonProps) => {
	return (
		<div className="layout">
			{children}
		</div>
	);
};

export default Layout;
