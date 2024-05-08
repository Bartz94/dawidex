import { useNavigate } from "react-router"

export const Header = () => {
    const navigate = useNavigate()
    return (
        <div>
            <header className="flex bg-white  justify-around items-center flex-wrap sticky ">
                <div onClick={() => navigate('/')} className="flex place-self-start cursor-pointer">
                    <img src="/logo.png" alt="image" />
                </div>
                <nav>
                    <ul className="flex gap-8">
                        <li >
                            <a className="text-xl lg:text-3xl cursor-pointer hover:text-red-700" onClick={() => navigate('/')}>Strona główna</a>
                        </li>
                        <li>
                            <a className="text-xl lg:text-3xl cursor-pointer hover:text-red-700" onClick={() => navigate('/gallery')}>Galeria</a>
                        </li>
                        <li>
                            <a className="text-xl lg:text-3xl cursor-pointer hover:text-red-700" onClick={() => navigate('/contact')}>Kontakt</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}