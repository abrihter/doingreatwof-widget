import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  dg_key: PropTypes.string.isRequired,
  dg_type: PropTypes.string,
  dg_count: PropTypes.string,
  dg_rating: PropTypes.string,
  dg_border_color: PropTypes.string,
}

class DoinGreatWOF extends Component {

  loadDGWidget = (callback) => {
    const existingScript = document.getElementById('dgWidgetWof');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://app.doingreat.io/doingreat-wof.min.js';
      script.id = 'dgWidgetWof';
      document.body.appendChild(script);
      script.onload = () => {
        if (callback) callback();
      };
    }

    if (existingScript && callback) callback();
  };

  componentDidMount(){
    this.loadDGWidget(() => this.setState({ widgetLoaded: true }));
  }

	render() {
    const {dg_key, dg_type, dg_count, dg_rating, dg_border_color} = this.props;
		return (
      <React.Fragment>
        <style>{`.dg-testimonial-item{border-color:${dg_border_color ? dg_border_color : '#00c853'};box-shadow:5px 6px 0 ${dg_border_color ? dg_border_color : '#00c853'}}`}</style>
        <div
          id="doingreat-wof"
          doingreatkey={dg_key}
          dg_type={dg_type ? dg_type : "grid"}
          dg_count={dg_count ? dg_count : "3"}
          dg_rating={dg_rating ? dg_rating : "1"}
        >
        </div>
      </React.Fragment>
		)
	}
}

DoinGreatWOF.propTypes = propTypes;

export default DoinGreatWOF;
