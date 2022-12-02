import * as React from 'react';

import GeneralCard from "../components/GeneralCard";
import DataValidCard from "../components/DataValidCard";
import AverageCard from "../components/AverageCard";

const GeneralPage = () => {
    return (
        <div style={{marginTop: "200px", margin: "100px auto"}}>
            <GeneralCard/>
            <div style={{marginTop: "50px", margin: "50px auto"}}>
                <DataValidCard/>
            </div>
            <div style={{marginTop: "50px", margin: "50px auto"}}>
                <AverageCard/>
            </div>
        </div>
    )
}

export default GeneralPage;