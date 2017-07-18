import React, { Component } from 'react';
import FancyModal from './FancyModal';

class FancyModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    }
  }

  openModal()  {
    this.setState({ isModalOpen: true });
  }

  closeModal () {
    this.setState({ isModalOpen: false });
  }

  render() {
    return (
      <div className="app">
        <h1>App</h1>
        <button onClick={this.openModal.bind(this)}>Open modal</button>
        <FancyModal isOpen={this.state.isModalOpen}
               transitionName="modal-anim">
          <h3>My Modal</h3>
          <div className="body">
            <p>This is the modal&apos;s body.</p>
          </div>
          <button onClick={this.closeModal.bind(this)}>Close modal</button>
        </FancyModal>
      </div>
    );
  }
};

export default FancyModalContainer;
