import React, { Component } from 'react';
import Header from './Header.js';
import './ShowSubscribers.css';
class ShowSubscribers extends Component {
    return (
        <div>
          <Header heading="Phone Directory" />
          </div>

          {
            this.props.subscribersList.map(sub => {
                return <div key={sub.id} className="grid-container">
                  <span className="grid-item">{sub.name}</span>
                  <span className="grid-item">{sub.phone}</span>
                }
            }
            export default ShowSubscribers;