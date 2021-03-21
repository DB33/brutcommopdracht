import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../sass/cases.sass";

class Cases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caseData: [],
      error: "",
    };
  }

  componentDidMount() {
    const caseURL = "https://www.brutcommunicatie.nl/wp-json/wp/v2/cases";
    fetch(caseURL)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          caseData: response,
        });
      });
  }

  render() {
    const { caseData } = this.state;
    const caseInfo = caseData.map((singleCase) => {
      return (
        // Returning a clickable item per case that is in the array, rendering the title and an image, in this case a static image taken from the website, as I couldnt get any information out of the acf field.
        <div key={singleCase.id} className="case-item">
          <Link to={`/case/${singleCase.id}`}>
            {/* src would be {singleCase.acf.cases_content.case_banner_image.sizes.thumbnail} if it would show the data.... but it doesnt. 
            I would ofcourse make this a const in caseImage.
            */}
            <img
              src="https://brutcommunicatie.nl/wp-content/uploads/2020/10/Schermafbeelding-2020-11-05-om-11.21.45-699x305.png"
              alt=""
            />
            <h3>{singleCase.acf.case_heading}</h3>
          </Link>
        </div>
      );
    });

    return (
      <div>
        {caseData.length ? <div className="container">{caseInfo}</div> : ""}
      </div>
    );
  }
}

export default Cases;
