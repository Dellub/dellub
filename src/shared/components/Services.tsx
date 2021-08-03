/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import ButtonWhatsApp from './ButtonWhatsApp';

const Services = () => {
	const [isActive, setIsActive] = useState(1);
	
	return (
		<section className="bg-gray-950 relative" id="services">
			<div className="services-image">
				<img src="/images/services.png" alt="O que entregamos?" className="my-auto" />
			</div>
			<div className="container-custom min-h-screen-custom py-auto flex flex-col relative">
				<div className="my-auto flex flex-col items-center md:items-start">
					<img src="/images/marker.png" alt="Marker Title" className=" hidden md:block" />
					<h1 className="heading heading-1 text-center md:text-left mt-16 md:mt-0">O que entregamos?</h1>

					<div className="flex flex-col mt-14">
						<div
							className={`why-dellub-item pl-0 py-0 pb-10 md:pl-8 md:py-4 border-0 md:border-l-4 cursor-pointer ${isActive === 1 ? 'border-primary' : 'border-gray-200'}`}
							onClick={() => setIsActive(1)}
						>
							<img src={`/images/dream${isActive === 1 ? '-active' : ''}.png`} alt="Realizamos sonhos" className="services-item-image" />
							<div className="text-center md:text-left">
								<span className={`heading heading-4 why-dellub-title ${isActive === 1 ? 'text-white' : 'text-gray-600'}`}>Realizamos sonhos</span>
								<p className={`body body-2 ${isActive === 1 ? 'text-white' : 'text-gray-600'}`} dangerouslySetInnerHTML={{
									__html: 'Sites, landing pages, e-commerce, dashboards e <span>outros</span>',
								}}/>
							</div>
						</div>
						<div
							className={`why-dellub-item pl-0 py-0 pb-10 md:pl-8 md:py-4 border-0 md:border-l-4 cursor-pointer ${isActive === 2 ? 'border-primary' : 'border-gray-200'}`}
							onClick={() => setIsActive(2)}
						>
							<img src={`/images/project${isActive === 2 ? '-active' : ''}.png`} alt="Entregamos um projeto funcional" className="services-item-image" />
							<div className="text-center md:text-left">
								<span className={`heading heading-4 why-dellub-title ${isActive === 2 ? 'text-white' : 'text-gray-600'}`}>Entregamos um projeto funcional</span>
								<p className={`body body-2 ${isActive === 2 ? 'text-white' : 'text-gray-600'}`} dangerouslySetInnerHTML={{
									__html: 'Que conecta a identidade da sua marca à identidade <span>dos seus clientes.</span>',
								}}/>
							</div>
						</div>
						<div
							className={`why-dellub-item pl-0 py-0 pb-10 md:pl-8 md:py-4 border-0 md:border-l-4 cursor-pointer ${isActive === 3 ? 'border-primary' : 'border-gray-200'}`}
							onClick={() => setIsActive(3)}
						>
							<img src={`/images/interface${isActive === 3 ? '-active' : ''}.png`} alt="Interfaces que geram valores" className="services-item-image" />
							<div className="text-center md:text-left">
								<span className={`heading heading-4 why-dellub-title ${isActive === 3 ? 'text-white' : 'text-gray-600'}`}>Interfaces que geram valores</span>
								<p className={`body body-2 ${isActive === 3 ? 'text-white' : 'text-gray-600'}`} dangerouslySetInnerHTML={{
									__html: 'Pensando em cada detalhe de usabilidade.',
								}}/>
							</div>
						</div>
					</div>

					<div className="mt-11 mb-20 md:mt-20 md:mb-0">
						<ButtonWhatsApp />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
