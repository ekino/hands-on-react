import React, { Component } from 'react';


class PackageInfo extends Component {
    render() {
        return (
            <section className="pack_info">
                <header className="pack_info_header">
                    <h2 className="pack_info_title">react-motion</h2>
                    <div className="pack_tags">
                        <span className="pack_tag">motion</span>
                        <span className="pack_tag">animation</span>
                        <span className="pack_tag">motion</span>
                        <span className="pack_tag">motion</span>
                    </div>
                    <span className="pack_info_version">1.0.3</span>
                </header>
                <div className="pack_info_desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </section>
        );
    }
}


export { PackageInfo as default };
