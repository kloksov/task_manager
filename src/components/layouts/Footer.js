import React from 'react';

class Footer extends React.Component {
    render () {
        return (
            <footer className="footer">
                <div className="row">
                    <div>
                        <span>Github: </span>
                        <a href="https://github.com/kloksov/task_manager/">
                            <code>
                                /kloksov/task_manager/
                            </code>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;