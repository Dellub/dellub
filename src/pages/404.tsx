import { GetStaticProps } from "next";
import React from "react";
import Lottie from 'react-lottie';
import Link from 'next/link';
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { NextSeo } from "next-seo";

import LottieFile from '../shared/lotties/404.json';

const Custom404 = () => {
	const t = useTranslations('pages.404');
	const router = useRouter();

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
					url: 'https://www.url.ie/a',
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
				<Link href="/" as="/" locale={router?.locale} passHref>
					<a href="#" className="underline">{t('link')}</a>
				</Link>
			</section>
		</>
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

export default Custom404;