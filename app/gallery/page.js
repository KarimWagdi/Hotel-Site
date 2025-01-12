import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";

export default function GalleryPage() {
    return (
        <>
            <Navbar />
            <div>
                <Gallery />
                <Footer />
            </div>
        </>
    )
}