import React from "react";
import { useReactToPrint } from "react-to-print";

import Name from "./Name/name";
import Information from "./Information/information";
import Area from "./Area/area";
import Skills from "./Skills/skills";
import Education from "./Education/education";
import Experience from "./Experience/experience";

function FormCV() {
    const [activeButton, setActiveButton] = React.useState(true);
    const componentRef = React.useRef(null);
    let setPromiseResolve = React.useRef(null);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        onAfterPrint: () => setActiveButton(true),
        onBeforeGetContent: () => handleOnBeforeGetContent(),
    });

    React.useEffect(() => {
        if (activeButton === false && setPromiseResolve.current) {
            setPromiseResolve.current();
        }
    }, [activeButton, setPromiseResolve.current]);

    const handleOnBeforeGetContent = () => {
        return new Promise((resolve) => {
            setActiveButton(false);

            setPromiseResolve.current = resolve;
        });
    };

    return (
        <div className="formcv">
            <button className="print" onClick={handlePrint}><i className="fas fa-print"></i></button>

            <div className="border">
                <div className="cv" ref={componentRef}>
                    <Name />
                    <Information />
                    <Area activeButton={"d"} />
                    <Skills activeButton={activeButton} />
                    <Education activeButton={activeButton} />
                    <Experience activeButton={activeButton} />
                </div>
            </div>
        </div>
    );
}

export default FormCV;