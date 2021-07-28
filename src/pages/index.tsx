import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import { NextSeo } from 'next-seo';
import React from 'react';
import Footer from '../shared/components/Footer';
import Header from '../shared/components/Header';
import Layout from '../shared/components/Layout';

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
			<main className="container-custom main">
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
