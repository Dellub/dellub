import { ReactNode } from 'react';

type DisplayProps = {
	text: string;
}

const Display = ({ text }: DisplayProps) => {
	return <h1 className={`display`}dangerouslySetInnerHTML={{
		__html: text,
	}}/>;
};

export default Display;
