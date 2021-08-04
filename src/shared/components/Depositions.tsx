/* eslint-disable @next/next/no-img-element */
import { ArrowBack } from '@material-ui/icons';
import Slider from 'react-slick';
import ButtonDeposition from './ButtonDeposition';

const depositions = [
	{
		name: 'Matheus Santos',
		company: 'Grupo Flix',
		body: 'Tive uma grande experiência ao adquirir meu site com a dellub, consigo levar minha marca para todo território e alcançar mais pessoas',
		photoUrl: ''
	},
	{
		name: 'Luana Teodoro',
		company: 'Arquitetura',
		body: 'Graças a dellub realizei meu sonho de ter um portfólio profissional para arquitetura, consegui mais clientes e hoje com toda certeza posso indicar',
		photoUrl: ''
	},
	{
		name: 'Fabio Melhado',
		company: 'FabyFer',
		body: 'Iniciei atualmente o site de grande sucesso com a equipe dellub, ainda não está pronto o desenvolvimento, mas através do layout consigo dizer o quanto estou feliz com o resultado',
		photoUrl: ''
	},
	{
		name: 'Pablo Oliver',
		company: 'Advocacia Três Irmãos',
		body: 'Hoje posso dizer que temos um grande site para apresentar nossos trabalhos de advocacia, preço incrível, que cabe no bolso e grandes resultados',
		photoUrl: ''
	},
];

const Depositions = () => {
	const CustomArrow = ({ onClick }: { onClick?: any }): JSX.Element => {
		return (
			<button className="arrow-custom" onClick={onClick}>
				<ArrowBack />
			</button>
		);
	}
	const settings = {
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: <CustomArrow onClick={true} />,
		responsive: [
			{
				breakpoint: 1420,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 1220,
				settings: {
					slidesToShow: 1,
					arrows: false,
					className: "center",
					centerMode: true,
					centerPadding: "10px",
					useTransform: false,
				}
			}
		]
	};

	return (
		<section className="bg-gray-950 relative" id="depositions">
			<div className="container-custom min-h-screen-custom py-auto flex flex-col relative">
				<img src="/images/d.png" alt="Logo d" className="home-d" />
				<div className="my-auto flex flex-col items-center md:items-start z-10">
					<img src="/images/marker.png" alt="Marker Title" className=" hidden md:block" />
					<h1 className="heading heading-1 text-center md:text-left mt-16 md:mt-0">Eles começaram pequenos <span>e hoje são gigantes!</span></h1>
					<h2 className="body-1 mt-6 text-center md:text-left">Histórias reais, de clientes como você que usam e <span>recomendam a dellub.</span></h2>

					<div className="min-w-full block lg:hidden mt-14 depositions-slider w-screen">
						<Slider {...settings}>
							{depositions?.map((value) => (
								<div className="deposition" key={value.company}>
									<div>
										<img src="/images/quote.png" alt="Quote" className="deposition-quote" />
										<p className="text-sm text-gray-900 text-justify">“{value?.body}“</p>
									</div>
									<div className="flex items-center">
										{/* <img className="deposition-image" src={value?.photoUrl} alt={value?.name} /> */}
										<div className="flex flex-col">
											<span className="font-bold text-base text-black">{value?.name}</span>
											<span className="text-sm text-gray-900">{value?.company}</span>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
					<div className="mt-16 mb-20 md:mb-0 md:mt-40">
						<ButtonDeposition />
					</div>
				</div>
			</div>
			<div className="hidden lg:block absolute mt-10 md:mt-0 bottom-0 top-0 right-0 min-h-full h-full w-5/12 lg-b:w-6/12 z-10">
				<div className="block h-full depositions">
					<Slider {...settings}>
						{depositions?.map((value) => (
							<div className="deposition" key={value?.company}>
								<div>
									<img src="/images/quote.png" alt="Quote" className="deposition-quote" />
									<p className="text-sm text-gray-900 text-justify">“{value?.body}“</p>
								</div>
								<div className="flex items-center">
									{/* <img className="deposition-image" src={value?.photoUrl} alt={value?.name} /> */}
									<div className="flex flex-col">
										<span className="font-bold text-base text-black">{value?.name}</span>
										<span className="text-sm text-gray-900">{value?.company}</span>
									</div>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</section>
	);
};

export default Depositions;
