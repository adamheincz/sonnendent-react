import { SELLING_POINTS } from "../assets/data";

export default function SellingPoints() {

    return (
        <div id="selling-points" className="flex gap-4 border-t-2">
            {SELLING_POINTS.map(point =>
                <div key={point.title} className="p-9">
                    <div className="flex justify-between mb-6">
                        <h2 className="uppercase font-semibold">{point.title}</h2>
                        <div className="material-icons bg-white size-fit px-2 py-1.5 rounded-full">
                            <span className="text-4xl">{point.icon}</span>
                        </div>
                    </div>
                    <p className="text-sd-grey tracking-tighter">{point.description}</p>
                </div>
            )}
        </div>
    );
}