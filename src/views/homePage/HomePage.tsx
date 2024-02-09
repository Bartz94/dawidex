import { Typography } from "@material-tailwind/react"
import { useTranslation } from "react-i18next"
import { PageLayout } from "../components/PageLayout"
import { HomePageCard } from "./components/HomePageCard"

export const HomePage = () => {
    const { t } = useTranslation()
    return (
        <PageLayout>
            <div className='h-2/3 flex justify-center items-center bg-[url("../images/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg")] bg-fixed bg-cover '>
                <Typography className="text-3xl lg:text-5xl   text-white  font-bold text-center">
                    Witamy w DAWIDEX - Twój partner w rewitalizacji przestrzeni i tworzeniu wymarzonych wnętrz!
                </Typography>
            </div>


            <div className="my-10 px-4 lg:px-20 flex flex-col lg:flex-row justify-left lg:justify-between items-center">
                <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left mb-8 lg:mb-0">
                    <Typography className="text-3xl lg:text-5xl font-bold">
                        O firmie DAWIDEX
                    </Typography>
                    <Typography className="lg:text-xl text-lg">
                        Jesteśmy doświadczoną firmą remontowo-wykończeniową, która z pasją i precyzją odmienia każde pomieszczenie, nadając mu niepowtarzalny charakter i funkcjonalność.
                    </Typography>
                </div>
                <img src="/images/home-img1.jpg" alt="Opis grafiki" className="w-full lg:w-1/2 h-auto" />
            </div>




            <div className="my-20 px-1 lg:px-20 flex flex-col lg:flex-row justify-center lg:justify-around items-center">
                <img className="w-full lg:w-1/3 shadow-xl mb-8 lg:mb-0" src="/images/charlesdeluvio-LyQi9DS7AEg-unsplash.jpg" alt="Opis grafiki" />

                <div className="p-5 w-full lg:w-2/3 text-center">
                    <Typography className="text-3xl lg:text-5xl font-bold mb-10">
                        Dlaczego warto wybrać DAWIDEX?
                    </Typography>
                    <div className="flex flex-col lg:flex-row gap-5 flex-wrap items-center justify-center ">
                        <HomePageCard
                            title="Doświadczenie w Sztuce Remontu"
                            description="Zespół naszych specjalistów posiada wieloletnie doświadczenie w branży remontowo-wykończeniowej. Dzięki temu możemy zagwarantować najwyższą jakość usług."
                        />
                        <HomePageCard
                            title="Solidność i Terminowość"
                            description="Dbamy o to, aby prace remontowe były prowadzone rzetelnie, zgodnie z planem i z zachowaniem najwyższych standardów. Twoje zadowolenie to nasz priorytet."
                        />
                        <HomePageCard
                            title="Bogactwo Usług"
                            description="Specjalizujemy się w kompleksowych usługach remontowo-wykończeniowych, obejmujących malowanie, układanie podłóg, montaż instalacji oraz wiele innych. Oferujemy pełen zakres prac, abyś mógł powierzyć nam cały proces."
                        />
                        <HomePageCard
                            title="Transparentność Kosztów"
                            description="Pracujemy zgodnie z zasadą pełnej przejrzystości kosztów. Dzięki temu wiesz, na co wydajesz swoje środki, a efekt końcowy zawsze przewyższa oczekiwania."
                        />
                    </div>
                </div>
            </div>



            <div className="my-10 px-20 flex flex-col items-center justify-center flex-wrap grow">
                <Typography className="text-3xl lg:text-5xl font-bold ">
                    Nasze usługi
                </Typography>

                <ul className="list-inside list-none">
                    <li className="flex items-center mb-2">
                        <span className="material-symbols-outlined">
                            done
                        </span>
                        Kompleksowe remonty mieszkań i biur z projektem lub bez
                    </li>
                    <li className="flex items-center mb-2">
                        <span className="material-symbols-outlined">
                            done
                        </span>
                        Kompleksowe remonty łazienek z projektem lub bez
                    </li>
                    <li className="flex items-center mb-2">
                        <span className="material-symbols-outlined">
                            done
                        </span>
                        Kompleksowy montaż kuchni (podłączenie zmywarki, zlewu, okapu itd.)
                    </li>
                    {/* Pozostałe elementy listy */}
                </ul>
            </div>

        </PageLayout>
    )
}