"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { MotionValue, motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import {
  IconBrightnessDown,
  IconBrightnessUp,
  IconCaretRightFilled,
  IconCaretUpFilled,
  IconChevronUp,
  IconMicrophone,
  IconMoon,
  IconPlayerSkipForward,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
  IconTable,
  IconVolume,
  IconVolume2,
  IconVolume3,
} from "@tabler/icons-react";
import { IconSearch } from "@tabler/icons-react";
import { IconWorld } from "@tabler/icons-react";
import { IconCommand } from "@tabler/icons-react";
import { IconCaretLeftFilled } from "@tabler/icons-react";
import { IconCaretDownFilled } from "@tabler/icons-react";
import Image from "next/image";

export const MacbookScroll = ({
  src,
  showGradient,
  title,
  badge,
}: {
  src?: string;
  showGradient?: boolean;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  // Updated scale values to be 2x larger
  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [2.4, isMobile ? 2 : 3]
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.2, isMobile ? 2 : 3]
  );
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={ref}
      className="flex min-h-[200vh] shrink-0 scale-[0.7] transform flex-col items-center justify-start py-0 [perspective:800px] sm:scale-100 md:scale-200"
    >
      <motion.h2
        style={{
          translateY: textTransform,
          opacity: textOpacity,
        }}
        className="mb-20 text-center text-[37px] font-bold text-neutral-800 dark:text-black"
      >
        {title || (
           <span className="text-[100px] font-bold block">
           NUKE MARKETING
           <span className="text-lg font-normal block">
               We're unbeatable at what we do.
           </span>
       </span>
        )}
      </motion.h2>
      {/* Lid */}
      <Lid
        src={src}
        scaleX={scaleX}
        scaleY={scaleY}
        rotate={rotate}
        translate={translate}
      />
      {/* Base area */}
      <div className="relative -z-10 h-[44rem] w-[64rem] overflow-hidden rounded-2xl bg-gray-200 dark:bg-[#272729]">
        {/* above keyboard bar */}
        <div className="relative h-20 w-full">
          <div className="absolute inset-x-0 mx-auto h-8 w-[80%] bg-[#050505]" />
        </div>
        <div className="relative flex">
          <div className="mx-auto h-full w-[10%] overflow-hidden">
            <SpeakerGrid />
          </div>
          <div className="mx-auto h-full w-[80%]">
            <Keypad />
          </div>
          <div className="mx-auto h-full w-[10%] overflow-hidden">
            <SpeakerGrid />
          </div>
        </div>
        <Trackpad />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-4 w-40 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-[#272729] to-[#050505]" />
        {showGradient && (
          <div className="absolute inset-x-0 bottom-0 z-50 h-80 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black"></div>
        )}
        {badge && <div className="absolute bottom-8 left-8">{badge}</div>}
      </div>
    </div>
  );
};

