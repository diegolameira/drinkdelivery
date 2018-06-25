import React, { Component } from 'react';

import Input from '@/components/Input';

interface Props {
  label?: string;
  placeholder?: string;
}

interface State {
  address: any;
  input: string;
}

export default class GeolocationSearchInput extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  onChangeText = input => {
    this.setState({
      input
    });
  };
  render() {
    return (
      <Input {...this.props} onChangeText={text => this.onChangeText(text)} />
    );
  }
}
