import './../css/app.styl';
import React    from 'react';
import Header   from './components/Header.jsx';
import Controls from './components/Controls.jsx';
import Content  from './components/Content.jsx';
import Footer   from './components/Footer.jsx';

const packages = [
    { name: 'react',           version: '1.0.3' },
    { name: 'react-motion',    version: '1.0.3' },
    { name: 'react-bootstrap', version: '1.0.3' },
    { name: 'react-router',    version: '1.0.3' },
    { name: 'react-classes',   version: '1.0.3' },
];

const App = React.createClass({
    render() {
        return (
            <div>
                <Header title="Hands-On React!"/>
                <Controls items={['star-o', 'heart-o']}/>
                <Content packages={packages}/>
                <Footer text="react"/>
            </div>
        );
    }
});


React.render(<App/>, document.getElementById('app'));
