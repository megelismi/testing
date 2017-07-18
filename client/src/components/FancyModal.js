import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

class FancyModal extends Component {
    render() {
        if(this.props.isOpen){
            return (
              <div className="backdrop">
                <CSSTransitionGroup transitionName={this.props.transitionName}>
                  <div className="modal">
                    {this.props.children}
                  </div>
                </CSSTransitionGroup>
              </div>
            );
        } else {
            return <CSSTransitionGroup transitionName={this.props.transitionName} />;
        }
    }
};

export default FancyModal;
