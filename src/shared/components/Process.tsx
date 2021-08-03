/* eslint-disable @next/next/no-img-element */
import Slider from 'react-slick';
import { ArrowForwardIos } from '@material-ui/icons';

const Process = () => {
	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	return (
		<section className="relative" id="process">
			<div className="container-custom py-auto min-h-screen-custom flex flex-col relative">
				<img src="/images/d.png" alt="Logo d" className="home-d" />
				<div className="flex flex-col items-center md:items-start mb-24 md:mb-auto my-auto">
					<img src="/images/marker.png" alt="Marker Title" className=" hidden md:block" />
					<h1 className="heading heading-1 text-center md:text-left mt-16 md:mt-0">Nosso processo</h1>

					<div className="hidden md:grid grid-cols-2 lg:grid-cols-4 mt-14">
						<div className="p-10 border border-white relative">
							<span className="heading-1 number">01</span>
							<span className="heading-4 block">Play</span>
							<p className="body-4 mt-4">Troca de e-mails, reuniões e fechamos um briefing com as informações para realizar todo projeto.</p>
							<div className="process-dot-custom">
								<div>
									<ArrowForwardIos />
								</div>
							</div>
						</div>
						<div className="p-10 border border-white relative">
							<span className="heading-1 number">02</span>
							<span className="heading-4 block">Design</span>
							<p className="body-4 mt-4">Etapas: Wireframe, onde é feito o desenho de baixa fidelidade para validação da estrutura das páginas. Se aprovado, é iniciado um protótipo em alta fidelidade!</p>
							<div className="process-dot-custom">
								<div>
									<ArrowForwardIos />
								</div>
							</div>
						</div>
						<div className="p-10 border border-white relative">
							<span className="heading-1 number">03</span>
							<span className="heading-4 block">Code</span>
							<p className="body-4 mt-4">Através das tecnologias damos vida ao design.</p>
							<div className="process-dot-custom">
								<div>
									<ArrowForwardIos />
								</div>
							</div>
						</div>
						<div className="p-10 border border-white relative">
							<span className="heading-1 number">04</span>
							<span className="heading-4 block">Delivery</span>
							<p className="body-4 mt-4"><span>Prontinho!!</span> Projeto entregue com grande qualidade, claro, a tecnologia muda, então estaremos sempre juntos nessa jornada.</p>
						</div>
					</div>
					<div className="block md:hidden w-full mt-14 process">
						<Slider {...settings}>
							<div className="p-3.5 border border-white min-h-full">
								<span className="heading-1 number">01</span>
								<span className="heading-4 block">Play</span>
								<p className="body-4 mt-4">Troca de e-mails, reuniões e fechamos um briefing com as informações para realizar todo projeto.</p>
							</div>
							<div className="p-3.5 border border-white min-h-full">
								<span className="heading-1 number">02</span>
								<span className="heading-4 block">Design</span>
								<p className="body-4 mt-4">Etapas: Wireframe, onde é feito o desenho de baixa fidelidade para validação da estrutura das páginas. Se aprovado, é iniciado um protótipo em alta fidelidade!</p>
							</div>
							<div className="p-3.5 border border-white min-h-full">
								<span className="heading-1 number">03</span>
								<span className="heading-4 block">Code</span>
								<p className="body-4 mt-4">Através das tecnologias damos vida ao design.</p>
							</div>
							<div className="p-3.5 border border-white min-h-full">
								<span className="heading-1 number">04</span>
								<span className="heading-4 block">Delivery</span>
								<p className="body-4 mt-4"><span>Prontinho!!</span> Projeto entregue com grande qualidade, claro, a tecnologia muda, então estaremos sempre juntos nessa jornada.</p>
							</div>
						</Slider>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Process;
