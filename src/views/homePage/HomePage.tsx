import { Typography } from "@material-tailwind/react"
import { useTranslation } from "react-i18next"
import { PageLayout } from "../components/PageLayout"
import { HomePageCard } from "./components/HomePageCard"
import { FormEvent, useState } from "react"
import { Button, Input, Textarea } from "@material-tailwind/react"
import { Footer } from "../components/Footer"

export const HomePage = () => {
    const { t } = useTranslation()
    const [email, _setEmail] = useState('dawidex@wp.pl');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    return (
        <PageLayout>
            <div className='h-2/3 flex justify-center items-center bg-[url("../images/home-img-0.jpg")] bg-fixed bg-cover '>
                <Typography className="text-3xl lg:text-5xl text-white  font-bold text-center">
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
                <img src="/images/home-img1.jpg" alt="Opis grafiki" className="w-full lg:w-1/2 h-auto shadow-xl" />
            </div>




            <div className="my-20 px-1 lg:px-20 flex flex-col lg:flex-row justify-center lg:justify-around items-center">
                <img className="w-full lg:w-1/3 shadow-xl mb-8 lg:mb-0" src="/images/home-img2.jpg" alt="Opis grafiki" />

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
                <Typography className="text-3xl lg:text-5xl font-bold">
                    Nasze usługi
                </Typography>

                <ul className="list-inside list-none my-10">
                    <li className="flex text-sm lg:text-xl items-center mb-2">
                        <span className="material-symbols-outlined mx-2 text-red">
                            done
                        </span>
                        Kompleksowe remonty mieszkań i biur z projektem lub bez
                    </li>
                    <li className="flex text-sm lg:text-xl items-center mb-2">
                        <span className="material-symbols-outlined mx-2 text-red">
                            done
                        </span>
                        Kompleksowe remonty łazienek z projektem lub bez
                    </li>
                    <li className="flex text-sm lg:text-xl items-center mb-2">
                        <span className="material-symbols-outlined mx-2 text-red">
                            done
                        </span>
                        Kompleksowy montaż kuchni (podłączenie zmywarki, zlewu, okapu itd.)
                    </li>
                    <li className="flex text-sm lg:text-xl items-center mb-2">
                        <span className="material-symbols-outlined mx-2 text-red">
                            done
                        </span>
                        Usługi elektryczne, glazurnicze, hydrauliczne
                    </li>
                    <li className="flex text-sm lg:text-xl items-center mb-2">
                        <span className="material-symbols-outlined mx-2 text-red">
                            done
                        </span>
                        Malowanie, szpachlowanie, murowanie ścian, montaż suchych zabudów (ścianki, sufity z karton gipsu)
                    </li>
                    <li className="flex text-sm lg:text-xl items-center mb-2">
                        <span className="material-symbols-outlined mx-2 text-red">
                            done
                        </span>
                        Układanie klinkierów, obsadzenie drzwi wen/zew, tynkowanie (gipsowe, cementowe), wymiana okien, docieplania
                    </li>
                    <li className="flex text-sm lg:text-xl items-center mb-2">
                        <span className="material-symbols-outlined mx-2 text-red">
                            done
                        </span>
                        Czyszczenie metodą mechaniczną, mycie elewacji
                    </li>
                    <li className="flex text-sm lg:text-xl items-center mb-2">
                        <span className="material-symbols-outlined mx-2 text-red">
                            done
                        </span>
                        Czyszczenie kostki brukowej, czyszczenie elementów plastikowych, czyszcze paneli słonecznych
                    </li>
                </ul>
            </div>


            <div className="my-10 px-20 flex flex-col items-center justify-center">
                <Typography className="text-3xl lg:text-5xl font-bold mb-10">
                    Kontakt
                </Typography>

                <div className="flex flex-col items-center justify-center">
                    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-2" >
                        <Input
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            label="Temat"
                            className="w-[280px] lg:w-[500px]"
                        />
                        <Textarea
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            label="Wiadomość"
                            rows={10}
                        />
                        <Button className="bg-[#0CBFE1]" type="submit">Wyślij</Button>
                    </form>
                </div>

                <div className="flex  items-center justify-center gap-4 mt-5">
                    <Typography className="text-lg lg:text-3xl ">
                        Telefon:
                    </Typography>
                    <Typography className="text-[#0CBFE1] text-md lg:text-3xl font-bold ">
                        +48 512-503-512
                    </Typography>
                </div>

                <div className="flex  items-center justify-center gap-4 mt-5">
                    <Typography className="text-lg lg:text-3xl">
                        Email:
                    </Typography>
                    <Typography className="text-[#0CBFE1] text-md lg:text-3xl font-bold ">
                        dawidex@o2.pl
                    </Typography>

                </div>
            </div>

            <Footer />


        </PageLayout>
    )
}