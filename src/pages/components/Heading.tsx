import { ReactNode } from 'react';

type HeadingProps = {
	size?: number;
	children: string;
}

const Heading = ({ size, children }: HeadingProps) => {
	return <h2 className={`heading heading-${size}`} dangerouslySetInnerHTML={{
		__html: children,
	}}/>;
};

Heading.defaultProps = {
	size: 1,
}

export default Heading;
