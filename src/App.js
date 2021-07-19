import "antd/dist/antd.css";
import "./style.scss";
import UsersListComponent from "./components/users-list.component";

function App() {
  return (
    <div className="App">
      <section className="app-container">
        <UsersListComponent />
      </section>
    </div>
  );
}

export default App;
