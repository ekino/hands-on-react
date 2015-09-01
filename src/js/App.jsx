import './../css/app.styl';
import React, { Component } from 'react';
import Header               from './components/Header.jsx';
import Controls             from './components/Controls.jsx';
import PackageList          from './components/PackageList.jsx';
import PackageInfo          from './components/PackageInfo.jsx';
import Footer               from './components/Footer.jsx';


const packages = [
    {
        name:        'react',
        tags:        ['react', 'jsx', 'transformer', 'view'],
        version:     '1.0.3',
        description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.'
    },
    {
        name:        'react-motion',
        version:     '1.0.3',
        tags:        ['react', 'motion'],
        description: 'react-motion'

    },
    {
        name:        'react-bootstrap',
        version:     '1.0.3',
        tags:        ['react', 'bootstrap'],
        description: 'react-bootstrap'
    },
    {
        name:        'react-router',
        version:     '1.0.3',
        tags:        ['react', 'router'],
        description: 'react-router'
    },
    {
        name:        'react-classes',
        version:     '1.0.3',
        tags:        ['react', 'classes'],
        description: 'react-classes'
    },
];


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            packages: packages,
            current:  packages[0]
        };
    }

    onPackSelect(pack) {
        this.setState({
            current: pack
        });
    }

    render() {
        let { packages, current } = this.state;

        return (
            <div>
                <Header title="Hands-On React!"/>
                <Controls items={['star-o', 'heart-o']}/>
                <div className="app_content">
                    <PackageList packages={packages}/>
                    <PackageInfo pack={current}/>
                </div>
                <Footer text="react"/>
            </div>
        );
    }
}


React.render(<App/>, document.getElementById('app'));
