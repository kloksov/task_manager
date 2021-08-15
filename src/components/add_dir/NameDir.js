import React from 'react';

class NameDir extends React.Component {
    /**
     * Изменение имени категории
     * @param {Event} e
     */
    changeNameDir (e) {
        this.props.changeNameDir(e.target.value);
    }

    render () {
        return (
            <p>
                <input type="text"
                       name="name_dir"
                       placeholder="Название категории..."
                       value={this.props.name_dir}
                       onChange={(e) => this.changeNameDir(e)}
                />
            </p>
        );
    }
}

export default NameDir;