import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import { NextSeo } from 'next-seo';
import { useTheme } from 'next-themes';
import React from 'react';
import Lottie from 'react-lottie';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';

import LottieFile from '../lotties/maintenance.json';

const Home = () => {
	const t = useTranslations('pages.maintenance');
	const { theme, setTheme } = useTheme();

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: LottieFile,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	};

	const metas: IDocumentMetas = {
    title: String(t('seo.title')),
    description: String(t('seo.description')),
  };

  return (
			<Layout>
				<NextSeo
					{...metas}
					openGraph={{
						...metas,
					}}
				/>
				<Header />
				<main className="container-custom">
					test
				</main>
				<Footer />
			</Layout>
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

export default Home;
