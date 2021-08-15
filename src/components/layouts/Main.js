import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import Home from '../pages/Home';
import AddNote from '../add_note/AddNote';
import AddDir from '../add_dir/AddDir';
import ListNotes from '../notes/ListNotes';

class Main extends React.Component {
    render () {
        return (
            <main className="main col">
                <Switch>
                    <Route path="/add_note">
                        <AddNote />
                    </Route>

                    <Route path="/add_dir">
                        <AddDir />
                    </Route>

                    <Route path="/dir/:id" render={props => (
                        <ListNotes dir_id={props.match.params.id} />
                    )} />

                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </main>
        );
    }
}

export default Main;