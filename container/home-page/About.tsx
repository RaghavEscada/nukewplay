"use client";
import Image from "next/image";
import { useState } from "react";
import { LinkHover } from "@/animation";
import { footerItems } from "@/constants";
import { Heading, RoundButton } from "@/components";
import { TimelineDemo } from "@/data/data";
import { MacbookScrollDemo } from "@/data/data"; 

export default function About() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="w-full bg-slate-200 padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
      <div className="w-full flex justify-center mb-12">
       
	  <MacbookScrollDemo/>
      </div>

      <div className="pl-[50px] sm:px-[20px] xm:px-[20px]">
        <h2 className="sub-heading font-medium font-NeueMontreal text-secondry">
          We craft data-driven digital strategies to amplify your brand and boost engagement.
          <br className="sm:hidden xm:hidden" />
          Elevate your Social Media Marketing, Digital Presence & Brand Identity to attract leads, drive sales,
          <br className="sm:hidden xm:hidden" />
          and create powerful content.
        </h2>
      </div>

      <div className="w-full border-y border-[#21212155] my-[50px] py-[20px]">
        <div className="padding-x pb-[50px] w-full flex sm:flex-col xm:flex-col gap-[30px] justify-between">
          <div className="w-[50%] sm:w-full xm:w-full">
            <h3 className="sub-paragraph font-medium text-secondry font-NeueMontreal">
              What you can expect from Nuke?
            </h3>
          </div>
          <div className="w-[50%] sm:w-full xm:w-full">
            <div className="w-full flex gap-[30px] h-full items-end sm:items-start sm:flex-col xm:items-start xm:flex-col">
              <div className="w-[40%] sm:w-[60%] xm:w-[60%]">
                <p className="sub-paragraph font-medium font-NeueMontreal text-secondry tracking-wide">
                  We create tailored social media content to help you persuade your
                  colleagues, clients, or investors. Whether it's live or
                  digital, delivered for one or a hundred people.
                </p>
                <p className="sub-paragraph font-medium font-NeueMontreal text-secondry pt-[30px] tracking-wide">
                  We believe the mix of strategy and design (with a bit of
                  coffee) is what makes your idea clear, convincing, and
                  captivating.
                </p>
              </div>
              <div className="w-[60%] flex justify-end flex-col sm:w-full xm:w-full">
                <h1 className="sub-paragraph font-medium font-NeueMontreal text-secondry pb-[20px]">
                  Nuke Marketing Socials:
                </h1>
                <div className="flex flex-col">
                  {footerItems.map((item) => (
                    <LinkHover
                      key={item.id}
                      className="w-fit sub-paragraph font-medium capitalize before:h-[1px] after:h-[1px] before:bottom-[1px] after:bottom-[1px]"
                      title={item.title}
                      href={"/"}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[30px]">
        <div className="w-full flex flex-col gap-[30px]">
          <Heading title="Nuke's Approach:" />
          <div className="w-full bg-slate-800">
            <TimelineDemo />
          </div>
          <div
            className="w-fit flex items-left justify-between bg-secondry cursor-pointer rounded-full group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <RoundButton
              href="/nuke-team"
              title="read more"
              bgcolor="#000"
              className="bg-white text-black"
              style={{ color: "#fff" }}
            />
          </div>
        </div>
      </div>
	  
    </section>
  );
}