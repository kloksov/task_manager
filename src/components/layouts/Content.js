import React from 'react';
import Sidebar from "./Sidebar";
import Main from "./Main";

class Content extends React.Component {
    render () {
        return (
            <div className="content">
                <div className="row">
                    <Sidebar />

                    <Main />
                </div>
            </div>
        );
    }
}

export default Content;