export const Lid = ({
  scaleX,
  scaleY,
  rotate,
  translate,
  src,
}: {
  scaleX: MotionValue<number>;
  scaleY: MotionValue<number>;
  rotate: MotionValue<number>;
  translate: MotionValue<number>;
  src?: string;
}) => {
  return (
    <div className="relative [perspective:1600px]">
      <div
        style={{
          transform: "perspective(1600px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="relative h-[24rem] w-[64rem] rounded-2xl bg-[#010101] p-4"
      >
        <div
          style={{
            boxShadow: "0px 4px 0px 4px #171717 inset",
          }}
          className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#010101]"
        >
          <span className="text-black">
           
          </span>
        </div>
      </div>
      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="absolute inset-0 h-192 w-[30rem] max-w-[80%] mx-auto rounded-[39px] bg-[#010101]  overflow-hidden">



        <Image
          src="/nuke.png"
          alt="aceternity logo"
          fill
          className="absolute inset-0 h-full w-full rounded-lg object-cover object-left-top"
        />
      </motion.div>
    </div>
  );
};

export const Trackpad = () => {
  return (
    <div
      className="mx-auto my-2 h-64 w-[40%] rounded-xl"
      style={{
        boxShadow: "0px 0px 2px 2px #00000020 inset",
      }}
    ></div>
  );
};

export const Keypad = () => {
  return (
    <div className="mx-2 h-full rounded-md bg-[#050505] p-2">
      {/* First Row */}
      <Row>
        <KBtn
          className="w-20 items-end justify-start pb-[4px] pl-[8px]"
          childrenClassName="items-start"
        >
          esc
        </KBtn>
        <KBtn>
          <IconBrightnessDown className="h-[12px] w-[12px]" />
          <span className="mt-2 inline-block">F1</span>
        </KBtn>

        <KBtn>
          <IconBrightnessUp className="h-[12px] w-[12px]" />
          <span className="mt-2 inline-block">F2</span>
        </KBtn>
        <KBtn>
          <IconTable className="h-[12px] w-[12px]" />
          <span className="mt-2 inline-block">F3</span>
        </KBtn>
        <KBtn>
          <IconSearch className="h-[12px] w-[12px]" />
          <span className="mt-2 inline-block">F4</span>
        </KBtn>
        <KBtn>
          <IconMicrophone className="h-[12px] w-[12px]" />
          <span className="mt-2 inline-block">F5</span>
        </KBtn>
        <KBtn>
          <IconMoon className="h-[12px] w-[12px]" />
          <span className="mt-2 inline-block">F6</span>
        </KBtn>
        <KBtn>
          <IconPlayerTrackPrev className="h-[12px] w-[12px]" />
          <span className="mt-2 inline-block">F7</span>
        </KBtn>
        <KBtn>
          <IconPlayerSkipForward className="h-[12px] w-[12px]" />
          <span className="mt-2 inline-block">F8</span>
        </KBtn>
        <KBtn>
          <IconPlayerTrackNext className="h-[12px] w-[12px]" />
          <span className="mt-2 inline-block">F8</span>
        </KBtn>
        <KBtn>
          <IconVolume3 className="h-[12px] w-[12px]" />
          <span className="mt-2 inline-block">F10</span>
        </KBtn>
        <KBtn>
          <IconVolume2 className="h-[12px] w-[12px]" />
          <span className="mt-2 inline-block">F11</span>
        </KBtn>
        <KBtn>
          <IconVolume className="h-[12px] w-[12px]" />
          <span className="mt-2 inline-block">F12</span>
        </KBtn>
        <KBtn>
          <div className="h-8 w-8 rounded-full bg-gradient-to-b from-neutral-900 from-20% via-black via-50% to-neutral-900 to-95% p-[2px]">
            <div className="h-full w-full rounded-full bg-black" />
          </div>
        </KBtn>
      </Row>

      {/* Second row */}
      <Row>
        <KBtn>
          <span className="block">~</span>
          <span className="mt-2 block">`</span>
        </KBtn>

        <KBtn>
          <span className="block">!</span>
          <span className="block">1</span>
        </KBtn>
        <KBtn>
          <span className="block">@</span>
          <span className="block">2</span>
        </KBtn>
        <KBtn>
          <span className="block">#</span>
          <span className="block">3</span>
        </KBtn>
        <KBtn>
          <span className="block">$</span>
          <span className="block">4</span>
        </KBtn>
        <KBtn>
          <span className="block">%</span>
          <span className="block">5</span>
        </KBtn>
        <KBtn>
          <span className="block">^</span>
          <span className="block">6</span>
        </KBtn>
        <KBtn>
          <span className="block">&</span>
          <span className="block">7</span>
        </KBtn>
        <KBtn>
          <span className="block">*</span>
          <span className="block">8</span>
        </KBtn>
        <KBtn>
          <span className="block">(</span>
          <span className="block">9</span>
        </KBtn>
        <KBtn>
          <span className="block">)</span>
          <span className="block">0</span>
        </KBtn>
        <KBtn>
          <span className="block">&mdash;</span>
          <span className="block">_</span>
        </KBtn>
        <KBtn>
          <span className="block">+</span>
          <span className="block"> = </span>
        </KBtn>
        <KBtn
          className="w-20 items-end justify-end pr-[8px] pb-[4px]"
          childrenClassName="items-end"
        >
          delete
        </KBtn>
      </Row>

      {/* Third row */}
      <Row>
        <KBtn
          className="w-20 items-end justify-start pb-[4px] pl-[8px]"
          childrenClassName="items-start"
        >
          tab
        </KBtn>
        <KBtn>
          <span className="block">Q</span>
        </KBtn>

        <KBtn>
          <span className="block">W</span>
        </KBtn>
        <KBtn>
          <span className="block">E</span>
        </KBtn>
        <KBtn>
          <span className="block">R</span>
        </KBtn>
        <KBtn>
          <span className="block">T</span>
        </KBtn>
        <KBtn>
          <span className="block">Y</span>
        </KBtn>
        <KBtn>
          <span className="block">U</span>
        </KBtn>
        <KBtn>
          <span className="block">I</span>
        </KBtn>
        <KBtn>
          <span className="block">O</span>
        </KBtn>
        <KBtn>
          <span className="block">P</span>
        </KBtn>
        <KBtn>
          <span className="block">{`{`}</span>
          <span className="block">{`[`}</span>
        </KBtn>
        <KBtn>
          <span className="block">{`}`}</span>
          <span className="block">{`]`}</span>
        </KBtn>
        <KBtn>
          <span className="block">{`|`}</span>
          <span className="block">{`\\`}</span>
        </KBtn>
      </Row>

      {/* Fourth Row */}
      <Row>
        <KBtn
          className="w-[5.6rem] items-end justify-start pb-[4px] pl-[8px]"
          childrenClassName="items-start"
        >
          caps lock
        </KBtn>
        <KBtn>
          <span className="block">A</span>
        </KBtn>

        <KBtn>
          <span className="block">S</span>
        </KBtn>
        <KBtn>
          <span className="block">D</span>
        </KBtn>
        <KBtn>
          <span className="block">F</span>
        </KBtn>
        <KBtn>
          <span className="block">G</span>
        </KBtn>
        <KBtn>
          <span className="block">H</span>
        </KBtn>
        <KBtn>
          <span className="block">J</span>
        </KBtn>
        <KBtn>
          <span className="block">K</span>
        </KBtn>
        <KBtn>
          <span className="block">L</span>
        </KBtn>
        <KBtn>
          <span className="block">{`:`}</span>
          <span className="block">{`;`}</span>
        </KBtn>
        <KBtn>
          <span className="block">{`"`}</span>
          <span className="block">{`'`}</span>
        </KBtn>
        <KBtn
          className="w-[5.7rem] items-end justify-end pr-[8px] pb-[4px]"
          childrenClassName="items-end"
        >
          return
        </KBtn>
      </Row>

      {/* Fifth Row */}
      <Row>
        <KBtn
          className="w-[7.3rem] items-end justify-start pb-[4px] pl-[8px]"
          childrenClassName="items-start"
        >
          shift
        </KBtn>
        <KBtn>
          <span className="block">Z</span>
        </KBtn>
        <KBtn>
          <span className="block">X</span>
        </KBtn>
        <KBtn>
          <span className="block">C</span>
        </KBtn>
        <KBtn>
          <span className="block">V</span>
        </KBtn>
        <KBtn>
          <span className="block">B</span>
        </KBtn>
        <KBtn>
          <span className="block">N</span>
        </KBtn>
        <KBtn>
          <span className="block">M</span>
        </KBtn>
        <KBtn>
          <span className="block">{`<`}</span>
          <span className="block">{`,`}</span>
        </KBtn>
        <KBtn>
          <span className="block">{`>`}</span>
          <span className="block">{`.`}</span>
        </KBtn>{" "}
        <KBtn>
          <span className="block">{`?`}</span>
          <span className="block">{`/`}</span>
        </KBtn>
        <KBtn
          className="w-[7.3rem] items-end justify-end pr-[8px] pb-[4px]"
          childrenClassName="items-end"
        >
          shift
        </KBtn>
      </Row>

      {/* sixth Row */}
      <Row>
        <KBtn className="" childrenClassName="h-full justify-between py-[8px]">
          <div className="flex w-full justify-end pr-2">
            <span className="block">fn</span>
          </div>
          <div className="flex w-full justify-start pl-2">
            <IconWorld className="h-[12px] w-[12px]" />
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[8px]">
          <div className="flex w-full justify-end pr-2">
            <IconChevronUp className="h-[12px] w-[12px]" />
          </div>
          <div className="flex w-full justify-start pl-2">
            <span className="block">control</span>
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[8px]">
          <div className="flex w-full justify-end pr-2">
            <OptionKey className="h-[12px] w-[12px]" />
          </div>
          <div className="flex w-full justify-start pl-2">
            <span className="block">option</span>
          </div>
        </KBtn>
        <KBtn
          className="w-16"
          childrenClassName="h-full justify-between py-[8px]"
        >
          <div className="flex w-full justify-end pr-2">
            <IconCommand className="h-[12px] w-[12px]" />
          </div>
          <div className="flex w-full justify-start pl-2">
            <span className="block">command</span>
          </div>
        </KBtn>
        <KBtn className="w-[16.4rem]"></KBtn>
        <KBtn
          className="w-16"
          childrenClassName="h-full justify-between py-[8px]"
        >
          <div className="flex w-full justify-start pl-2">
            <IconCommand className="h-[12px] w-[12px]" />
          </div>
          <div className="flex w-full justify-start pl-2">
            <span className="block">command</span>
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[8px]">
          <div className="flex w-full justify-start pl-2">
            <OptionKey className="h-[12px] w-[12px]" />
          </div>
          <div className="flex w-full justify-start pl-2">
            <span className="block">option</span>
          </div>
        </KBtn>
        <div className="mt-[4px] flex h-12 w-[9.8rem] flex-col items-center justify-end rounded-[4px] p-[1px]">
          <KBtn className="h-6 w-12">
            <IconCaretUpFilled className="h-[12px] w-[12px]" />
          </KBtn>
          <div className="flex">
            <KBtn className="h-6 w-12">
              <IconCaretLeftFilled className="h-[12px] w-[12px]" />
            </KBtn>
            <KBtn className="h-6 w-12">
              <IconCaretDownFilled className="h-[12px] w-[12px]" />
            </KBtn>
            <KBtn className="h-6 w-12">
              <IconCaretRightFilled className="h-[12px] w-[12px]" />
            </KBtn>
          </div>
        </div>
      </Row>
    </div>
  );
};

export const KBtn = ({
  className,
  children,
  childrenClassName,
  backlit = true,
}: {
  className?: string;
  children?: React.ReactNode;
  childrenClassName?: string;
  backlit?: boolean;
}) => {
  return (
    <div
      className={cn(
        "rounded-[8px] p-[1px]",
        backlit && "bg-white/[0.2] shadow-xl shadow-white",
      )}
    >
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-[7px] bg-[#0A090D]",
          className,
        )}
        style={{
          boxShadow:
            "0px -1px 4px 0 #0D0D0F inset, -1px 0px 4px 0 #0D0D0F inset",
        }}
      >
        <div
          className={cn(
            "flex w-full flex-col items-center justify-center text-[10px] text-neutral-200",
            childrenClassName,
            backlit && "text-white",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export const Row = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-[4px] flex w-full shrink-0 gap-[4px]">{children}</div>
  );
};

export const SpeakerGrid = () => {
  return (
    <div
      className="mt-4 flex h-80 gap-[4px] px-[1px]"
      style={{
        backgroundImage:
          "radial-gradient(circle, #08080A 1px, transparent 1px)",
        backgroundSize: "6px 6px",
      }}
    ></div>
  );
};

export const OptionKey = ({ className }: { className: string }) => {
  return (
    <svg
      fill="none"
      version="1.1"
      id="icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
    >
      <rect
        stroke="currentColor"
        strokeWidth={4}
        x="18"
        y="5"
        width="10"
        height="2"
      />
      <polygon
        stroke="currentColor"
        strokeWidth={4}
        points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
      />
      <rect
        id="_Transparent_Rectangle_"
        className="st0"
        width="32"
        height="32"
        stroke="none"
      />
    </svg>
  );
};

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-black"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};