import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react"
import { useTranslation } from "react-i18next"
import { Header } from "../components/Header"
import { PageLayout } from "../components/PageLayout"
import { HomePageCard } from "./components/HomePageCard"

export const HomePage = () => {
    const { t } = useTranslation()
    return (
        <PageLayout>
            <div className='h-2/3 flex justify-center items-center bg-[url("../public/images/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg")] bg-fixed bg-cover '>
                <Typography className="text-5xl text-white  font-bold text-center">
                    Witamy w DAWIDEX - Twój partner w rewitalizacji przestrzeni i tworzeniu wymarzonych wnętrz!
                </Typography>
            </div>


            <div className=" my-10 px-20 flex justify-between flex-wrap grow">
                <div className="w-140 flex flex-col  justify-center">
                    <Typography className="text-5xl font-bold">
                        O firmie DAWIDEX
                    </Typography>
                    <Typography className="text-2xl">
                        Jesteśmy doświadczoną firmą remontowo-wykończeniową, która z pasją i precyzją odmienia każde pomieszczenie, nadając mu niepowtarzalny charakter i funkcjonalność.
                    </Typography>
                </div>
                <img width={'700px'} src="../public/images/grant-lemons-jTCLppdwSEc-unsplash (1).jpg" />
            </div>



            <div className="my-20 flex justify-around align-center flex-wrap grow px-40">

                <img width={550} src="../public/images/charlesdeluvio-LyQi9DS7AEg-unsplash.jpg" />


                <div className="w-1/2 p-5" >
                    <Typography className="text-5xl font-bold mb-10">
                        Dlaczego warto wybrać DAWIDEX?
                    </Typography>
                    <div className="flex gap-5 flex-wrap">
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

        </PageLayout>
    )
}