import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import NextNprogress from 'nextjs-progressbar';
import { ThemeProvider } from 'next-themes';
import { NextIntlProvider } from 'next-intl';
import { DefaultSeo } from 'next-seo';

const utilitySuccess = '#4B74EB';

const url = 'https://dellub.com';
const site_name = 'Dellub';

const App = ({ Component, pageProps, router: { locale, asPath }, router }: AppProps) => {
	return (
		<>
			<NextNprogress
				color={utilitySuccess}
				startPosition={0.3}
				stopDelayMs={200}
				height={5}
				options={{
					showSpinner: false,
				}}
			/>
			<DefaultSeo
				titleTemplate="%s | Dellub"
				canonical={`https://www.dellub.com/${locale}${asPath}`}
				openGraph={{
					type: 'website',
					locale,
					url,
					site_name,
					images: [
						{
							url: '/images/og-image.jpg',
							width: 1200,
							height: 630,
							alt: 'Og Image Alt',
						},
					],
				}}
				twitter={{
					handle: '@dellub.br',
					site: '@dellub.br',
					cardType: 'summary_large_image',
				}}
			/>
			{/* <ThemeProvider attribute="class"> */}
				<NextIntlProvider
					formats={{
						dateTime: {
							short: {
								day: 'numeric',
								month: 'short',
								year: 'numeric',
							}
						}
					}}
					messages={pageProps.messages}
					now={new Date(pageProps.now)}
					timeZone="America/Sao_Paulo"
				>
					<Component {...pageProps} />
				</NextIntlProvider>
			{/* </ThemeProvider> */}
		</>
	)
}

export default App
