import React from 'react';

const SendMessage = () => {
    return (
        <form>
            <div className="type_msg row">
                <div className="input_msg_write col-sm-9">
                    <input type="text" className="write_msg" placeholder="Message..." />
                </div>
                <div className="col-sm-3 text-center">
                    <button className="msg_send_btn mt-3" type="button">
                        send
                    </button>
                </div>
            </div>
        </form>
    );
};

export default SendMessage;