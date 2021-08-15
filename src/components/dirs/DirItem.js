import React from 'react';
import { Link } from 'react-router-dom';

class DirItem extends React.Component {
    render () {
        let item = this.props.item;

        return (
            <li>
                <Link to={'/dir/'+ item.id}>
                    { item.name }
                </Link>
            </li>
        );
    }
}

export default DirItem;