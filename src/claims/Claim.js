import React from "react";
import "./claim.css";
import jsonData from "../json/claims.json";

class Claim extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      claims: [],
      havingClaims: false
    };
  }

  componentWillMount() {
    const loadData = JSON.parse(JSON.stringify(jsonData));
    console.log(loadData);
    this.setState({
      data: loadData
    });
  }

  handleChange = e => {
    console.log(e.target.value);
    const claims = this.state.data.filter(l => {
      return l.user_id.match(e.target.value);
    });
    this.setState({
      claims: claims,
      havingClaims: true
    });
    console.log(claims);
  };
  render() {
    const havingClaims = this.state.havingClaims;
    return (
      <div className="App">
        <h1>CLAIM DETAILS </h1>
        <select onChange={this.handleChange}>
          <option value="" selected disabled hidden>
            Select User
          </option>
          {this.state.data.map(function(claim, key) {
            return (
              <option key={key} value={claim.user_id}>
                {claim.user_id}
              </option>
            );
          })}
        </select>
        {havingClaims ? (
          <div className="tableOrder">
            <table>
              <tr>
                <th>ClaimId</th>
                <th>UserId</th>
                <th>ClaimName</th>
                <th>ClaimAmount</th>
                <th>ClaimSubmitedDate</th>
                <th>HospitalName</th>
                <th>ClaimStatus</th>
              </tr>
              {this.state.claims.map((d, index) => (
                <tr>
                  <td>{d.claim_id}</td>
                  <td>{d.user_id}</td>
                  <td>{d.claim_name}</td>
                  <td>{d.claim_amount}</td>
                  <td>{d.claim_submited_date}</td>
                  <td>{d.hospital_name}</td>
                  <td>{d.claim_status}</td>
                </tr>
              ))}
            </table>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Claim;
