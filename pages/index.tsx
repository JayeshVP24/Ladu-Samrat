/* eslint-disable @next/next/no-img-element */

import { domAnimation, LazyMotion, m } from "framer-motion";
import { NextPage } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Fab from "../components/Fab";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const Home: NextPage = () => {
    return (
        <LazyMotion features={domAnimation}>
            <m.div
                initial={{
                    opacity: 0,
                    y: -50,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                exit={{
                    opacity: 0,
                    y: 50,
                }}
            >
                <Header />

                <main className="space-y-14 xl:space-y-20">
                    <Hero />

                    <PopularItems />

                    <AboutUs />

                    <Gallery />

                    <Testimonials />

                    <Fab />
                </main>

                <Footer />
            </m.div>
        </LazyMotion>
    );
};

const Hero: React.FC = () => {
    const slides = [];

    for (let i = 1; i <= 5; i += 1) {
        slides.push(
            <SwiperSlide tag="li"
            className="heroWrapper"            
            key={`slide-${i}`}>
                <img
                    width="1300"
                    height="610"
                    // style={{ listStyle: "none" }}
                    src={`/hero/${i}.webp`}                                 
                    className="mx-auto rounded-2xl relative  listStyleNone"
                    alt={`Slide ${i}`}
                />
            </SwiperSlide>
        );
    }

    return (
        <section
            id="home"
            className="flex items-center justify-evenly w-screen"
        >
            <div className="w-11/12 md-w-full relative z-0">
                <Swiper
                    tag="section"
                    wrapperTag="ul"
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                >
                    {slides}
                </Swiper>
            </div>
        </section>
    );
};

const SectionHeading: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div className="flex items-center space-x-4 w-max mx-auto">
            <svg
                width="86"
                height="35"
                viewBox="0 0 86 35"
                className="w-12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="7.5" cy="7.5" r="7.5" fill="#FF6A00" />
                <ellipse cx="33" cy="12.5" rx="12" ry="12.5" fill="#FF6A00" />
                <circle cx="68.5" cy="17.5" r="17.5" fill="#FF6A00" />
            </svg>

            <h1 className="font-source-sans-pro tracking-wider text-xl lg:text-2xl xl:text-3xl">
                {title.toUpperCase()}
            </h1>
            <svg
                width="86"
                height="35"
                viewBox="0 0 86 35"
                className="w-12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="78.5"
                    cy="7.5"
                    r="7.5"
                    transform="rotate(-180 78.5 7.5)"
                    fill="#FF6A00"
                />
                <ellipse
                    cx="53"
                    cy="12.5"
                    rx="12"
                    ry="12.5"
                    transform="rotate(-180 53 12.5)"
                    fill="#FF6A00"
                />
                <circle
                    cx="17.5"
                    cy="17.5"
                    r="17.5"
                    transform="rotate(-180 17.5 17.5)"
                    fill="#FF6A00"
                />
            </svg>
        </div>
    );
};

const PopularItems: React.FC = () => {
    const items: { url: string; title: string }[] = [
        {
            url: "laddu.webp",
            title: "Laddu",
        },
        {
            url: "barfi.webp",
            title: "Barfi",
        },
        {
            url: "kaju.webp",
            title: "Kaju Pista Roll",
        },
        {
            url: "badam.webp",
            title: "Badam Halwa",
        },
        {
            url: "CholeBhature.webp",
            title: "Chole Bhature",
        },
        {
            url: "Piyush.webp",
            title: "Piyush",
        },
        {
            url: "BatataVada.webp",
            title: "Batata Vada",
        },
        {
            url: "KothimbirVadi.webp",
            title: "Kothimbir Vadi",
        },
    ];

    const Item: React.FC<{ url: string; title: string; number: number }> = ({
        url,
        title,
        number,
    }) => {
        return (
            <div
                className={`font-montserrat font-medium text-center w-max space-y-4 text-lg xl:text-xl xl:space-y-8
            ${number % 2 === 0 ? "hidden lg:block" : "block"}`}
            >
                <span className="overflow-hidden border-4 border-primary popularItem-dropShadow w-40 h-40 block rounded-full md:w-56 md:h-56 xl:w-72 xl:h-72">
                    <img                       
                        src={`/popularItems/${url}`}
                        width="500"
                        height="500"
                        loading="lazy"
                        alt={title}
                        className="object-cover hover:scale-125 transition-all w-full h-full block rounded-full "
                    />
                </span>
                <h3>{title}</h3>
            </div>
        );
    };

    return (
        <section id="popular-items">
            <SectionHeading title="Our Must Try's" />

            <div
                className="grid grid-cols-2 grid-rows-2 gap-y-4 xl:gap-y-8 mt-6 xl:mt-12 justify-items-center items-center
            lg:grid-rows-1 lg:grid-cols-4  "
            >
                {items.map((i, n) => (
                    <Item
                        number={n}
                        key={i.title}
                        title={i.title}
                        url={i.url}
                    />
                ))}
            </div>
        </section>
    );
};

