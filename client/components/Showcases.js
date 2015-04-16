import React from "react";
import Reflux from "reflux";
import { RouteHandler } from "react-router";
import Actions from "../actions";
import Showcase from "./Showcase";

export default React.createClass({

    render() {
            
        let { cases } = this.props;
        return (
            <div>
            {cases.map(c => {
                return (<Showcase key={c.id} c={c} />);
            })}
            </div>
        );
    }
});
