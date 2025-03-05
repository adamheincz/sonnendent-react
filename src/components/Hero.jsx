import OpeningHours from "./OpeningHours";
import SellingPoints from "./SellingPoints";

export default function Hero() {
    return (
        <div className="flex flex-col bg-sd-light-blue p-9 rounded-3xl text-sd-blue">
            <div className="flex mb-9">
                <h1 className="w-fit shrink text-balance font-outfit tracking-[-0.03em] spacin text-[128px] leading-none">
                    Számunkra fontos fogainak megőrzése<span className="text-sd-orange">.</span>
                </h1>
                <OpeningHours />
            </div>
            <SellingPoints />
        </ div>
    );
}