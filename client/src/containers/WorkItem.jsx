import React from "react";
import styles from "../../styles/WorkItem.scss";

export class WorkItem extends React.Component {
    render() {
        // Note: it's important to write `...` instead of '...' due the ${...}
        let copy = require(`../img/project-screenshots/${this.props.workItem.screenshotUrl}`);

        return (
            <div className="work-item">
                <div className="content">
                    <h3 className="title">{this.props.workItem.title}</h3>
                    <img
                        className="screenshot"
                        src={copy}
                        alt=""/>
                    <h4>Description</h4>
                    <p>{this.props.workItem.description}</p>
                    <a href={this.props.workItem.linkUrl} target="_blank">View the application here</a>
                </div>
            </div>
        );
    }
}