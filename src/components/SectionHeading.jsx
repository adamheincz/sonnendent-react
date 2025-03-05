export default function SectionHeading({ title, description }) {

    return (
        <div className="flex flex-col items-center mb-12">
            <h1 className="bg-sd-light-blue text-sd-blue font-outfit font-medium px-6 py-3 rounded-full mb-6 w-fit">{title}</h1>
            <p className="font-outfit text-4xl text-center tracking-tighter w-[75%]">{description}</p>
        </div>
    );
}