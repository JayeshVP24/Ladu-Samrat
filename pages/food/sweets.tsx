/* eslint-disable @next/next/no-img-element */
import { domAnimation, LazyMotion, m } from "framer-motion";
import { NextPage } from "next";
// import { useState } from "react";
import Fab from "../../components/Fab";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Item from "../../components/Item";
import { NextSeo, NextSeoProps } from "next-seo";

const Sweets: NextPage = () => {
    const SEO: NextSeoProps = {
        title: "Sweets | Ladu Samrat",
        description: "Sweets offered at Ladu Samrat",
        openGraph: {
            title: "Sweets | Ladu Samrat",
            description: "Sweets offered at Ladu Samrat",
        },
    };

    return (
        <LazyMotion features={domAnimation}>
            <NextSeo {...SEO} />

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

                <main>
                    <Items />

                    <Fab />
                </main>

                <Footer />
            </m.div>
        </LazyMotion>
    );
};

export default Sweets;

const Items: React.FC = () => {
    // const items: { name: string; desc: string; img: string }[] = [
    //     {
    //         name: "Misal Pav",
    //         desc:
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, provident.",
    //         img: "misal.jpg",
    //     },
    //     {
    //         name: "Bhaji Platter",
    //         desc:
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, provident.",
    //         img: "BhajiPlatter.jpg",
    //     }
    // ];

    // const [search, setSearch] = useState("");

    // // useEffect(() => {
    // //     console.log(search);
    // // }, [search])

    // const filteredItems = items.filter((item) =>
    //     item.name.toLowerCase().includes(search)
    // );

    return (
        <>
            <section
                id="search"
                className="flex flex-col gap-y-6 md:flex-row items-center
        md:mx-12 lg:w-3/5 lg:mx-auto  "
            >
                <span
                    className="flex h-16 md:w-full group focus-within:ring-2 ring-primary 
            transition-all bg-secondary bg-opacity-30 pl-4 md:px-4 rounded-lg items-center 
            justify-between md:justify-center gap-x-4  "
                >
                    <svg
                        width="59"
                        height="59"
                        viewBox="0 0 59 59"
                        fill="none"
                        className="w-12 group-focus-within:rotate-90 transition-all"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M28.2708 53.4688C14.3812 53.4688 3.07288 42.1604 3.07288 28.2708C3.07288 14.3813 14.3812 3.07292 28.2708 3.07292C42.1604 3.07292 53.4687 14.3813 53.4687 28.2708C53.4687 42.1604 42.1604 53.4688 28.2708 53.4688ZM28.2708 6.76042C16.397 6.76042 6.76038 16.4217 6.76038 28.2708C6.76038 40.12 16.397 49.7813 28.2708 49.7813C40.1445 49.7813 49.7812 40.12 49.7812 28.2708C49.7812 16.4217 40.1445 6.76042 28.2708 6.76042Z"
                            fill="#FF6A00"
                        />
                        <path
                            d="M54.0834 55.9271C53.6163 55.9271 53.1492 55.755 52.7805 55.3863L47.8638 50.4696C47.1509 49.7567 47.1509 48.5767 47.8638 47.8638C48.5767 47.1508 49.7567 47.1508 50.4696 47.8638L55.3863 52.7804C56.0992 53.4933 56.0992 54.6733 55.3863 55.3863C55.0175 55.755 54.5505 55.9271 54.0834 55.9271Z"
                            fill="#FF6A00"
                        />
                    </svg>
                    <input
                        type="text"
                        name="search"
                        placeholder="Search our Sweets"
                        // onChange={(e) =>
                        //     setSearch(e.target.value.toLowerCase())
                        // }
                        className="bg-transparent h-full bg-opacity-30 placeholder 
                    placeholder-shown:font-light 
                    font-source-sans-pro placeholder-black tracking-wider rounded-lg  
                    focus:outline-none 
                    md:w-full "
                    />
                </span>
            </section>
            <section className="mt-6 xl:mt-12">
                <span className="flex gap-x-4 mt-6 xl:mt-10 items-center justify-start px-4 md:px-8 xl:px-10">
                    <h1 className="font-source-sans-pro text-2xl lg:text-3xl tracking-wider">
                        Sweets and More
                    </h1>
                    <svg
                        width="84"
                        height="84"
                        viewBox="0 0 84 84"
                        fill="none"
                        className="w-14"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M33.7804 70.9796C26.4732 69.0217 19.8425 64.4292 15.7021 57.6585C11.3541 50.5683 10.0646 42.2441 12.0964 34.2234C14.1356 26.1752 19.2174 19.4704 26.4005 15.3232C40.9403 6.92865 59.6052 11.9299 67.9998 26.4697C72.147 33.6528 73.1955 42.0003 70.9374 49.9897C68.6793 57.9792 63.4005 64.5434 56.0972 68.4824C49.1262 72.2757 41.0876 72.9376 33.7804 70.9796ZM48.4028 16.4082C41.9166 14.6702 34.7704 15.3952 28.5242 19.0015C22.3474 22.5677 17.9821 28.35 16.2163 35.2687C14.4504 42.1874 15.5533 49.3467 19.3204 55.4307C26.4645 67.0834 42.0716 71.236 54.0776 64.7439C60.3546 61.3512 64.8968 55.6751 66.8469 48.8351C68.797 41.9951 67.8876 34.7701 64.3215 28.5933C60.7152 22.3471 54.889 18.1462 48.4028 16.4082Z"
                            fill="#FF6A00"
                        />
                        <path
                            d="M37.0061 58.9377C32.682 57.7791 28.8032 55.0677 26.3477 51.0952C25.7393 50.0815 26.0566 48.7879 27.0429 48.1722C28.0566 47.5638 29.3502 47.8812 29.9659 48.8675C33.7056 54.9441 41.8612 57.1294 48.1382 53.7367C49.1646 53.1904 50.4709 53.5697 51.0172 54.5961C51.5635 55.6225 51.1842 56.9288 50.1578 57.4751C46.045 59.6877 41.3302 60.0963 37.0061 58.9377Z"
                            fill="#FF6A00"
                        />
                    </svg>
                </span>

                <div className="grid mt-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-y-4 md:gap-y-6 px-2 justify-items-center">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
                        <Item
                            type="sweets"
                            key={`item-${i}`}
                            img={`${i}.webp`}
                            name="Lorem Ipsum"
                            desc="lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
                        />
                    ))}
                </div>
            </section>
        </>
    );
};
