"use client";
import { useState } from "react";
import LitUpButton from './ui/litUpButton';
import { Button } from "./ui/MovingBorders";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { resume } from "@/data";

const Ideals = () => {
    const handleSelect = () => {
        window.open(
            "https://drive.google.com/file/d/1P_CRSTsj3VnHLSf8aC2vUto-F9a9I9k9/view?usp=sharing",
            "_blank",
            "noopener,noreferrer"
        );
    };

    return (
        <section id="resume">
            <div className="py-20 w-full">
                <h1 className="heading text-white">
                    Want to know <span className="text-pink-500">more about me?</span>
                </h1>

                <div className="w-full mt-12 grid justify-center items-center grid-cols-1 gap-10">

                    <Button
                        borderRadius="1.25rem"
                        style={{
                            background: "rgb(4,7,29)",
                            backgroundColor:
                                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                            borderRadius: `calc(1.75rem* 0.96)`,
                        }}
                        className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                            <DotLottieReact
                                src={resume.img}
                                loop
                                autoplay
                            />
                            <div className="lg:ms-5">
                                <h1 className="text-start text-2xl md:text-2xl font-bold">
                                    {resume.title}
                                </h1>
                                <h2 className="text-start text-lg md:text-md font-bold">
                                    My resume contains more details about my technical Experience and skills
                                </h2>
                                <h2 className="text-start text-lg md:text-md font-bold mt-3">
                                    {resume.Description}
                                </h2>
                                <p className="text-start text-white mt-3 font-semibold">
                                    <div className="flex py-20 items-center justify-center antialiased">
                                        <LitUpButton
                                            title="Click me!"
                                            icon={
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="size-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
                                                    />
                                                </svg>
                                            }
                                            position="left"
                                            otherClasses="!bg-[#161a31]"
                                            handleClick={handleSelect}
                                        />
                                    </div>
                                </p>
                            </div>
                        </div>
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default Ideals;