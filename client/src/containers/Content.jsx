import React from "react";
import { Intro } from "./Intro.jsx";
import { Portfolio } from "./Portfolio.jsx";

export class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <Intro />
                <Portfolio portfolio={this.props.portfolio} />
            </div>
        );
    }
}