const AboutUs: React.FC = () => {
    return (
        <section
            id="about-us"
            className="flex flex-col items-center lg:flex-row"
        >
            <img
                src="/logo1.webp"
                alt="ladu Samrat Logo"
                width="1000"
                height="900"
                className="mx-auto md:w-2/4 lg:w-2/5"
            />

            <div className="font-montserrat` leading-relaxed text-center mt-8 lg:w-3/5 lg:mr-12">
                <SectionHeading title="about us" />
                <p className="mt-6 xl:mt-12 mx-6 lg:mx-0 xl:text-lg">
                    For nearly 30 years, Mumbai Ladu Samrat has been a hallmark
                    of top quality snacks and mithai for numerous Mumbaikars.
                    Our authenic Maharashtrian cuisine forms the focal point of
                    our brand. We also give special impetus to other quick
                    service items. Our sweets still remain as one of the best
                    quality in the city gifted and savoured across states. Come
                    visit us to experience our delicious tradition of excellence
                </p>
            </div>
        </section>
    );
};

const Gallery: React.FC = () => {
    const slides = [];

    for (let i = 1; i <= 6; i += 1) {
        slides.push(
            <SwiperSlide tag="li" key={`slide-${i}`}>
                <img
                loading="lazy"
                    src={`/gallery/${i}.webp`}
                    width="6000"
                    height="4000"
                    className="mx-auto rounded-2xl list-none"
                    alt={`Slide ${i}`}
                />
            </SwiperSlide>
        );
    }

    return (
        <section id="gallery">
            <SectionHeading title="gallery" />

            <div className="w-full  mt-4 p-4 xl:p-8 md:w-full  relative z-0">
                <Swiper
                    tag="section"
                    wrapperTag="ul"
                    modules={[Pagination, Autoplay, Mousewheel]}
                    slidesPerView={1}
                    spaceBetween={0}
                    autoplay={{
                        delay: 3000,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    mousewheel={{
                        releaseOnEdges: true,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 25
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50
                        }
                    }}
                >
                    {slides}
                </Swiper>
            </div>
        </section>
    );
};

const Testimonials: React.FC = () => {
    const Testimonial: React.FC<{ author: string; message: string }> = ({
        author,
        message,
    }) => {
        return (
            <div className="flex justify-evenly w-[90%] mx-auto">
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12"
                >
                    <g opacity="0.4">
                        <path
                            d="M4 24.7H15.6C18.66 24.7 20.76 27.02 20.76 29.86V36.3C20.76 39.14 18.66 41.46 15.6 41.46H9.16003C6.32003 41.46 4 39.14 4 36.3V24.7"
                            stroke="#FF6A00"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M4 24.7C4 12.6 6.26006 10.6001 13.0601 6.56006"
                            stroke="#FF6A00"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                    <path
                        d="M27.26 24.7H38.86C41.92 24.7 44.02 27.02 44.02 29.86V36.3C44.02 39.14 41.92 41.46 38.86 41.46H32.42C29.58 41.46 27.26 39.14 27.26 36.3V24.7"
                        stroke="#FF6A00"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M27.26 24.7C27.26 12.6 29.5199 10.6001 36.3199 6.56006"
                        stroke="#FF6A00"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <div className="w-5/6 relative top-2 ">
                    <h2 className="font-source-sans-pro tracking-wider text-lg xl:text-xl ">
                        {author}
                    </h2>
                    <p className="font-montserrat text-sm xl:text-base mt-1 lg:mt-2 ">
                        {message}
                    </p>
                </div>
            </div>
        );
    };

    return (
        <section id="testimonials" className="">
            <SectionHeading title="testimonials" />

            <div
                className="mx-auto px-1 grid grid-cols-1 gap-y-6 mt-6 xl:mt-12
            lg:grid-cols-3"
            >
                <Testimonial
                    author="Nigella Lawson | London Food Writer and Television Chef"
                    message="Best thing I have eaten in 2017: a vada pav at Ladoo Samrat in Mumbai"
                />
                <Testimonial
                    author="Harsh Goenka | Chairman of Billion Worth RPG Group Conglomerate"
                    message="Misal, Pohe, Upma, Sabudana, Amboli, Thalipeeth, Masale Bhaat, Vada Pav, Misal are a few of the common morning snacky food that I ate today. It's always a pleasure to discover an unknown restaurant Ladoo Samrat in Parel,Mumbai"
                />
                <Testimonial
                    author="Payal Blech | CIO, Farhan Distilleries"
                    message="The beauty of the menu at Ladoo Samrat is that one will always be satisfied to their heart's content. Ranging from authentic Maharashtrian specialities like batata vada,sabudana khichadi to south indian staple food like dosa,idli and vada sambar, Ladoo Samrat has both variety and taste!"
                />
            </div>
        </section>
    );
};

export default Home;
