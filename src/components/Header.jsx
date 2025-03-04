export default function Header() {
    return (
        <header className="w-full flex items-center justify-between py-4 mt-5">
            <img className="size-[28px] mx-3" src="src/assets/sonnendent_logo.png" alt="Sonnendent logo"/>
            <nav className="font-semibold text-2xl text-sd-blue">
                <ul className="flex gap-8">
                    <li>
                        <a href="">Rólunk</a>
                    </li>
                    <li>
                        <a href="">Kezelések</a>
                    </li>
                    <li>
                        <a href="">Elérhetőség</a>
                    </li>
                </ul>
            </nav>
            <div className="font-semibold text-2xl">
                <button className="text-sd-blue py-3 px-6 rounded-4xl">Bejelentkezés</button>
                <button className="text-white bg-sd-orange py-3 px-6 rounded-4xl">Időpontfoglalás</button>
            </div>
        </header>
    );
}