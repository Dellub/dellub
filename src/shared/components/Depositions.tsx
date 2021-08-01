/* eslint-disable @next/next/no-img-element */
import Button from './Button';
import { ArrowForward, ArrowBack } from '@material-ui/icons';
import Slider from 'react-slick';

const depositions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Depositions = () => {
	const CustomArrow = ({ onClick }) => {
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
		prevArrow: <CustomArrow />,
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
					// centerMode: true,
					centerPadding: "60px",
					useTransform: false,
				}
			}
		]
	};

	return (
		<section className="bg-gray-950 relative" id="depositions">
			<div className="container-custom min-h-screen-custom py-auto flex flex-col relative">
				<img src="/images/d.png" alt="Logo d" className="home-d" />
				<div className="my-auto flex flex-col items-center md:items-start">
					<img src="/images/marker.png" alt="Marker Title" className=" hidden md:block" />
					<h1 className="heading heading-1 text-center md:text-left mt-16 md:mt-0">Eles começaram pequenos <span>e hoje são gigantes!</span></h1>
					<h2 className="body-1 mt-6 text-center md:text-left">Histórias reais, de clientes como você que usam e <span>recomendam a dellub.</span></h2>

					<div className="min-w-full w-full block lg:hidden mt-14">
						<Slider {...settings}>
							{depositions?.map((value) => (
								<div className="deposition" key={value}>
									<div>
										<img src="/images/quote.png" alt="Quote" className="deposition-quote" />
										<p className="text-sm text-gray-900 text-justify">“Lorem ipsum dolor sit amet, consectetur dolor sit ametadipiscing elit, Lorem ipsum dolor sit sit amet, consectetur sit sit dolor sit ametadipiscing “</p>
									</div>
									<div className="flex items-center">
										<img className="deposition-image" src="https://mir-s3-cdn-cf.behance.net/user/276/aae6bf531378077.5e969ebbb821c.png" alt="Amanda Merien" />
										<div className="flex flex-col">
											<span className="font-bold text-base">Amanda Merien</span>
											<span className="text-sm text-gray-900">Dellub</span>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
					<div className="mt-16 mb-20 md:mb-0 md:mt-40">
						<Button size='sm'>
							Avalie nossa empresa <ArrowForward className="ml-5" />
						</Button>
					</div>
				</div>
			</div>
			<div className="hidden lg:block absolute mt-10 md:mt-0 bottom-0 top-0 right-0 min-h-full h-full w-5/12 lg-b:w-7/12 z-10">
				<div className="block h-full depositions">
					<Slider {...settings}>
						{depositions?.map((value) => (
							<div className="deposition" key={value}>
								<div>
									<img src="/images/quote.png" alt="Quote" className="deposition-quote" />
									<p className="text-sm text-gray-900 text-justify">“Lorem ipsum dolor sit amet, consectetur dolor sit ametadipiscing elit, Lorem ipsum dolor sit sit amet, consectetur sit sit dolor sit ametadipiscing “</p>
								</div>
								<div className="flex items-center">
									<img className="deposition-image" src="https://mir-s3-cdn-cf.behance.net/user/276/aae6bf531378077.5e969ebbb821c.png" alt="Amanda Merien" />
									<div className="flex flex-col">
										<span className="font-bold text-base">Amanda Merien</span>
										<span className="text-sm text-gray-900">Dellub</span>
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
