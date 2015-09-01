import React, { Component, PropTypes } from 'react';


class PackageInfo extends Component {
    render() {
        let { pack } = this.props;

        let tagNodes = pack.tags.map(tag => {
            return (
                <span key={tag} className="pack_tag">{tag}</span>
            );
        });

        return (
            <section className="pack_info">
                <header className="pack_info_header">
                    <h2 className="pack_info_title">{pack.name}</h2>
                    <div className="pack_tags">
                        {tagNodes}
                    </div>
                    <span className="pack_info_version">1.0.3</span>
                </header>
                <div className="pack_info_desc">
                    {pack.description}
                </div>
            </section>
        );
    }
}

PackageInfo.propTypes = {
    pack: PropTypes.shape({
        name:        PropTypes.string.isRequired,
        version:     PropTypes.string.isRequired,
        tags:        PropTypes.array.isRequired,
        description: PropTypes.string.isRequired
    })
};


export { PackageInfo as default };
