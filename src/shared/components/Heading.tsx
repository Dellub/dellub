type HeadingProps = {
	size?: number;
	text: string;
}

const Heading = ({ size, text }: HeadingProps) => {
	return <h2 className={`heading heading-${size}`} dangerouslySetInnerHTML={{
		__html: text,
	}}/>;
};

Heading.defaultProps = {
	size: 1,
}

export default Heading;
