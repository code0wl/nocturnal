import React, {Component} from "react";
import "./context_control.css";

export class ContextControl extends Component {

    constructor(props) {
        super(props);
        this.mobileMode = this.mobileMode.bind(this);
        this.showPrintStyles = this.showPrintStyles.bind(this);
        this.state = {
            alternativeTheme: false
        }
    }

    setFullScreen() {

    }

    showPrintStyles() {

    }

    mobileMode() {

    }

    render() {
        return (
            <div className="guide-controls">
                <nav>
                    <a onClick={this.showPrintStyles}>
                        <i className="mi mi-aspect-ratio"></i>
                    </a>
                    <a onClick={this.props.toggleContrast}>
                        <i className="mi mi-invert-colors"></i>
                    </a>
                    <a onClick={this.showPrintStyles}>
                        <i className="mi mi-local-printshop"></i>
                    </a>
                    <a onClick={this.mobileMode}>
                        <i className="mi mi-smartphone"></i>
                    </a>
                </nav>
            </div>
        );
    }
}