import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as action_dirs from '../../store/actionCreators/creator_dirs';
import { getMaxId, getDirOnId } from '../../store/selectors/dirs';
import NameDir from './NameDir';

class AddDir extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            name_dir: '',
            redirect: null,
        };
    }

    /**
     * Изменение имени категории
     * @param {String} name_dir
     */
    changeNameDir (name_dir) {
        this.setState({
            name_dir,
        });
    }

    /**
     * Проверка формы
     * @return {Boolean}
     */
    checkForm () {
        if (!this.state.name_dir) {
            alert('Введите имя категории');
            return false;
        }

        return true;
    }

    /**
     * Сохранение формы
     * @param {Event} e
     */
    submitForm (e) {
        e.preventDefault();

        if (!this.checkForm()) {
            return;
        }

        // Сохранение
        let id = this.props.max_dir_id + 1;
        this.props.addDir({
            id,
            name: this.state.name_dir,
        });

        // Редирект
        this.setState({
            redirect: '/',
        });
    }

    render () {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />;
        }

        return (
            <p>
                <h1>
                    Добавление категории
                </h1>

                <form onSubmit={e => this.submitForm(e)}>
                    <NameDir name_dir={this.state.name_dir}
                             changeNameDir={value => this.changeNameDir(value)}
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

export default connect((state, props) => ({
    max_dir_id: getMaxId(state),
    dir_info: getDirOnId(state, props.dir_id),
}), action_dirs)(AddDir);