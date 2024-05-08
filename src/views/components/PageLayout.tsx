import ScrollToTop from "react-scroll-to-top"
import { Header } from "./Header"

export const PageLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <div className="h-screen">
            <Header />
            {children}
            <ScrollToTop className="flex justify-center items-center" smooth color="#0CBFE1" />

        </div>
    )
}