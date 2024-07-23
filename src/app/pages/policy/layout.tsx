
import Footer from "@/app/components/home/Footer";
import Navbar from "@/app/components/home/Navbar";



export default function PolicyLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <html lang="en">
                <body>
                    <Navbar />
                    {children}
                    <Footer />
                </body>
            </html>
        </>
    );
}
