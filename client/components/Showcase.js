import React from "react";
import Reflux from "reflux";
import { RouteHandler } from "react-router";
import Actions from "../actions";

export default React.createClass({

    render() {    
        
        let { c } = this.props;

        return (
            <div>
                {c.name}
            </div>
        );
    }
});
