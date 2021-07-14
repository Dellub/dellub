import Logo from './Logo';
import LinkMenu from './LinkMenu';
import { useTranslations } from 'next-intl';

const Header = () => {
	const t = useTranslations('components.header');
	return (
		<header className="header container-custom">
			<Logo dark />
			<div className="contents-link">
				<LinkMenu alias="index">
					{t('links.home')}
				</LinkMenu>
				<LinkMenu alias="aboutMe">
					{t('links.about-me')}
				</LinkMenu>
				<LinkMenu alias="cases">
					{t('links.cases')}
				</LinkMenu>
				<LinkMenu alias="contactUs">
					{t('links.contact-us')}
				</LinkMenu>
			</div>
		</header>
	);
};

export default Header;
