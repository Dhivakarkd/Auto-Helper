import React, { Component } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import { MDBBtn, MDBBtnGroup ,MDBRadio} from "mdb-react-ui-kit";
import { postImageUrl } from "./APIHelper";
import { Combobox } from "react-widgets";

class SearchComponent extends Component {
  envConstant = ["dev", "test"];

  constructor(props) {
    super(props);
    this.state = { value: "", env: "dev" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  setEnv(selectval) {
    this.setState({ env: selectval });
  }

  handleSubmit(event) {
    console.log("Handling for URL {}", this.state.value);
    postImageUrl(this.state.value);
    event.preventDefault();
    this.setState({ value: "" });
  }

  render() {
    return (
      <div>
    

        <MDBInput
          className="resizedTextbox"
          id="typeURL"
          type="url"
          value={this.state.value}
          placeholder="Enter Image URL"
          onChange={this.handleChange}
        />

        <br></br>

        <MDBBtn onClick={this.handleSubmit}>Download</MDBBtn>

<br/>
<br/>
<MDBBtnGroup onButtonClick={c => console.log(c)}>
      <MDBRadio btn btnColor='secondary' id='btn-radio' name='options' wrapperTag='span' label='Radio button' />
      <MDBRadio
        btn
        btnColor='secondary'
        id='btn-radio2'
        name='options'
        wrapperClass='mx-2'
        wrapperTag='span'
        label='Radio button'
        defaultChecked
      />
    </MDBBtnGroup>


      </div>
    );
  }
}

export default SearchComponent;
