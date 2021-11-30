/* eslint-disable @next/next/no-img-element */
import { m, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
    const navs: { title: string; link: string; icon: string }[] = [
        {
            title: "home",
            link: "/",
            icon: "home.svg",
        },
        // {
        //     title: "popular items",
        //     link: "#popular-items",
        //     icon: "popularItems.svg",
        // },
        {
            title: "food items",
            link: "/food-items",
            icon: "products.svg",
        },
        {
            title: "about us",
            link: "/#about-us",
            icon: "aboutUs.svg",
        },
        {
            title: "gallery",
            link: "/#gallery",
            icon: "gallery.svg",
        },
        // {
        //     title: "testimonials",
        //     link: "#testimonials",
        //     icon: "testimonials.svg",
        // },
        {
            title: "contact us",
            link: "/contact",
            icon: "contactUs.svg",
        },
    ];

    const [navOpen, setNavOpen] = useState(false);

    return (
        <header className="flex font-montserrat justify-around items-center mt-4 xl:mt-2 mb-10 ">
            <Link href="/" passHref>
                <a className="w-2/4 relative left-4 lg:w-40 xl:w-52">
                    <img
                        src="/logo.webp"
                        width="500"
                        height="210"
                        alt="Ladu Samrat Logo"
                    />
                </a>
            </Link>
            <svg
                width="30"
                height="30"
                className="w-1/4 cursor-pointer lg:hidden "
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setNavOpen(true)}
            >
                <path
                    d="M21.0015 5.25H3.00146C2.59146 5.25 2.25146 4.91 2.25146 4.5C2.25146 4.09 2.59146 3.75 3.00146 3.75H21.0015C21.4115 3.75 21.7515 4.09 21.7515 4.5C21.7515 4.91 21.4115 5.25 21.0015 5.25Z"
                    fill="#000"
                />
                <path
                    d="M21.0015 10.25H11.5315C11.1215 10.25 10.7815 9.91 10.7815 9.5C10.7815 9.09 11.1215 8.75 11.5315 8.75H21.0015C21.4115 8.75 21.7515 9.09 21.7515 9.5C21.7515 9.91 21.4115 10.25 21.0015 10.25Z"
                    fill="#000"
                />
                <path
                    d="M21.0015 15.25H3.00146C2.59146 15.25 2.25146 14.91 2.25146 14.5C2.25146 14.09 2.59146 13.75 3.00146 13.75H21.0015C21.4115 13.75 21.7515 14.09 21.7515 14.5C21.7515 14.91 21.4115 15.25 21.0015 15.25Z"
                    fill="#000"
                />
                <path
                    d="M21.0015 20.25H11.5315C11.1215 20.25 10.7815 19.91 10.7815 19.5C10.7815 19.09 11.1215 18.75 11.5315 18.75H21.0015C21.4115 18.75 21.7515 19.09 21.7515 19.5C21.7515 19.91 21.4115 20.25 21.0015 20.25Z"
                    fill="#000"
                />
            </svg>

            <nav className="hidden lg:flex w-3/5 justify-around  ">
                {navs.map((n) => (
                    <React.Fragment key={n.title}>
                        {n.title !== "food items" ? (
                            <Link passHref href={n.link} key={n.link}>
                                <m.a
                                    whileHover={{
                                        top: -4,
                                    }}
                                    whileTap={{
                                        top: 2,
                                    }}
                                    className="flex relative items-center space-x-1 xl:space-x-2 text-sm cursor-pointer xl:text-base"
                                >
                                    <img
                                        width="25"
                                        height="25"
                                        src={`/nav/${n.icon}`}
                                        alt={n.title}
                                    />
                                    <span>{n.title.toUpperCase()}</span>
                                </m.a>
                            </Link>
                        ) : (
                            <div className="dropdown" key={n.link}>
                                <m.span
                                    key={n.title}
                                    whileHover={{
                                        top: -4,
                                    }}
                                    whileTap={{
                                        top: 2,
                                    }}
                                    className="flex relative items-center space-x-1 xl:space-x-2 text-sm cursor-pointer xl:text-base"
                                    tabIndex={0}
                                >
                                    <img
                                        width="25"
                                        height="25"
                                        src={`/nav/${n.icon}`}
                                        alt={n.title}
                                    />
                                    <span>{n.title.toUpperCase()}</span>
                                </m.span>
                                <ul
                                    tabIndex={0}
                                    className="p-2 mt-4 shadow  dropdown-content bg-secondary rounded-lg w-52"
                                >
                                    <Link passHref href="/food/sweets">
                                        <a
                                            key="sweets"
                                            className="w-full block text-lg font-montserrat py-2 px-4 
                                    hover:bg-primary hover:bg-opacity-30 rounded-lg
                                    active:bg-opacity-60 active:scale-95 transition-all"
                                        >
                                            Sweets
                                        </a>
                                    </Link>
                                    <Link passHref href="/food/snacks">
                                        <a
                                            key="snacks"
                                            className="w-full block text-lg font-montserrat py-2 px-4 
                                    hover:bg-primary hover:bg-opacity-30 rounded-lg
                                    active:bg-opacity-60 active:scale-95 transition-all"
                                        >
                                            Snacks
                                        </a>
                                    </Link>
                                </ul>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </nav>

            <a href="https://www.zomato.com/mumbai/restaurants/ladu-samrat?category=2"
                className="bg-primary text-center hidden lg:block rounded-lg px-6 py-2 text-white font-bold font-montserrat tracking-widest
            hover:ring ring-black ring-opacity-70 ring-offset-2 active:scale-95 transition-all"
            >
                ORDER NOW
            </a>

            <AnimatePresence>
                {navOpen && (
                    <>
                        <m.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.2,
                            }}
                            onClick={() => setNavOpen(false)}
                            className="absolute z-20 bg-primary bg-opacity-30 h-screen top-0 w-full left-0"
                        />
                        <m.div
                            initial={{
                                right: "-80%",
                            }}
                            animate={{
                                right: 0,
                            }}
                            exit={{
                                right: "-80%",
                            }}
                            className="fixed bg-white z-30 w-3/4 h-screen right-0 top-0 "
                        >
                            <div>
                                <img
                                    src="/logo1.webp"
                                    className="w-3/4 mx-auto"
                                    alt="Ladu Samrat Logo"
                                    width="400"
                                    height="350"
                                />
                            </div>
                            <nav className="flex flex-col space-y-6 mt-6 text-lg w-max mx-auto">
                                {navs.map((n) => (
                                    <>
                                        {n.title !== "food items" ? (
                                            <Link
                                                passHref
                                                href={n.link}
                                                key={n.title}
                                            >
                                                <a
                                                    onClick={() =>
                                                        setNavOpen(false)
                                                    }
                                                    className="flex cursor-pointer items-center space-x-4"
                                                >
                                                    <img
                                                        width="30"
                                                        height="30"
                                                        className="w-8  "
                                                        src={`/nav/${n.icon}`}
                                                        alt={n.title}
                                                    />
                                                    <span>
                                                        {n.title.toUpperCase()}
                                                    </span>
                                                </a>
                                            </Link>
                                        ) : (
                                            <div
                                                className="dropdown"
                                                key={n.title}
                                            >
                                                <span
                                                    tabIndex={1}
                                                    className="flex cursor-pointer items-center space-x-4"
                                                >
                                                    <img
                                                        width="30"
                                                        height="30"
                                                        className="w-8  "
                                                        src={`/nav/${n.icon}`}
                                                        alt={n.title}
                                                    />
                                                    <span>
                                                        {n.title.toUpperCase()}
                                                    </span>
                                                </span>
                                                <ul
                                                    tabIndex={1}
                                                    className="p-2 mt-4 shadow  dropdown-content bg-secondary rounded-lg w-52"
                                                >
                                                    <Link
                                                        passHref
                                                        href="/food/sweets"
                                                    >
                                                        <a
                                                            onClick={() =>
                                                                setNavOpen(
                                                                    false
                                                                )
                                                            }
                                                            className="w-full block text-lg font-montserrat py-2 px-4 
                                            hover:bg-primary hover:bg-opacity-30 rounded-lg
                                            active:bg-opacity-60 active:scale-95 transition-all"
                                                        >
                                                            Sweets
                                                        </a>
                                                    </Link>
                                                    <Link
                                                        passHref
                                                        href="/food/snacks"
                                                    >
                                                        <a
                                                            onClick={() =>
                                                                setNavOpen(
                                                                    false
                                                                )
                                                            }
                                                            className="w-full block text-lg font-montserrat py-2 px-4 
                                            hover:bg-primary hover:bg-opacity-30 rounded-lg
                                            active:bg-opacity-60 active:scale-95 transition-all"
                                                        >
                                                            Snacks
                                                        </a>
                                                    </Link>
                                                </ul>
                                            </div>
                                        )}
                                    </>
                                ))}
                            </nav>

                            <span
                                onClick={() => setNavOpen(false)}
                                className="flex text-center items-center space-x-2 justify-center mx-10 
                             bg-primary bg-opacity-80 cursor-pointer p-2 rounded-lg text-white 
                             
                            active:bg-opacity-100 active:scale-95 transition-all text-xl px-4 mt-10 "
                            >
                                <p className="mb-1">Close</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 block"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </span>
                        </m.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
