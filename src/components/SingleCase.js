import React, { Component } from "react";

class Case extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      error: "",
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const caseURL = `https://www.brutcommunicatie.nl/wp-json/wp/v2/cases/${id}`;
    fetch(caseURL)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          content: response,
        });
      });
  }

  render() {
    const { content } = this.state;
    // shows all the content, but get error undefined if i try to go down to anything inside the content.acf fields
    // console.log(content.acf) - This shows all the relevant info
    // console.log(content.acf.case_excerpt) - this shows as undefined error

    return (
      <div>
        {/* Can render anything outside of the content.acf object field. but as soon as i try to go inside there. it throws undefined. even though the console picks up the information. 
        essentially if the info is there, I need to loop ( .map() ) through the cases_content and then style it accordingly based on the ACF_FC_LAYOUT output. */}
        <div className="test">{content.status}</div>
        <div className="test">{content.type}</div>
        <div className="test">{content.id}</div>
      </div>
    );
  }
}

export default Case;
