import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import Gallery from "../_components/Gallery";

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