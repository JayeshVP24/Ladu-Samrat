/* eslint-disable @next/next/no-img-element */
import { domAnimation, LazyMotion, m } from "framer-motion";
import { NextPage } from "next";
import {  useState } from "react";
import Fab from "../../components/Fab";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Item from "../../components/Item";
import { NextSeo, NextSeoProps } from "next-seo";


const Snacks: NextPage = () => {
    const SEO: NextSeoProps = {
        title: "Snacks | Ladu Samrat",
        description: "Snacks offered at Ladu Samrat",
        openGraph: {
            title: "Snacks | Ladu Samrat",
            description: "Snacks offered at Ladu Samrat",
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
                    {/* <Search /> */}

                    <Items />

                    <Fab />
                </main>

                <Footer />
            </m.div>
        </LazyMotion>
    );
};

export default Snacks;

const Items: React.FC = () => {
    const items: { name: string; desc: string; img: string }[] = [
        {
            name: "Aamras Puri",
            desc:
                "Made from freshly squeezed mango pulp, relish the delicious Aamras with puri!",
            img: "AamrasPuri.webp",
        },
        {
            name: "Alu Vadi",
            desc:
                "Colocasia leaves wrapped delicately with a tangy spicy mixture rolled out, steamed and Fried.",
            img: "AluVadi.webp",
        },
        {
            name: "Batata Vada",
            desc:
                "Has been the USP for Ladu Samrat for past 30 years. Our preparation for these Potato Fritters and the accompanying condiments remains unmatched.",
            img: "BatataVada.webp",
        },
        {
            name: "Bhajji Platter",
            desc:
                "If you can't decide which one to choose, have them all with the Bhajji Platter!",
            img: "BhajiPlatter.webp",
        },
        {
            name: "Chai",
            desc:
                "Carefully Chosen blend of multiple tea leaves gives our tea a unique taste.",
            img: "Chai.webp",
        },
        {
            name: "Chole Bhature",
            desc:
                "Bringing northern cuisine to your plate, savour our chole bhature don’t wait!",
            img: "CholeBhature.webp",
        },
        {
            name: "Dahi Misal",
            desc:
                "We have extensively excelled at making this mixture our customer's favorite one. Moderately spiced usal along with in-house made Farsan topped with curd is our classic Dahi misal",
            img: "DahiMisal.webp",
        },
        {
            name: "Dahivada",
            desc:
                "Fluffy, tender, tangy and sweet …..dahi vada is a combination of all your favourite flavours and textures in one tasty snack. ",
            img: "Dahivada.webp",
        },
        {
            name: "Farali Kachori",
            desc:
                "Options for the ones who fast shouldn’t be few, so try out the Farali kachori as something new!",
            img: "FaraliKachori.webp",
        },
        {
            name: "Farali Pattice",
            desc:
                "The Farali pattice isn’t the usual pattice you’ve eaten before. This one is a must try for all, fasting or not!",
            img: "FaraliPattice.webp",
        },
        {
            name: "Finger Chips",
            desc:
                "These salted potato crisps are the best snack for a quick meal on the go!",
            img: "FingerChips.webp",
        },
        {
            name: "Kairee Panhe",
            desc:
                "As authentic, pure and delicious as it can get, Grab your kairee panhe as long as the mango season lasts!",
            img: "KaireePanhe.webp",
        },
        {
            name: "Kanda Bhajji",
            desc:
                "Our unique spice blend makes our kanda bhaji taste slight better",
            img: "KandaBhajji.webp",
        },
        {
            name: "Kharwas",
            desc:
                "Another USP for Ladu Samrat, our kharwas promises purity, authenticity and everything just so maharashtrian about it!",
            img: "Kharwas.webp",
        },
        {
            name: "Kothimbir Vadi",
            desc: "The coriander wedges which are fried to perfection.",
            img: "KothimbirVadi.webp",
        },
        {
            name: "Masale Bhat",
            desc:
                "The recipe comes from humble homes of Sahyadri ranges and is enhanced with our inhouse spice blends",
            img: "MasaleBhat.webp",
        },
        {
            name: "Mini Samosa",
            desc:
                "These mini samosas may be small, but guarantee to fulfil your appetite!",
            img: "MiniSamosa.webp",
        },
        {
            name: "Misal",
            desc:
                "A delicious spicy dish with a blend of curry with sprouts, onions, pohe, farsan and coriander served with soft pav. Have it for breakfast, lunch or dinner!",
            img: "Misal.webp",
        },
        {
            name: "Pav Bhaji",
            desc:
                "The popular fast food item that is loved from young to old. The tangy bhaji along with the soft buttered pav surely tops everyone’s wish list!",
            img: "PavBhaji.webp",
        },
        {
            name: "Piyush",
            desc:
                "it isn't just another lassi, we have our own well kelt secrets regarding its recipe!",
            img: "Piyush.webp",
        },
        {
            name: "Puran Poli",
            desc:
                "Flour, Jaggery, Milk, Pulses and alot of minute authentic techniques make our puranpolis our customer favorites",
            img: "PuranPoli.webp",
        },
        {
            name: "Puri Bhaji",
            desc:
                "The soul food in north and west India, comprises of the perfectly tempered potato vegetable served with hot puris.",
            img: "PuriBhaji.webp",
        },
        {
            name: "Sabudana Khichadi",
            desc:
                "Optimum quality ingredients make this humble fasting preparation a stand out at our outlet.",
            img: "SabudanaKhichadi.webp",
        },
        {
            name: "Sabudana Vada",
            desc:
                "Fasting or not, the crispy sabudana vada served hot with chutney is a delicacy not to be missed!",
            img: "SabudanaVada.webp",
        },
        {
            name: "Samosa",
            desc:
                "A savoury snack filled with zesty potatoes, Samosa is the best food for a quick snack!",
            img: "Samosa.webp",
        },
        {
            name: "Thalipeeth",
            desc:
                "Another one sneaking into the city from remote Maharashtrian villages is our recipe for Thalipith, served with in house made Loni (butter)",
            img: "Thalipeeth.webp",
        },
        {
            name: "Vada Pav",
            desc:
                "The crown jewel of street food, nothing resonates Mumbai like Vada Pav!",
            img: "VadaPav.webp",
        },
    ];

    const [search, setSearch] = useState("");

    // useEffect(() => {
    //     console.log(search);
    // }, [search])

    const filteredItems = items.filter(
        item => 
            item.name.toLowerCase().includes(search)
    )

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
                        className=" w-12 group-focus-within:rotate-90 transition-all"
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
                        onChange={(e) => setSearch(e.target.value.toLowerCase())}
                        placeholder="Search our Snacks"
                        className="bg-transparent h-full bg-opacity-30 placeholder 
                placeholder-shown:font-light 
                font-source-sans-pro placeholder-black tracking-wider rounded-lg  
                focus:outline-none 
                md:w-full "
                    />
                    
                </span>               
            </section>
            <section className="mt-6 xl:mt-12">
                <span className="flex gap-x-4 items-center justify-start px-4 md:px-8 xl:px-10">
                    <h1 className="font-source-sans-pro text-2xl lg:text-3xl tracking-wider">
                        Snacks and Beverages
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
                            d="M53.8486 69.9032L33.6785 75.3078C26.1797 77.3171 18.4687 72.842 16.4667 65.3706L11.0988 45.3372C9.08952 37.8384 13.5646 30.1275 21.036 28.1255L41.2062 22.7209C48.705 20.7116 56.4159 25.1867 58.4179 32.6581L63.7858 52.6914C65.7878 60.1629 61.32 67.9012 53.8486 69.9032ZM22.136 32.2307C16.9087 33.6313 13.8034 39.01 15.204 44.2373L20.5719 64.2706C21.9726 69.4978 27.3512 72.6032 32.5785 71.2026L52.7486 65.798C57.9759 64.3974 61.0813 59.0187 59.6806 53.7914L54.3127 33.7581C52.9121 28.5308 47.5334 25.4255 42.3061 26.8261L22.136 32.2307V32.2307Z"
                            fill="#FF6A00"
                        />
                        <path
                            d="M18.5356 26.5662C17.4135 26.8668 16.2337 26.1857 15.933 25.0636L14.6497 20.2742C14.3491 19.1521 15.0302 17.9723 16.1523 17.6716C17.2744 17.371 18.4542 18.0521 18.7549 19.1742L20.0382 23.9636C20.3389 25.0857 19.6577 26.2655 18.5356 26.5662Z"
                            fill="#FF6A00"
                        />
                        <path
                            d="M29.4828 23.6329C28.3607 23.9336 27.1808 23.2524 26.8802 22.1303L25.5969 17.3409C25.2962 16.2188 25.9774 15.039 27.0995 14.7383C28.2216 14.4377 29.4014 15.1189 29.7021 16.2409L30.9854 21.0303C31.286 22.1524 30.6048 23.3322 29.4828 23.6329Z"
                            fill="#FF6A00"
                        />
                        <path
                            d="M40.4299 20.6996C39.3078 21.0003 38.128 20.3191 37.8273 19.197L36.544 14.4076C36.2433 13.2856 36.9245 12.1057 38.0466 11.8051C39.1687 11.5044 40.3485 12.1856 40.6492 13.3077L41.9325 18.097C42.2332 19.2191 41.552 20.399 40.4299 20.6996Z"
                            fill="#FF6A00"
                        />
                        <path
                            d="M61.9752 54.1446C60.8531 54.4452 59.6733 53.7641 59.3726 52.642L53.1981 29.5982C52.8974 28.4761 53.5786 27.2963 54.7007 26.9956C62.1995 24.9863 69.9104 29.4614 71.9124 36.9328C73.9144 44.4043 69.4466 52.1426 61.9752 54.1446ZM57.9119 30.7698L62.8691 49.2705C66.8618 47.2033 69.0172 42.5485 67.8072 38.0328C66.5972 33.5171 62.4033 30.5636 57.9119 30.7698Z"
                            fill="#FF6A00"
                        />
                        <path
                            d="M57.2711 39.6533L14.8235 51.0271C13.7014 51.3278 12.5216 50.6466 12.2209 49.5245C11.9202 48.4024 12.6014 47.2226 13.7235 46.9219L56.1711 35.5481C57.2932 35.2475 58.473 35.9287 58.7737 37.0507C59.0743 38.1728 58.3932 39.3527 57.2711 39.6533Z"
                            fill="#FF6A00"
                        />
                    </svg>
                </span>

                <div className="grid mt-4    grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-y-4 md:gap-y-6 px-2 justify-items-center">
                    {filteredItems.map((i) => (
                        <Item type="snacks" key={i.name} {...i} />
                    ))}
                </div>
            </section>
        </>
    );
};
