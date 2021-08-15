import React from 'react';
import { Link } from 'react-router-dom';
import ListDirs from '../dirs/ListDirs';

class Sidebar extends React.Component {
    render () {
        return (
            <div className="sidebar col">
                <Link to="/add_note">
                    Добавить заметку
                </Link>
                <br/>

                <Link to="/add_dir">
                    Добавить категорию
                </Link>
                <br/>

                <ListDirs />
            </div>
        );
    }
}

export default Sidebar;