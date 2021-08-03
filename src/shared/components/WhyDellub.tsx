/* eslint-disable @next/next/no-img-element */
import WhyDellubItem from './WhyDellubItem';

const WhyDellub = () => {
	return (
		<section className="bg-gray-950 relative" id="about">
			<div className="absolute top-0 right-0 bottom-0 w-2/5 bg-primary md:block hidden" />
			<div className="why-dellub">
				<img src="/images/why-dellub.png" alt="Por que escolher a Dellub" className="my-auto" />
			</div>
			<div className="container-custom min-h-screen-custom py-auto flex flex-col relative z-10">
				<img src="/images/d.png" alt="Logo d" className="home-d" />
				<div className="my-auto flex flex-col items-center md:items-start mb-12 md:mb-0 ">
					<img src="/images/marker.png" alt="Marker Title" className=" hidden md:block" />
					<h1 className="heading heading-1 text-center md:text-left mt-16 md:mt-0">Por que escolher a <span>dellub?</span></h1>

					<div className="flex flex-col mt-14">
						<WhyDellubItem title="Foco no resultado" description="Todo projeto é construído por profissionais <span>especializados e com foco no melhor resultado.</span>" image="focus-result" />
						<WhyDellubItem title="Acompanhamento de perto" description="Todo o suporte que você precisa para <span>o melhor resultado.</span>" image="close-monitoring" />
						<WhyDellubItem title="Descolado de um jeito fácil" description="Designers e desenvolvedores em busca da melhor <span>experiência e entrega final.</span>" image="cool" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyDellub;
