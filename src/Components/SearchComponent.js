import React, { Component } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import { MDBBtn } from "mdb-react-ui-kit";
import { postImageUrl } from "./APIHelper";

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log("Handlign for URL {}",this.state.value);
    postImageUrl(this.state.value)
    event.preventDefault();
    this.setState({ value: ""})
  }

  render() {
    return (
      <div>
        <span>
          <MDBInput
            className="resizedTextbox"
            id="typeURL"
            type="url"
            value={this.state.value}
            placeholder="Enter Image URL"
            onChange={this.handleChange}
          />
        </span>
<br></br>
        <span>
          <MDBBtn onClick={this.handleSubmit}>Download</MDBBtn>
        </span>
      </div>
    );
  }
}

export default SearchComponent;
