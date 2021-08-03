/* eslint-disable @next/next/no-img-element */
import Slider from 'react-slick';

const Clients = () => {
	return (
		<section className="py-20 px-2 flex flex-row justify-center items-center flex-wrap relative clients-slider" id="clients">
			<img src="/images/udix.png" alt="Udix" className="client-image" />
			<img src="/images/trafalgar.png" alt="Trafalgar" className="client-image" />
			<img src="/images/care-switch.png" alt="Care Switch" className="client-image" />
			<img src="/images/housy.png" alt="Care Switch" className="client-image" />
			<img src="/images/woo-commerce.png" alt="Woo Commerce" className="client-image" />
		</section>
	);
};

export default Clients;
