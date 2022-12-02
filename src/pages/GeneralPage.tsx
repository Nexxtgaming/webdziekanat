import * as React from 'react';

import GeneralCard from "../components/GeneralCard";
import DataValidCard from "../components/DataValidCard";
import AverageCard from "../components/AverageCard";

const GeneralPage = () => {
    return (
        <div style={{marginTop: "200px", marginLeft: "24%"}}>
            <GeneralCard/>
            <div style={{marginTop: "50px"}}>
                <DataValidCard />
            </div>
            <div style={{marginTop: "50px"}}>
                <AverageCard/>
            </div>
        </div>
    )
}

export default GeneralPage;