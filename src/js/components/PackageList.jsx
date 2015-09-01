import React, { Component, PropTypes } from 'react';


class PackageList extends Component {
    render() {
        let { packages } = this.props;

        let packageNodes = packages.map(pack => {
            return (
                <div key={pack.name} className="pack_list_item">
                    <h3 className="pack_list_item_title">{pack.name}</h3>
                    <span className="pack_version">{pack.version}</span>
                </div>
            );
        });

        return (
            <section className="pack_list">
                {packageNodes}
            </section>
        );
    }
}

PackageList.propTypes = {
    packages: PropTypes.arrayOf(
        PropTypes.shape({
            name:    PropTypes.string.isRequired,
            version: PropTypes.string.isRequired
        })
    ).isRequired
};


export { PackageList as default };
