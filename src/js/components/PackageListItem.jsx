import React, { Component, PropTypes } from 'react';


class PackageListItem extends Component {
    clickHandler() {
        let { pack, clickHandler } = this.props;

        clickHandler(pack);
    }

    render() {
        let { name, version } = this.props.pack;

        return (
            <div className="pack_list_item" onClick={this.clickHandler.bind(this)}>
                <h3 className="pack_list_item_title">{name}</h3>
                <span className="pack_version">{version}</span>
            </div>
        );
    }
}

PackageListItem.propTypes = {
    pack: PropTypes.shape({
        name:    PropTypes.string.isRequired,
        version: PropTypes.string.isRequired
    }).isRequired,
    clickHandler: PropTypes.func.isRequired
};


export { PackageListItem as default };
