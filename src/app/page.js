import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
     <Hero />
     <HomeMenu />
    <section className="text-center my-16" id="about">
    <SectionHeaders 
    subHeader={'Our story'}
    mainHeader={'About us'} />
    <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4">
    <p> 
    There’s nothing cookie-cutter about Pizza Hut. Not our pizzas. Not our people. And definitely not the way we live life. Around here, we don’t settle for anything less than food we’re proud to serve. And we don’t just clock in. Not when we can also become our best, make friends, 
    and have fun while we’re at it. We’re the pizza company that lives life unboxed. 
    </p>
    <p>
    We’re not for people who want to blend in: pushing boundaries is part of our heritage. We have more than 16,000 restaurants and 350,000 team members in more than 100 countries. Whether it’s the original Stuffed Crust or putting a pizza in outer space, we never stop driving ourselves to deliver hot pizzas,
    fast every time – anywhere you want to enjoy it.
    </p>
    </div>
   </section>
   <section className="text-center my-8" id="contact">
    <SectionHeaders subHeader={'Don\'t hesitate'}
                    mainHeader={'Contact us'} />
    <div className="mt-8">
    <a className="text-4xl underline text-gray-500" href="tel:+84962166326">
      +84 962 166 326
    </a>
    </div>
   </section>
    </>
  );
}
