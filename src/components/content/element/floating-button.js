import React, { Component, Fragment } from 'react';

export class FloatingButton extends Component {
    toggleClass(){
        let fab1 = document.getElementById('fab1');
        let innerFabs = document.getElementsByClassName('float-button')[0];
        innerFabs.classList.toggle('show')
    }
    render() {
        return (
            <Fragment>
                <div className="float-button">
                    <div className="float-button--options" id="fab4" data-tooltip="Create"><i className="la la-search"></i>
                    </div>
                    <div className="float-button--options" id="fab3" data-tooltip="Move to inbox"><i className="la la-plus"></i></div>
                </div>
                <div onClick={this.toggleClass}  className="float-button--options" id="fab1"><i className="la la-reorder"></i></div>
            </Fragment>
        )
    }
}
