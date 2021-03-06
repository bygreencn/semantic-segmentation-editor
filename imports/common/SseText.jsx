import React from 'react';
import SseMsg from "./SseMsg";


export default class SseText extends React.Component {

    constructor() {
        super();
        SseMsg.register(this);
        this.state = {message: ""};
    }

    componentDidMount() {
        this.onMsg(this.props.msgKey, arg => {
            if (!this.tooLate)
                return arg ? this.setState(arg) : this.setState({message: ""})
        });
    }

    componentWillUnmount() {
        this.tooLate = true;
    }

    render() {
        return (
            <div className={"hflex flex-align-items-center " + (this.props.className || "")}>
                <div>{this.props.init || this.state.message || ""}</div>
            </div>
        );
    }
}