import React, { Component, PropTypes } from 'react';


class Header extends Component {
    render() {
        let { title } = this.props;

        return (
            <header className="app_header">
                {title}
            </header>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export { Header as default };
