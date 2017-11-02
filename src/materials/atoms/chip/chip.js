import React from "react";
import imageSrc from './yuna.jpg';

export class Chip extends React.Component {
    render() {
        return (
            <div className="chip">
                <img src={imageSrc} alt="Contact Person"/> Jane Doe
            </div>
        );
    }
}