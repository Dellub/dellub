import { GetStaticProps } from "next";
import Button from '../components/Button';
import Icon from '../components/Icon';
import { AccessAlarm } from '@material-ui/icons';
import Marker from '../components/Marker';
import Heading from '../components/Heading';
import Display from '../components/Display';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import Header from '../components/Header';

const Test = () => {
	return (
		// <div className="w-screen h-screen flex flex-col items-center justify-center text-black dark:text-white text-center">
			<Layout>
				<Header />
				<main className="container-custom">
					<Logo />
					<Logo dark />
					<Button type="secondary" disabled>Primary</Button>
					<Icon><AccessAlarm /></Icon>
					<Marker />
					<Display text="<span>Display</span><span>Display</span>" />
					<Heading text="Heading 1" />
				</main>
			</Layout>
		// </div>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: {
        ...require(`../locales/${locale}.json`),
      },
    }
  }
};

export default Test;
