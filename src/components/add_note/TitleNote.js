import React from 'react';

class TitleNote extends React.Component {
    /**
     * Изменение заголовка
     * @param {Event} e
     */
    changeTitle (e) {
        this.props.changeTitle(e.target.value);
    }

    render () {
        return (
            <p>
                <input type="text"
                       name="title"
                       placeholder="Заголовок..."
                       value={this.props.title}
                       onChange={e => this.changeTitle(e)}
                />
            </p>
        );
    }
}

export default TitleNote;