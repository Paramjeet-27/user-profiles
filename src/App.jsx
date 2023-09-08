import "./App.css";
import ThemeProvider from "./contexts/ThemeContext";
import AddUser from "./pages/AddUser";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="app">
        <ThemeProvider>
          {/* <Home /> */}
          <AddUser />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
