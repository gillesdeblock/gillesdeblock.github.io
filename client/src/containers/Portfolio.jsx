import React from "react";
import styles from "../../styles/Portfolio.scss";
import { WorkItem } from "../containers/WorkItem.jsx";

// At the moment all these projects are hard-coded, planning to use firebase in the future for this
export class Portfolio extends React.Component {

    render() {
        return (
            <div className="portfolio-container page">
                <div className="recent-work">
                    <h1>Recent Work</h1>
                    <div className="work-list">
                        <WorkList workList={this.props.portfolio.workList} />
                    </div>
                </div>
            </div>
        );
    }
}

function WorkList(props) {
    const workList = 
        props.workList.map((w, index) => {
                return <WorkItem workItem={w} key={w.id} />;
            }
        );
    
    return workList;
}