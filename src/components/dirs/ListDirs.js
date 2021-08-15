import React from 'react';
import { connect } from 'react-redux';
import { getDirs } from '../../store/selectors/dirs';
import DirItem from './DirItem';

class ListDirs extends React.Component {
    render () {
        let items = this.props.dirs.map(item => (
            <DirItem key={item.id}
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

export default connect(state => ({
    dirs: getDirs(state),
}))(ListDirs);