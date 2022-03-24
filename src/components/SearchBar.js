import { useContext, useState } from "react";
import { WordState } from "../WordContext";

function SearchBar() {
    const [selectedWord, setSelectedWord] = useState("");

    const { setWord } = useContext(WordState);
    return (
        <div className="search-div">
            <input type="text" value={selectedWord} onChange={(e) => setSelectedWord(e.target.value)} />
            <button onClick={() => setWord(selectedWord)}>SEND</button>
        </div>
    );
}

export default SearchBar;