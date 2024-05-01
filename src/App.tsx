// components
import Header from "./components/header/Header";
import Lists from "./components/lists/Lists";

// styles
import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Lists />
    </div>
  );
}

export default App;
