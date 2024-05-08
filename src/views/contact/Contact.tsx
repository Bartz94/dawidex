import { FormEvent, useState } from "react"
import { Button, Input, Textarea, Typography } from "@material-tailwind/react"
import { PageLayout } from "../components/PageLayout"
import { Footer } from "../components/Footer";

export const Contact = () => {
    const [email, _setEmail] = useState('dawidex@wp.pl');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    return (
        <PageLayout >
            <section className="flex justify-around items-center flex-wrap mx-20 mt-20 mb-[300px] gap-5">

                <div className="flex flex-col justify-center gap-4">
                    <Typography className="text-text-primary text-4xl font-medium text-center" >
                        Jeśli masz pytania, zapraszamy do kontaktu
                    </Typography>
                    <div className="bg-[#f4f4f4] shadow-xl p-6 rounded min-w-[250px]">
                        <div className="flex gap-4">

                            <div className="flex flex-col">
                                <Typography className="text-lg lg:text-3xl ">
                                    Telefon:
                                </Typography>
                                <Typography className="text-lg lg:text-3xl">
                                    Email:
                                </Typography>
                                <Typography className="text-lg lg:text-3xl">
                                    NIP:
                                </Typography>

                            </div>

                            <div className="flex flex-col">
                                <Typography className="text-[#0CBFE1] text-md lg:text-3xl font-bold ">
                                    +48 512-503-512
                                </Typography>
                                <Typography className="text-[#0CBFE1] text-md lg:text-3xl font-bold ">
                                    dawidex@o2.pl
                                </Typography>
                                <Typography className="text-[#0CBFE1] text-md lg:text-3xl font-bold ">
                                    511703981
                                </Typography>
                            </div>
                        </div>

                        {/* <div className="flex gap-4">
                            <Typography className="text-lg lg:text-3xl ">
                                Telefon:
                            </Typography>
                            <Typography className="text-[#0CBFE1] text-md lg:text-3xl font-bold ">
                                +48 512-503-512
                            </Typography>
                        </div>
                        <div className="flex gap-4">
                            <Typography className="text-lg lg:text-3xl">
                                Email:
                            </Typography>
                            <Typography className="text-[#0CBFE1] text-md lg:text-3xl font-bold ">
                                dawidex@o2.pl
                            </Typography>
                        </div>
                        <div className="flex gap-4">
                            <Typography className="text-lg lg:text-3xl">
                                NIP:
                            </Typography>
                            <Typography className="text-[#0CBFE1] text-md lg:text-3xl font-bold ">
                                511703981
                            </Typography>
                        </div> */}
                    </div>
                </div>

                <div className="bg-[#f4f4f4] shadow-xl p-6 rounded">
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
            </section>

            <Footer />
        </PageLayout>
    )
}