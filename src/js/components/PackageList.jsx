import React, { Component, PropTypes } from 'react';
import PackageListItem                 from './PackageListItem.jsx';


class PackageList extends Component {
    render() {
        let { packages, onPackClick } = this.props;

        let packageNodes = packages.map(pack => {
            return (
                <PackageListItem key={pack.name} pack={pack}/>
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
