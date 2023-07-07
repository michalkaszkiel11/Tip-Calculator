import Experience from "./comp/Experience";
import YourBill from "./comp/YourBill";
import { useState } from "react";
import TotalBill from "./comp/TotalBill";
import Reset from "./comp/Reset";

function App() {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [percentage, setPercentage] = useState(0);
    const [percentage2, setPercentage2] = useState(0);
    const [bill, setBill] = useState(0);
    function getBill(billValue) {
        setBill(Number(billValue));
    }
    const handleValue1Change = (selectedValue) => {
        setValue1(selectedValue);
        if (percentage !== selectedValue) {
            setPercentage(selectedValue);
        }
    };
    const handleValue2Change = (selectedValue) => {
        setValue2(selectedValue);
        if (percentage2 !== selectedValue) {
            setPercentage2(selectedValue);
        }
    };

    const reset = () => {
        setValue1(0);
        setValue2(0);
        setPercentage(0);
        setBill(0);
    };

    const tip = percentage > 0 ? (bill * percentage) / 100 : 0;
    const tip2 = percentage2 > 0 ? (bill * percentage2) / 100 : 0;
    const total = bill + tip + tip2;

    return (
        <div className="App">
            <Experience getBill={getBill} />
            <YourBill
                newValue={handleValue1Change}
                paragraphText={"How did you like it?"}
            />
            <YourBill
                newValue={handleValue2Change}
                paragraphText={"How your friends like it?"}
            />
            <TotalBill bill={bill} total={total} tip={tip} tip2={tip2} />
            <Reset reset={reset} />
        </div>
    );
}

export default App;
