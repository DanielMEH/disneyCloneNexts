import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function ComponentHeader() {
  return (
    <div>
      <header
        className="header h-[90vh]  flex flex-col   justify-between"
        style={{
          backgroundImage: `url("/images/original.png")`,
        }}
      >
        <div className="self1  flex justify-between items-center">
          <div className="header__logo mx-4 text-[#1ce783] text-2xl font-bold  ">
            hulu
          </div>
          <div className="m-4 block header__nav">
            <Link href="/Login" className=" text-white font-bold">
              LOG IN
            </Link>
          </div>
        </div>
        <div className="__hero-hader  flex flex-col justify-center items-center w-full h-full">
          <h2 className="text-[#1ce783] font-bold text-xl ">
            DISNEY SUNDLE DUO BASIC
          </h2>
          <div className=" mt-4 img_component flex flex-col">
            <Image
              src="/images/logo1.png"
              width={500}
              alt="Picture of the author"
              height={500}
              priority
            />
            <p className="descript text-white  font-bold text-center my-4">
              Get Hulu & Disney+ & ESPN+ for $13.99/month.
            </p>
            <div className="lin flex flex-col">
              <Link
                href="/mas"
                className="w-full bg-[#1ce783] text-center p-2 rounded-md"
              >
                GET THEME BOT
              </Link>
              <Link
                href="/mas"
                className="text-center text-white underline my-2"
              >
                thems apply
              </Link>
              <Link
                href="/mas"
                className="text-center text-white underline my-2"
              >
                Sign up for hulu only
              </Link>
            </div>
          </div>
        </div>
        <div className="fint_component_header flex justify-between items-center bg-black/30">
          <div className="img mx-4 py-8 flex items-center">
            <Image
              alt="Picture of the author"
              src="/images/logo1.png"
              width={500}
              height={500}
              priority
            />
            <div className="description">
              <h3 className="text-[#1ce783] font-bold  my-1 mx-10">
                DISNEY SUNDLE TRIO BASIC
              </h3>
              <p className="mx-10 my-1 font-bold text-white">
                Get Hulu, Disney, and ESPN+ all width ads, for $12,99/mo
              </p>
            </div>
          </div>
          <div className="ge flex-col flex items-center">
            <Link
              href="/mas"
              className="text-white underline my-2 px-2  py-3 rounded-sm mx-6 decoration-transparent bg-[#1ce783]"
            >
              GET ALL THREE
            </Link>
            <Link href="/hola" className=" underline text-white">
              Terms apply
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
