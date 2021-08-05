import '../shared/styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import NextNprogress from 'nextjs-progressbar';
import { ThemeProvider } from 'next-themes';
import { NextIntlProvider } from 'next-intl';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';

const utilitySuccess = '#4B74EB';

const url = 'https://dellub.com';
const site_name = 'Dellub';

const FacebookPixel = () => {
	const router = useRouter();

	useEffect(() => {
		import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('343710987237230', undefined, {
					autoConfig: true,
					debug: true,
				}); // facebookPixelId
        ReactPixel.pageView();

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView();
        });
      });
	}, [router.events]);

	return null;
}

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
				additionalMetaTags={[{
					name: 'facebook-domain-verification',
					content: 'oupr652bqwmqfbnxrut8u8vk5gzjxa',
				}]}
				titleTemplate="%s | Dellub Software and Design"
				canonical={`https://www.dellub.com/${locale}${asPath}`}
				openGraph={{
					type: 'website',
					locale,
					url,
					site_name,
					images: [
						{
							url: `${url}/images/og-image.png`,
							width: 1200,
							height: 630,
							alt: 'Og Image Alt',
						},
					],
				}}
				facebook={{
					appId: '1234567890',
				}}
				twitter={{
					handle: '@dellub.br',
					site: '@dellub.br',
					cardType: 'summary_large_image',
				}}
			/>
			<FacebookPixel />
			<ThemeProvider attribute="class">
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
			</ThemeProvider>
		</>
	)
}

export default App
