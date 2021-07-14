/* eslint-disable @next/next/no-img-element */
type LogoProps = {
	dark?: boolean;
}

const Logo = ({ dark }: LogoProps) => {
	if (dark) {
		return <img src="/images/logo-dark.png" width={86} height={23} alt="Logo dark" />;
	}
	return <img src="/images/logo.png" width={86} height={23} alt="Logo" />;
};

Logo.initialProps = {
	dark: false,
}

export default Logo;
