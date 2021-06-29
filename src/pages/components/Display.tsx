import { ReactNode } from 'react';

type DisplayProps = {
	children: string;
}

const Display = ({ children }: DisplayProps) => {
	return <h1 className={`display`}dangerouslySetInnerHTML={{
		__html: children,
	}}/>;
};

export default Display;
