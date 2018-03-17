import React from 'react';
import MainDesc from './MainDesc';
import fetch from '../api/fetch';

class IndexDesc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch(this.props.id)
      .then((response) => {
        const responseDataArr = [];
        responseDataArr.push(response.data);
        this.setState({ data: responseDataArr });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div id="main_app">
        {this.state.data.map(x => <MainDesc dataDesc={x} key={x.id} />)}
      </div>
    );
  }
}

export default IndexDesc;
