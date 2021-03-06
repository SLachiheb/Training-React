import React from 'react';

const asyncComponent = importComponent => {
  return class extends React.Component {
    state = {
      component: null,
    };

    async componentDidMount() {
      const promess = await importComponent();
      this.setState({ component: promess.default });
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  };
};

export default asyncComponent;
