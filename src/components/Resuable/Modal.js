import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

class Modal extends React.Component {
  render() {
    return (
      <div
        className="modal fade"
        id={this.props.id}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="dictonaryModal"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content card">
            <div className="modal-header background-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {this.props.title}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{this.props.children}</div>
            {this.props.validationError ? (
              <small className="validation-error">
                All Fields are Mandatory!
              </small>
            ) : (
              ""
            )}
            <div className="modal-footer">
              <Button
                buttonClass="btn btn-secondary btn-close  "
                buttonLabel="Close"
                dataDismiss="modal"
                id="modalCloseId"
              />
              <Button
                buttonClass="btn btn-primary btn-create "
                buttonLabel={this.props.buttonName}
                onClick={this.props.handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Modal;
