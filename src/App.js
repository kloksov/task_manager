import React from 'react';
import Header from './components/layouts/Header';
import Content from './components/layouts/Content';
import Footer from './components/layouts/Footer';

class App extends React.Component {
    componentDidMount () {
        document.title = 'Менеджер заметок';
    }

    render () {
        return (
            <div className="app">
                <Header />

                <Content />

                <Footer />
            </div>
        );
    }
}

export default App;
