import Logo from './Logo';
import LinkMenu from './LinkMenu';
import { useTranslations } from 'next-intl';
import Button from './Button';
import { ArrowForward, WhatsApp } from '@material-ui/icons';
import ButtonWhatsApp from './ButtonWhatsApp';

const Header = () => {
	const t = useTranslations('components.header');
	return (
		<header className="header">
			<div className="container-custom header-content">
				<LinkMenu id="home">
					<Logo />
				</LinkMenu>
				<div className="contents-link">
					<LinkMenu id="about">
						{t('links.about')}
					</LinkMenu>
					<LinkMenu id="clients">
						{t('links.clients')}
					</LinkMenu>
					<LinkMenu id="services">
						{t('links.services')}
					</LinkMenu>
					<LinkMenu id="process">
						{t('links.process')}
					</LinkMenu>
					<LinkMenu id="depositions">
						{t('links.depositions')}
					</LinkMenu>
					{/* <LinkMenu id="projects">
						{t('links.projects')}
					</LinkMenu> */}
				</div>
				<div className="content-button">
					<ButtonWhatsApp />
				</div>
			</div>
		</header>
	);
};

export default Header;
