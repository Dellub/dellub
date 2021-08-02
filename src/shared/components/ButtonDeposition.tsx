import { ArrowForward, Stars } from '@material-ui/icons';
import Link from 'next/link';

const ButtonDeposition = () => {
	return (
		<Link href="https://forms.gle/dsXqKLMctZbxLz3b9" passHref>
			<a target="_blank" className="btn btn-sm btn-primary">
				<Stars className="mr-1" /> Avalie nossa empresa
			</a>
		</Link>
	);
};

export default ButtonDeposition;
