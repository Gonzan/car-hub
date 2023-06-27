'use client'
import Image from "next/image";
import { CustomButton } from "@/components";

const Hero = () => (
  <section className="hero">
    <div className="flex-1 pt-36 padding-x">
      <h1>Find the best car for you</h1>
      <p className="hero__title">
        Enjoy our rental experiencie without effort.
      </p>
      <CustomButton
        title="Explore Cars"
        styles="bg-primary-blue text-white rounded-full mt-10"
        handleClick={()=>{}}
      />
    </div>
    <div className="hero__image-container">
      <div className="hero__image">
        <Image
          className="object-contain"
          src="/hero.png"
          alt="hero"
          fill
        />
      </div>  
      <div className="hero__image-overlay" />
    </div>
  </section>
)

export default Hero
