
export const Header = () => {
    return (
        <header className="flex bg-white  justify-around items-center flex-wrap sticky">
            <div className="flex place-self-start">
                <img src="/logo.png" alt="image" />
            </div>
            <nav>
                <ul className="flex gap-8">
                    <li >
                        <a className="text-3xl hover:text-red-700" href="#">Strona główna</a>
                    </li>
                    <li>
                        <a className="text-3xl hover:text-red-700" href="#">Galeria</a>
                    </li>
                    <li>
                        <a className="text-3xl hover:text-red-700" href="#">Kontakt</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}