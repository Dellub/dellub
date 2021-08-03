/* eslint-disable @next/next/no-img-element */
import { ArrowForward } from '@material-ui/icons';
import Button from './Button';
import ButtonWhatsApp from './ButtonWhatsApp';

const HeroHome = () => {
	return (
		<section className="container-custom min-h-screen-custom hero py-auto flex flex-col relative" id="home">
			<img src="/images/d.png" alt="Logo d" className="home-d" />
			<img src="/images/home-hero-desktop.png" alt="Hero Home" className="home-hero" />
			<div className="my-auto flex flex-col items-center md:items-start z-10">
				<div className="-mx-4 block md:hidden mb-8">
					<img src="/images/home-hero-mobile.png" alt="Hero Home" className="w-screen" />
				</div>
				<img src="/images/marker.png" alt="Marker Title" className="hidden md:block" />
				<h1 className="display text-center md:text-left">Design e <span>desenvolvimento</span></h1>
				<h2 className="body-1 mt-6 text-center md:text-left">Designers e desenvolvedores trabalhando juntos para entregar <span>inovação, tecnologia e novas experiências.</span></h2>

				<div className="mt-11 md:mt-40">
					<ButtonWhatsApp />
				</div>
			</div>
		</section>
	);
};

export default HeroHome;
