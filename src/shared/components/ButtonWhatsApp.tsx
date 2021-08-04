import { WhatsApp } from '@material-ui/icons';
import Link from 'next/link';

const ButtonWhatsApp = () => {
	return (
		<Link href="https://api.whatsapp.com/send?phone=5511910584548&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento!" passHref>
			<a target="_blank" className="btn btn-sm btn-primary">
				<WhatsApp className="mr-1" /> <span>Entrar em contato</span>
			</a>
		</Link>
	);
};

export default ButtonWhatsApp;
