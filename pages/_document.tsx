// eslint-disable-next-line @next/next/no-document-import-in-page
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

type Props = {};

class Document extends NextDocument<Props> {
    render() {
        return (
            <Html
                lang="en"
                className="bg-bg w-full max-w-full overflow-x-hidden overscroll-x-none "
            >
                <Head>
                    {/* Create all your favicons and put them inside public/favicons folder */}

                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/favicons/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicons/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicons/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/favicons/site.webmanifest" />
                    <link
                        rel="mask-icon"
                        href="/favicons/safari-pinned-tab.svg"
                        color="#ff6a00"
                    />
                    <link rel="shortcut icon" href="/favicons/favicon.ico" />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta
                        name="msapplication-config"
                        content="/favicons/browserconfig.xml"
                    />
                    <meta name="theme-color" content="#ffffff" />
                    <meta name="google-site-verification" content="eWEm-Wgvt6Bc1WMK6ukZ36wOf9ZOj-_Q7Ni-bHApTlg" />
                </Head>
                <body className="">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Document;
