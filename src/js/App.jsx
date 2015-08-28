import './../css/app.styl';
import React, { Component } from 'react';
import Header               from './components/Header.jsx';
import Controls             from './components/Controls.jsx';
import PackageList          from './components/PackageList.jsx';
import PackageInfo          from './components/PackageInfo.jsx';
import Footer               from './components/Footer.jsx';


class App extends Component {
    render() {
        return (
            <div>
                <Header title="Hands-On React!"/>
                <Controls items={['star-o', 'heart-o']}/>
                <div className="app_content">
                    <PackageList/>
                    <PackageInfo/>
                </div>
                <Footer/>
            </div>
        );
    }
}


React.render(<App/>, document.getElementById('app'));
