import React, { Component, Fragment } from 'react';

export class FloatingButton extends Component {

    render() {
        return (
            <Fragment>
                <div className="inner-fabs">
                    <div className="fab round" id="fab4" data-tooltip="Create"><i className="material-icons">create</i>
                    </div>
                    <div className="fab round" id="fab3" data-tooltip="Move to inbox"><i
                        className="material-icons">move_to_inbox</i></div>
                    <div className="fab round" id="fab2" data-tooltip="Send"><i className="material-icons">send</i>
                    </div>
                </div>
                <div onClick={this.toggleClass}  className="fab round" id="fab1"><i className="material-icons" id="fabIcon">add</i></div>
            </Fragment>
        )
    }
}
