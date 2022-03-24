import { useContext } from "react";
import { InfoProvider } from "../InfoProvider";
import { WordState } from "../WordContext";
import WordIndex from "./WordIndex";

function Home() {
    const { word } = useContext(WordState);
    return (
        <div>
            {!word ? <h3>Write a word to start</h3> : <InfoProvider><WordIndex /></InfoProvider>}
        </div>
    );
}

export default Home;