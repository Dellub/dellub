/* eslint-disable @next/next/no-img-element */
import Logo from './Logo';
import { useTranslations } from 'next-intl';

const Footer = () => {
	const t = useTranslations('components.footer');
	return (
		<footer className="footer">
			<div className="container-custom footer-content">
				<div className="infos">
					<div className="info heading-5">
						<Logo />
						<p>Transforme vidas, criando experiências e oportunidades inesqueciveis.</p>
					</div>
					<div className="info heading-5">
						<span>Localização</span>
						<p>Av. Brg. Faria Lima , 1422 São Paulo - SP</p>
					</div>
					<div className="info heading-5">
						<span>Fale conosco</span>
						<p>(22) 4442-0126</p>
						<p>contato@dellub.com</p>
					</div>
					<div className="info heading-5">
						<span>Políticas</span>
						<p>Direitos autorais</p>
						<p>Termos de uso</p>
						<p>Políticas de Privacidade</p>
					</div>
				</div>
				<div className="copyright-social">
					<div className="copyright">
						<img src="/images/icons/copyright-fill.png" alt="Copyright icon" />
						<span>Copyright 2021. Desenvolvido com<span>💙</span>por dellub</span>
					</div>
					<div className="social">
						<img src="/images/icons/facebook-fill.png" alt="Facebook icon" />
						<img src="/images/icons/twitter-fill.png" alt="Twitter icon" />
						<img src="/images/icons/instagram-fill.png" alt="Instagram icon" />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
