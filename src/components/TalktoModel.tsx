import React from "react";
import Script from 'next/script';

export default function TalktoModel() {
    return (
        //   <Script
        //         id="talkToModel" type="text/javascript">
        //             {` var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        // (function(){
        // var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        // s1.async=true;
        // s1.src='https://embed.tawk.to/66a87af132dca6db2cb74e2f/1i4120gu6';
        // s1.charset='UTF-8';
        // s1.setAttribute('crossorigin','*');
        // s0.parentNode.insertBefore(s1,s0);
        // })();`}
        //         </Script>



        <>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-T58XEV27X8"
                strategy="afterInteractive"
            />

            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'G-T58XEV27X8');
        `}
            </Script>
        </>
    );
}