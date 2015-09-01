import React, { Component } from 'react';
import PackageList          from './PackageList.jsx';
import PackageInfo          from './PackageInfo.jsx';


class Content extends Component {
    render() {
        return (
            <div className="app_content">
                <PackageList {...this.props}/>
                <PackageInfo {...this.props}/>
            </div>
        );
    }
}


export { Content as default };
