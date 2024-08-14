
import Footer from "@/app/components/home/(layout)/Footer";
import Navbar from "@/app/components/home/(layout)/Navbar";


export default function ArtistListingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <html lang="en">
                <body className="relative">
                    <Navbar/>
                    {children}
                    <Footer/>
                </body>
            </html>
        </>
    );
}
