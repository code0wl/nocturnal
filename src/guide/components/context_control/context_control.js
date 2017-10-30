import React, {Component} from "react";
import "./context_control.css";

export class ContextControl extends Component {
    constructor(props) {
        super(props);
        this.mobileMode = this.mobileMode.bind(this);
        this.showPrintStyles = this.showPrintStyles.bind(this);
        this.state = {
            alternativeTheme: false,
        }
    }

    realView(envUrl) {

    }

    showPrintStyles() {

    }

    mobileMode() {

    }

    render() {
        return (
            <div className="guide-controls">
                <nav>
                    <img src={this.props.logo} className="guide-logo" alt="logo"/>
                    <div className="menu-items">
                        <a onClick={this.props.toggleFullScreen}>
                            <i className="mi mi-aspect-ratio"></i>
                        </a>
                        <a onClick={this.props.toggleContrast}>
                            <i className="mi mi-invert-colors"></i>
                        </a>
                        <a onClick={this.realView}>
                            <i className="mi mi-local-printshop"></i>
                        </a>
                        <a onClick={this.mobileMode}>
                            <i className="mi mi-smartphone"></i>
                        </a>
                    </div>
                </nav>
            </div>
        );
    }
}