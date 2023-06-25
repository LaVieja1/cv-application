import React from "react";

import Name from "./Name/name";
import Information from "./Information/information";
import Area from "./Area/area";


function FormCV() {
    const [activeButton, setActiveButton] = React.useState(true);
    const componentRef = React.useRef(null);


    return (
        <div className="formcv">
            <div className="border">
                <div className="cv" ref={componentRef}>
                    <Name />
                    <Information />
                    <Area activeButton={"d"} />
                </div>
            </div>
        </div>
    );
}

export default FormCV;