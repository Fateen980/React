import React, { Component } from 'react';
// import Columns from './Columns';
import Level    from '../level/Level';

class Column extends Component {
  render(){
      return (

              <div className="container">
                <Level />
                  <div className="columns">
                    <div className="column">column 1</div>
                    <div className="column">column 2</div>
                    <div className="column">column 3</div>
                    <div className="column">column 4</div>
                  </div>
              </div>
    );
  }
}

export default Column;
