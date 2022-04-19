import "./index.scss";
import "./component/assets/scss/page.scss";
import Header from "./component/blocks/header/header";
import Sidebar from "./component/blocks/sidebar/sidebar";
import Main from "./component/blocks/main/main";

function App() {
    return (
        <div className="page">
            <Header />
            <Sidebar />
            <Main />
        </div>
    );
}

export default App;
