import React from "react";

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


    return (
        <div className="formcv">
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