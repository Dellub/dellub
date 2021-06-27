import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import { NextSeo } from 'next-seo';
import { useTheme } from 'next-themes';
import React from 'react';
import Lottie from 'react-lottie';

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
		<>
			<NextSeo
				{...metas}
				openGraph={{
					...metas,
				}}
			/>
			<section className="w-screen h-screen flex flex-col items-center justify-center text-black dark:text-white text-center">
				<p>{t('title')}</p>
				<p>{t('description')}</p>
				<Lottie
					options={defaultOptions}
					height={320}
					width={320}
				/>
				<a href="mailto:contato@dellub.com" className="underline">contato@dellub.com</a>
			</section>
		</>
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
