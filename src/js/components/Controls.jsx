import React, { Component } from 'react';


class Controls extends Component {
    render() {
        return (
            <aside className="app_controls">
                <span className="app_control">
                    <span className="app_control_circle">
                        <i className="fa fa-star-o"></i>
                    </span>
                </span>
                <span className="app_control">
                    <span className="app_control_circle">
                        <i className="fa fa-heart-o"></i>
                    </span>
                </span>
            </aside>
        );
    }
}


export { Controls as default };
