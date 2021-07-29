import Logo from './Logo';
import LinkMenu from './LinkMenu';
import { useTranslations } from 'next-intl';
import Button from './Button';

const Header = () => {
	const t = useTranslations('components.header');
	return (
		<header className="header">
			<div className="container-custom header-content">
				<Logo />
				<div className="contents-link">
					<LinkMenu id="about">
						{t('links.about')}
					</LinkMenu>
					{/* <LinkMenu id="clients">
						{t('links.clients')}
					</LinkMenu> */}
					<LinkMenu id="services">
						{t('links.services')}
					</LinkMenu>
					<LinkMenu id="process">
						{t('links.process')}
					</LinkMenu>
					<LinkMenu id="projects">
						{t('links.projects')}
					</LinkMenu>
					<LinkMenu id="depositions">
						{t('links.depositions')}
					</LinkMenu>
				</div>
				<div className="content-button">
					<Button size='sm'>
						{t('button-budget')}
					</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
