/* eslint-disable @next/next/no-img-element */

type Props = {
	title: string;
	description: string;
	image: string;
}
const WhyDellubItem = ({title, description, image}: Props) => {
	return (
		<div className="why-dellub-item">
			<img src={`/images/${image}.png`} alt={title} className="why-dellub-image" />
			<div className="text-center md:text-left">
				<span className="heading heading-4 why-dellub-title">{title}</span>
				<p className="body body-2" dangerouslySetInnerHTML={{
					__html: description,
				}}/>
			</div>
			<img src="/images/dots-vertical.png" alt="Dots vertical" className="why-dellub-dots" />
		</div>
	);
};

export default WhyDellubItem;
