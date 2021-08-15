import React from 'react';
import { connect } from 'react-redux';
import { getNotesOnDirId } from '../../store/selectors/notes';
import NoteItem from './NoteItem';

class ListNotes extends React.Component {
    render () {
        let items = this.props.notes.map(item => (
            <NoteItem key={item.id}
                      item={item}
            />
        ));

        return (
            <ul>
                { items }
            </ul>
        );
    }
}

export default connect((state, props) => ({
    notes: getNotesOnDirId(state, props.dir_id),
}))(ListNotes);