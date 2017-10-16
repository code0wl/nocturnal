import React, {Component} from "react";
import {LibraryListItem} from "../list_item/list_item";
import "./side_bar.css";

export class LibrarySideBar extends Component {
    render() {
        return (
            <ul className="library-side-nav">
                <LibraryListItem/>
            </ul>
        )
    }
}