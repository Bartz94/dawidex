import { Typography } from "@material-tailwind/react"
import { useTranslation } from "react-i18next"

export const HomePage = () => {
    const { t } = useTranslation()
    return (
        <Typography> {t('hello')}   </Typography>
    )
}