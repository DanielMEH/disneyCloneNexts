import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Main() {
  return (
    <>
      <main>
        <div className="hero_main">
          <div className="principal my-16">
            <h3 className="text-[#00e87f] text-center my-4">
              INCLUDE IN ALL PLANS
            </h3>
            <h2 className="text-center text-5xl font-bold">
              All The Tv You Love
            </h2>
            <p className="text-center  block mx-auto my-4 font-bold w-[40rem]">
              watch seasons og exclusively streaming series, current-season kids
              shows, and more. con contenido expecial{" "}
            </p>
          </div>

          <div className="imagesGalleryApi bg-[#0b0c0f] flex justify-center flex-wrap gap-12">
            <div className="imagesGalleryApi__img relative ">
              <Image
                alt="image"
                src="/images/image1.jfif"
                width={300}
                height={300}
                priority
                className="rounded-xl opacity-70"
              />
              <div className="cardprincipal absolute top-4 mx-2">
                <h3 className="text-xl font-bold">Past & Current Sapasons</h3>
                <h2 className="text-3xl font-bold">TV Shows</h2>
              </div>
            </div>
            <div className="imagesGalleryApi__img relative ">
              <Image
                alt="image"
                src="/images/image2.jfif"
                width={300}
                height={300}
                priority
                className="rounded-xl opacity-70"
              />
              <div className="cardprincipal absolute top-4 mx-2">
                <h3 className="text-xl font-bold">Past & Current Sapasons</h3>
                <h2 className="text-3xl font-bold">TV Shows</h2>
              </div>
            </div>
            <div className="imagesGalleryApi__img relative ">
              <Image
                alt="image"
                src="/images/imagen3.jfif"
                width={300}
                height={300}
                priority
                className="rounded-xl opacity-70"
              />
              <div className="cardprincipal absolute top-4 mx-2">
                <h3 className="text-xl font-bold">Past & Current Sapasons</h3>
                <h2 className="text-3xl font-bold">TV Shows</h2>
              </div>
            </div>
            <div className="imagesGalleryApi__img relative ">
              <Image
                alt="image"
                src="/images/imagen4.jfif"
                width={300}
                height={300}
                priority
                className="rounded-xl opacity-70"
              />
              <div className="cardprincipal absolute top-4 mx-2">
                <h3 className="text-xl font-bold">Past & Current Sapasons</h3>
                <h2 className="text-3xl font-bold">TV Shows</h2>
              </div>
            </div>
          </div>
          <div className="lis-compon_2 mt-[10rem]">
            <h3 className="text-[#00e87f] text-center font-bold block">
              HULU + LIVE TV, NOW WITH DISNEY+ AND ESPN+, ALL WITH ADS
            </h3>
            <h2 className="text-5xl text-center font-bold my-4 mb-10">Live TV Makes It Better</h2>
            <p className="w-3/5 my-5 text-center mx-auto">
              Make the switch from cable. Get 85+ top channels on Hulu (With
              Ads) + Live TV with your favorite live sports, news, and events -
              plus the entire Hulu streaming library. With Unlimited DVR, store
              Live TV recordings for up to nine months and fast-forward through
              your DVR content. Access endless entertainment with Disney+ and
              live sports with ESPN+.{" "}
            </p>
            <p className="w-3/5 mx-auto text-center">
              Regional restrictions, blackouts and Live TV terms apply. Access
              content from each service separately. Location data required to
              watch certain content. Unlimited DVR recording is not available
              for on-demand shows.
            </p>
            <Link href="/viws" className="underline text-center block my-6">VIEW CHANNELS IN YOUR AREA →</Link>
          </div>
        </div>
      </main>
    </>
  );
}
