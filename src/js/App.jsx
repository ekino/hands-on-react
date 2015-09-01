import './../css/app.styl';
import React    from 'react';
import Header   from './components/Header.jsx';
import Controls from './components/Controls.jsx';
import Content  from './components/Content.jsx';
import Footer   from './components/Footer.jsx';


const App = React.createClass({
    render() {
        return (
            <div>
                <Header title="Hands-On React!"/>
                <Controls/>
                <Content/>
                <Footer/>
            </div>
        );
    }
});


React.render(<App/>, document.getElementById('app'));
