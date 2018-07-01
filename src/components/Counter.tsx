import React, { Component } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styl, Theme } from '@/Theme';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { debounce } from '@/shared/Helpers';

const colors = new Theme();

interface Props {
  max?: number;
  min?: number;
  onUpdateCount?: (count: number) => void;
}
interface State {
  count: number;
}
export default class Counter extends Component<Props, State> {
  onUpdateCounter: () => void;
  constructor(props: Props) {
    super(props);
    this.state = {
      count: props.min || 0
    };
    this.onUpdateCounter = debounce(props.onUpdateCount, 200);
  }

  increment = () => {
    const { max } = this.props;
    this.setState(
      ({ count }) => ({
        count: !max || count < max ? count + 1 : count
      }),
      () => this.onUpdateCounter(this.state.count)
    );
  };

  decrement = () => {
    const { min } = this.props;
    this.setState(
      ({ count }) => ({
        count: count > (min || 0) ? count - 1 : count
      }),
      () => this.onUpdateCounter(this.state.count)
    );
  };

  update = (count: string) => {
    this.setState(
      {
        count: !count ? 0 : parseInt(count)
      },
      () => this.onUpdateCounter(this.state.count)
    );
  };

  render = () => (
    <Wrapper>
      <Button
        disabled={parseInt(this.state.count) <= parseInt(this.props.min || 0)}
        outline
        danger
        onPress={this.decrement}
      >
        <Icon name="minus" size={30} color={colors.danger} />
      </Button>
      <Spacing>
        <Input
          type="numeric"
          align="center"
          value={this.state.count + ''}
          onChangeText={this.update}
          selectTextOnFocus={true}
        />
      </Spacing>
      <Button
        disabled={parseInt(this.state.count) >= parseInt(this.props.max)}
        onPress={this.increment}
      >
        <Icon name="plus" size={30} color={colors.foreground} />
      </Button>
    </Wrapper>
  );
}

const Wrapper = styl(styled.View)`
  flex-direction: row;
`;

const Spacing = styled.View`
  padding: 0 10px;
`;
