import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <Form action="" onSubmit={handleSubmit}>
          <div className="input-group">
            <InputGroup className="input-group-prepend">
              <input
                type="text"
                className="form-control text-capitalize shadow-sm"
                placeholder="add todo item"
                value={item}
                onChange={handleChange}
              />
              <button type="submit" className="btn btn-primary btn-lg">
                add item
              </button>
            </InputGroup>
          </div>
        </Form>
      </div>
    );
  }
}
