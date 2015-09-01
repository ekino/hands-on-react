import './../css/app.styl';
import React, { Component } from 'react';
import Header               from './components/Header.jsx';
import Controls             from './components/Controls.jsx';
import PackageList          from './components/PackageList.jsx';
import PackageInfo          from './components/PackageInfo.jsx';
import Footer               from './components/Footer.jsx';
import Api                  from './Api';


const packages = [
    { name: 'react',           version: '1.0.3' },
    { name: 'react-motion',    version: '1.0.3' },
    { name: 'react-bootstrap', version: '1.0.3' },
    { name: 'react-router',    version: '1.0.3' },
    { name: 'react-classes',   version: '1.0.3' },
];

let currentPackage = {
    name:        'react',
    version:     '1.0.3',
    tags:        ['react', 'jsx', 'transformer', 'view'],
    description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.'
};


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            packages: [],
            current:  null
        };
    }

    render() {
        return (
            <div>
                <Header title="Hands-On React!"/>
                <Controls items={['star-o', 'heart-o']}/>
                <div className="app_content">
                    <PackageList packages={packages}/>
                    <PackageInfo pack={currentPackage}/>
                </div>
                <Footer text="react"/>
            </div>
        );
    }
}


React.render(<App/>, document.getElementById('app'));
