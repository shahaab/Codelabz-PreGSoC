import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import PropTypes from "prop-types";

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('week');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="week">Week</ToggleButton>
      <ToggleButton value="month">Month</ToggleButton>
      <ToggleButton value="year">Year</ToggleButton>
    </ToggleButtonGroup>
  );
}

ColorToggleButton.prototype = {
    background: PropTypes.string,
  };

// import React from "react";
// import ReactDOM from "react-dom";

// class Popular extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         selectedLanguage: 'All'
//       };
      
//       this.updateLanguage = this.updateLanguage.bind(this);
//     }
//     updateLanguage(lang) {
//       this.setState(function() {
//         return {
//           selectedLanguage: lang
//         }
//       });
//     }
      
//     render() {
//       var languages = ['All', 'JavaScript', 'CSS', 'HTML'];
//       return (
//         <ul>
//           <p>selected language: {this.state.selectedLanguage}</p>
//           {languages.map(function(lang) {
//             return <li
//                      style={lang === this.state.selectedLanguage ? {color: 'red'} : null}
//                      onClick = {this.updateLanguage.bind(null, lang)}
//                      >{lang}</li> 
//           },this)}
//         </ul>
//       )
//     }
//   }
  
  
//   ReactDOM.render(<Popular />, document.querySelector(".app"));
  