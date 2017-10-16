import React, {Component} from "react";
import ListItem from "../list_item/list_item";
import "./side_bar.css";

export class LibrarySideBar extends Component {
    render() {
        return (
            <ul className="library-side-nav">
                <ListItem/>
            </ul>
        )
    }
}