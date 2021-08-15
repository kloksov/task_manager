import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as action_notes from '../../store/actionCreators/creator_notes';
import * as action_dirs from "../../store/actionCreators/creator_dirs";
import { getDirs } from '../../store/selectors/dirs';
import { getMaxId } from '../../store/selectors/notes';
import TitleNote from './TitleNote';
import DescriptionNote from './DescriptionNote';
import DirNote from './DirNote';

class AddNote extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            dir_id: 0,
            redirect: null,
        };
    }

    /**
     * Изменение заголовка
     * @param {String} title
     */
    changeTitle (title) {
        this.setState({
            title,
        });
    }

    /**
     * Изменение описания
     * @param {String} description
     */
    changeDescription (description) {
        this.setState({
            description,
        });
    }

    /**
     * Изменение категории
     * @param {Number} dir_id
     */
    changeDir (dir_id) {
        this.setState({
            dir_id,
        });
    }

    /**
     * Сохранение заметки
     * @param {Event} e
     */
    saveNote (e) {
        e.preventDefault();

        if (!this.checkForm()) {
            return;
        }

        // Сохранение
        let id = this.props.max_note_id + 1;
        this.props.addNote({
            id,
            title: this.state.title,
            description: this.state.description,
            dir_id: this.state.dir_id,
        });

        // Редирект
        this.setState({
            redirect: '/',
        });
    }

    /**
     * Проверка формы
     * @return {Boolean}
     */
    checkForm () {
        if (!this.state.title) {
            alert('Введите заголовок');
            return false;
        }

        if (!this.state.description) {
            alert('Введите описание');
            return false;
        }

        return true;
    }

    render () {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />;
        }

        return (
            <p>
                <h1>
                    Добавление заметки
                </h1>

                <form onSubmit={e => this.saveNote(e)}>
                    <TitleNote title={this.state.title}
                               changeTitle={value => this.changeTitle(value)}
                    />

                    <DescriptionNote description={this.state.description}
                                     changeDescription={value => this.changeDescription(value)}
                    />

                    <DirNote dir_id={this.state.dir_id}
                             dirs={this.props.dirs}
                             changeDir={value => this.changeDir(value)}
                    />

                    <p>
                        <button type="submit"
                                className="btn"
                        >
                            Сохранить
                        </button>
                    </p>
                </form>
            </p>
        );
    }
}

export default connect(state => ({
    dirs: getDirs(state),
    max_note_id: getMaxId(state),
}), {
    ...action_dirs,
    ...action_notes,
})(AddNote);