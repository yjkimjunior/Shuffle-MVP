import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Popup extends React.Component {
  renderPopupContent() {
    return (
          <section className="popup">
            <section className={"popup-content " + this.props.style}>
              <div className="popup-close" onClick={this.props.hidePopup}>x</div>
              <div className={"popup-inner " + this.props.style}>
                {this.props.children}
              </div>
            </section>
          </section>
        );
  }

  render() {
    return (
      <section>
        <ReactCSSTransitionGroup transitionName = "fade"
          transitionEnterTimeout={500} transitionLeaveTimeout={500}>
        {
          this.props.status ?
            this.renderPopupContent()
           :
            null
        }
        </ReactCSSTransitionGroup>
      </section>
    );
  }
}

export default Popup;
