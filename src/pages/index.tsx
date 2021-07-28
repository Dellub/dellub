/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import { NextSeo } from 'next-seo';
import React from 'react';
import Button from '../shared/components/Button';
import Footer from '../shared/components/Footer';
import Header from '../shared/components/Header';
import Layout from '../shared/components/Layout';
import { ArrowForward } from '@material-ui/icons';

const Home = () => {
	const t = useTranslations('pages.maintenance');

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
				<section className="container-custom min-h-screen-custom py-auto flex flex-col relative">
					<img src="/images/d.png" alt="Logo d" className="home-d" />
					<img src="/images/home-hero-desktop.png" alt="Hero Home" className="home-hero" />
					<div className="my-auto flex flex-col items-center md:items-start">
						<div className="-mx-4 block md:hidden mb-8">
							<img src="/images/home-hero-mobile.png" alt="Hero Home" className="w-screen" />
						</div>
						<img src="/images/marker.png" alt="Marker Title" className=" hidden md:block" />
						<h1 className="display text-center md:text-left">Design e <span>desenvolvimento</span></h1>
						<h2 className="body-1 mt-6 text-center md:text-left">Designers e desenvolvedores trabalhando juntos para entregar <span>inovação, tecnologia e novas experiências.</span></h2>

						<div className="mt-11 md:mt-40">
							<Button size='sm'>
								Entrar em contato <ArrowForward className="ml-5" />
							</Button>
						</div>
					</div>
				</section>
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
