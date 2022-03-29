import { useContext } from "react";
import { InfoProvider } from "../InfoProvider";
import { WordState } from "../WordContext";
import WordIndex from "./WordIndex";

function Home() {
    const context = useContext(WordState);
    return (
        <div>
            {!context?.word ? <h3>Write a word to start</h3> : <InfoProvider><WordIndex /></InfoProvider>}
        </div>
    );
}

export default Home;