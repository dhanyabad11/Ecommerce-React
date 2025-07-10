import "./App.css";
import EcommerceNavbar from "./components/Navbar/Navbar";

function App() {
    return (
        <>
            <EcommerceNavbar />
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-12">
                        <h1>Welcome to ShopHub</h1>
                        <p>Your one-stop destination for all your shopping needs!</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
