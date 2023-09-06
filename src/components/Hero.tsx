import Image from "next/image";
import HeroBg from "@/assets/lucario-bg.jpg";
import Logo from "@/assets/logo.png";
import Title from "@/assets/title.png";

export default function Hero() {
  return (
    <>
      <main className="h-screen w-full">
        <div className="container mx-auto">
          <section className="h-full grid grid-cols-2">
            <div className=" pt-4 ">
              <header className="w-full h-[10vh] flex items-center gap-4">
                <div className="w-max h-max relative  flex justify-center items-center">
                  <Image
                    src={Logo}
                    alt="logo"
                    height={150}
                    width={150}
                    className="h-24 w-auto absolute -z-10 cursor-pointer brightness-90 animate-spin-slow "
                  />
                  <Image
                    src={Title}
                    alt="logo"
                    height={150}
                    width={150}
                    className="h-16 w-auto cursor-pointer  brightness-90s "
                  />
                </div>

                {/* <h1 className="font-semibold font-serif text-[#FCC905] drop-shadow-xl text-3xl">
                Pokemon
              </h1> */}
              </header>

              <article className="h-[87vh] flex flex-col justify-center gap-y-8">
                <h1 className="text-5xl font-bold  text-gray-300">
                  Discover the world that is full of mystery
                </h1>
                <p className="text-gray-500">
                  There are a lot of species that are not discovered yet. In the
                  world, there is a creature exist called
                  <i> &apos;Pokemon&apos;</i>. Some people make this creature a
                  pet or bestfriend, they bring them wherever they go. If you
                  want to have this bestfriend catch `em !!!.
                </p>
                <button className="justify-self-start font-semibold bg-[#D6191B] w-max px-10 py-2 relative duration-150 hover:before:absolute hover:before:h-full hover:before:w-full hover:before:-bottom-2 hover:before:-right-2 hover:before:border-4 hover:before:border-[#146BAA] hover:before:-z-10">
                  Discover
                </button>
              </article>
            </div>
            <figure className="relative flex">
              <span className=" bg-gradient-to-l from-black/20 via-black/50 to-black w-28  left-0 z-10"></span>
              <span className=" z-10  w-full bg-black/20"></span>
              <Image
                src={HeroBg}
                alt="Lucario"
                className="absolute h-full object-cover "
              />
            </figure>
          </section>
        </div>
      </main>
    </>
  );
}
