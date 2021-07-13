import { ReactNode } from 'react';

type ParagraphProps = {
	children: ReactNode;
}

const Paragraph = ({ children }: ParagraphProps) => {
	return (
		<span>{children}</span>
	);
};

export default Paragraph;
