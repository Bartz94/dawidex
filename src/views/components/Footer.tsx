import { Typography } from "@material-tailwind/react"

export const Footer = () => {
    return (
        <div className="bg-[#04434f] my-8 flex justify-center items-center">

            <Typography className="text-[#f2f2f2] py-3">Created with</Typography>
            <span className="material-symbols-outlined mx-[3px]">
                favorite
            </span>
            <Typography className="text-[#f2f2f2] py-3">by Bartz94</Typography>
        </div>

    )
}