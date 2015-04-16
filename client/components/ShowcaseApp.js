import React from "react";
import Reflux from "reflux";
import { RouteHandler } from "react-router";
import Actions from "../actions";
import ShowCaseStore from "../stores/ShowCaseStore";

export default React.createClass({

    mixins: [
        Reflux.connect(ShowCaseStore, "cases"),
    ],

    getInitialState() {
        return {
            cases: ShowCaseStore.getShowcases(),
        }
    },

    render() {
        
        let { cases } = this.state;

        return (
            <RouteHandler {...this.state} />
        );
    },

    componentDidMount() {
        Actions.loadCases();
    }
});