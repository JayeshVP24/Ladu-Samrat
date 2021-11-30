/* eslint-disable @next/next/no-img-element */
const Item: React.FC<{
    name: string;
    desc: string;
    img: string;
    type: "sweets" | "snacks";
}> = ({ name, desc, img, type }) => {
    if (type === "sweets") {
        img = "sweets/" + img;
    }
    if (type === "snacks") {
        img = "snacks/" + img;
    }

    return (
        <div className="group w-44 md:w-56 xl:w-60 bg-secondary rounded-lg overflow-hidden">
            <img
                src={`/items/${img}`}
                width="500"
                height="500"
                loading="lazy"
                className="group-hover:scale-110 transition-all duration-300
                h-44 w-full object-cover"
                alt="Misal Pav"
            />
            <span className="p-4 block font-montserrat">
                <h2 className="font-medium tracking-wider lg:text-lg">
                    {name}
                </h2>
                <p className="text-sm lg:text-base font-light font-source-sans-pro ">
                    {desc}
                </p>
            </span>
        </div>
    );
};

export default Item;
