import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render () {
        return (
            <header className="header">
                <div className="row">
                    <div className="col">
                        <Link to="/"
                              className="home-link"
                        >
                            <h1>
                                Менеджер заметок
                            </h1>
                        </Link>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;