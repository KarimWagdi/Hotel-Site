import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Rooms from "../components/Rooms";

export default function RoomsPage() {
    return (
        <>
            <Navbar />
            <div>
                <Rooms />
                <Footer />
            </div>
        </>
    )
}