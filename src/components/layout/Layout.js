import Header from "./Header";

export default function Layout({ children }) {
    return(
        <>
        <header>
            <Header />
        </header>
        <main>
            {children}
        </main>
        <footer> Powered by : KAT Sortware Solutions</footer>
        </>
    )
}