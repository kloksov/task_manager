import React from 'react';

class DirNote extends React.Component {
    /**
     * Изменение категории
     * @param {Event} e
     */
    changeDir (e) {
        this.props.changeDir(parseInt(e.target.value));
    }

    render () {
        let option_dirs = this.props.dirs.map(el => {
            return (
                <option value={el.id}>
                    {el.name}
                </option>
            );
        });

        return (
            <p>
                <div>Категория:</div>
                <select name="dir_id"
                        value={this.props.dir_id}
                        onChange={e => this.changeDir(e)}
                >
                    { option_dirs }
                </select>
            </p>
        );
    }
}

export default DirNote;