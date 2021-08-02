/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import { NextSeo } from 'next-seo';
import React from 'react';
import Footer from '../shared/components/Footer';
import Header from '../shared/components/Header';
import Layout from '../shared/components/Layout';
import HeroHome from '../shared/components/HeroHome';
import WhyDellub from '../shared/components/WhyDellub';
import Services from '../shared/components/Services';
import Process from '../shared/components/Process';
import Depositions from '../shared/components/Depositions';
import Clients from '../shared/components/Clients';
// import Projects from '../shared/components/Projects';

const Home = () => {
	const t = useTranslations('pages.home');

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
			<main className="main">
				<HeroHome />
				<WhyDellub />
				<Clients />
				<Services />
				<Process />
				<Depositions />
				{/* <Projects /> */}
			</main>
			<Footer />
		</Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: {
        ...require(`../../locales/${locale}.json`),
      },
    }
  }
};

export default Home;
