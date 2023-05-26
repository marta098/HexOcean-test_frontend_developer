import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import OrderInformationPage from "./pages/OrderInformationPage/OrderInformationPage";

function App() {
    return (

        <Router>
            <Routes>
                <Route exact path="/" element={<OrderInformationPage/>}/>
            </Routes>
        </Router>

    );
}

export default App;
