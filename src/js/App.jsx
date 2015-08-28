import './../css/app.styl';
import React       from 'react';
import Header      from './components/Header.jsx';
import Controls    from './components/Controls.jsx';
import PackageList from './components/PackageList.jsx';
import PackageInfo from './components/PackageInfo.jsx';


const App = React.createClass({
    render() {
        return (
            <div>
                <Header/>
                <Controls/>
                <div className="app_content">
                    <PackageList/>
                    <PackageInfo/>
                </div>
            </div>
        );
    }
});


React.render(<App/>, document.getElementById('app'));
