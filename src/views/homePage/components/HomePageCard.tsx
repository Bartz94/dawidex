import { Card, Typography } from "@material-tailwind/react"

type HomePageCardProps = {
    title: string
    description: string
}

export const HomePageCard: React.FC<HomePageCardProps> = ({ title, description }) => {
    return (
        <Card style={{ width: '300px', height: '300px' }} className="flex border-2 border-black p-6 shadow-xl">
            <Typography className="text-2xl text-secondary font-bold text-center my-1">{title}</Typography>
            <Typography className="text-center">{description}</Typography>
        </Card>
    )
}