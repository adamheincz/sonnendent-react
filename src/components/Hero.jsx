import OpeningHours from "./OpeningHours";

export default function Hero() {
    return (
        <div className="flex bg-sd-light-blue p-9 rounded-3xl text-sd-blue">
            <h1 className="w-fit shrink text-balance font-outfit tracking-[-0.03em] spacin text-[128px] leading-none">
                Számunkra fontos fogainak megőrzése.
            </h1>
            <OpeningHours />
        </ div>
    );
}