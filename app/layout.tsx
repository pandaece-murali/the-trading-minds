import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Trading Minds",
  description: "The Trading Minds",
  icons: {
    icon: "/image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1580717236372313');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1580717236372313&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
        <Script id="wati-options" strategy="lazyOnload">
          {`
            window.watiWidgetOptions = {
              "enabled": true,
              "chatButtonSetting": {
                "backgroundColor": "#00cbe6",
                "ctaText": "Chat With Us",
                "borderRadius": "25",
                "marginLeft": "0",
                "marginRight": "20",
                "marginBottom": "20",
                "ctaIconWATI": true,
                "position": "right"
              },
              "brandSetting": {
                "brandName": "The Trading minds",
                "brandSubTitle": "",
                "brandImg": "https://www.thetradingminds.com/",
                "welcomeText": "Hi there!\\nHow can I help you?",
                "messageText": "courses",
                "backgroundColor": "#00cbe6",
                "ctaText": "Chat With Us",
                "borderRadius": "25",
                "autoShow": false,
                "phoneNumber": "918951456331"
              }
            };
          `}
        </Script>
        {/* <Script
          src="https://widget.wati.io/webchat.js?t=10222829&s=manual&d=d9f9ef6f-4e7f-4cb8-b18c-f494bf395a8b"
          strategy="lazyOnload"
        /> */}
        <Script
          src="https://astra.wati.io/widget/astra.js"
          id="255ac4ba-5246-4790-a672-1dc0409d35f4"
          data-mode="widget"
          data-from="instruction"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
