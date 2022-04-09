import { NextSeo } from "next-seo";
import React from "react";

const Seo = () => {
  return (
    <>
      <NextSeo
        title="Muhammad Bilal"
        description="Muhammad Bilal is a Software Engineer ,who likes building stuff related to web."
        openGraph={{
          url: "https://bilalafzaal.vercel.app/",
          title: "Muhammad Bilal",
          description:
            "Muhammad Bilal is a Software Engineer ,who likes building stuff related to web.",
          keywords:
            "Muhammad Bilal, Software Engineer, Web Developer software engineer pakistan, frontend software engineer, software engineer pakistan, javascript developer, javascript engineer react developer, react developer portfolio",
          images: [
            {
              url: "https://firebasestorage.googleapis.com/v0/b/vcard-b7a06.appspot.com/o/Screenshot%202022-04-09%20213143.png?alt=media&token=dc0b9747-6827-46b7-91a9-96d3f8767387",
              width: 800,
              height: 600,
              alt: "main image",
              type: "image/jpeg",
            },
          ],
          site_name: "bilalafzaal.vercel.app",
        }}
      />
    </>
  );
};

export default Seo;
