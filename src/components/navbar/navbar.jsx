import { Link, Route, Routes } from "react-router-dom";
import Azizbek from "../../pages/azizbek";
import Abduxabir from "../../pages/abduxabir";
import "./styles.scss"

export default function Navbar() {
    return (
        <>
            <div className="nav">
                <h6>.</h6>
                <input type="checkbox" id="m" />
                <ul>
                    <div className="labelBox">
                        <label htmlFor="m"><i class="fa-solid fa-xmark"></i></label>
                        <p>.</p>
                    </div>
                    <Link to={"/"}><p>Azizbek</p></Link>
                    <Link to={"/page2"}><p>Abduxabir</p></Link>
                    <Link to={"/"}><p>Pricing</p></Link>
                    <Link to={"/"}><p>Resources</p></Link>
                </ul>
                <label htmlFor="m"><i class="fa-solid fa-bars"></i></label>
                <button>Book a Call</button>
            </div>

            <Routes>
                <Route path="/" element={<Azizbek />} />
                <Route path="/page2" element={<Abduxabir />} />
            </Routes>
        </>
    )
}