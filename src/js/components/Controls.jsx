import React, { Component, PropTypes } from 'react';


class Controls extends Component {
    render() {
        let { items } = this.props;

        let itemNodes = items.map(item => {
            return (
                <span key={item} className="app_control">
                    <span className="app_control_circle">
                        <i className={`fa fa-${ item }`}/>
                    </span>
                </span>
            );
        });

        return (
            <aside className="app_controls">
                {itemNodes}
            </aside>
        );
    }
}

Controls.PropTypes = {
    items: PropTypes.arrayOf(
        PropTypes.string
    ).isRequired
};


export { Controls as default };
