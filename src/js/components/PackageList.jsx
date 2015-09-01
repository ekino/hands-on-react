import React, { Component } from 'react';


class PackageList extends Component {
    render() {
        return (
            <section className="pack_list">
                <div className="pack_list_item">
                    <h3 className="pack_list_item_title">react</h3>
                    <span className="pack_version">1.0.3</span>
                </div>
                <div className="pack_list_item _is-active">
                    <h3 className="pack_list_item_title">react-motion</h3>
                    <span className="pack_version">1.0.3</span>
                </div>
                <div className="pack_list_item">
                    <h3 className="pack_list_item_title">react-bootstrap</h3>
                    <span className="pack_version">1.0.3</span>
                </div>
                <div className="pack_list_item">
                    <h3 className="pack_list_item_title">react-router</h3>
                    <span className="pack_version">1.0.3</span>
                </div>
                <div className="pack_list_item">
                    <h3 className="pack_list_item_title">react-classes</h3>
                    <span className="pack_version">1.0.3</span>
                </div>
            </section>
        );
    }
}


export { PackageList as default };
