import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Bottom.css';

class Bottom extends React.Component {
  render() {
    return (
      <div className="bg-dark fixed-bottom bot">
        ผลงานนี้เป็นส่วนหนึ่งของโปรเจคปี 1 เรื่อง Iot ในวิชา Computer programming
      </div>
    );
  }
}

export default Bottom;