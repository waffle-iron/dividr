import React from 'react';




class FlashMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    let {messageType, message} = this.props;
    let messageClasses = `callout ${messageType} error-message`;
        return (
            <div className={messageClasses} data-closable="">
                {message}
                <button className="close-button" aria-label="Dismiss alert" type="button" data-close="" >
                    &times;
                </button>
            </div>
        )
    }

}

export default FlashMessage;