import { Card, Typography } from "@material-tailwind/react"

type HomePageCardProps = {
    title: string
    description: string
}

export const HomePageCard: React.FC<HomePageCardProps> = ({ title, description }) => {
    return (
        <Card style={{ width: '300px', height: '300px' }} className="flex justify-center items-center border-2 border-black shadow-xl p-2">
            <Typography className="text-2xl text-secondary font-bold">{title}</Typography>
            <Typography className="text-center">{description}</Typography>
        </Card>
    )
}