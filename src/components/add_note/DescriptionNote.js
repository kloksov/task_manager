import React from 'react';

class DescriptionNote extends React.Component {
    /**
     * Изменение описания
     * @param {Event} e
     */
    changeDescription (e) {
        this.props.changeDescription(e.target.value);
    }

    render () {
        return (
            <p>
                <textarea name="description"
                          placeholder="Описание..."
                          value={this.props.description}
                          onChange={e => this.changeDescription(e)}
                />
            </p>
        );
    }
}

export default DescriptionNote;