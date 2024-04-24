import { Header } from "./Header"

export const PageLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <div className="h-screen relative">
            <Header />
            {children}
        </div>
    )
}