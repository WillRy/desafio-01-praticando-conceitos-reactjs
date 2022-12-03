import "./global.css";
import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Tasks";

function App() {
    return (
        <div>
            <Header />
            <div className="container">
                <Tasks />
            </div>
        </div>
    );
}

export default App;
