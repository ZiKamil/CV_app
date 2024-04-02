import React, {useState} from 'react';
import styles from "./style.module.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";

function App() {
    return (
        <div className={styles.App}>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;
