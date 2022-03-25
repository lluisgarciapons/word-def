import { useContext } from "react";
import { InfoState } from "../InfoProvider";
import { WordState } from "../WordContext";

function WordIndex() {
    const { word } = useContext(WordState);
    const { info } = useContext(InfoState);

    return (
        <div>
            {word && <h2>{word}</h2>}
            {info.length !== 0 &&
                info.map((entry, index) => {
                    return (
                        <h3 key={index}>{entry.entry}</h3>
                    );
                })
            }

        </div>
    );
}
export default WordIndex;