import React from 'react';

class NoteItem extends React.Component {
    render () {
        let item = this.props.item;

        return (
            <li>

                <b>{ item.title }</b><br/>
                <p>
                    { item.description }
                </p>
            </li>
        );
    }
}

export default NoteItem;