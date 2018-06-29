import React, { Component } from 'react';

import { throttle } from '@/shared/Helpers';
import Input from '@/components/Input';
import { List } from '@/components/List';

import { Place, Suggestion } from './Interfaces';
import { getPlaceSuggestionsByTerm, getPlaceDetails } from './Helpers';

import { Wrapper } from './Form.styles';

interface Props {
  googleKey: string;
  label?: string;
  placeholder?: string;
  onUpdate: (place: Place) => void;
}

interface State {
  suggestions: Suggestion[];
}

export class AddressForm extends Component<Props, State> {
  lazySearch: (term?: string) => void;

  constructor(props: Props) {
    super(props);
    this.lazySearch = throttle(this.search, 400);
  }

  search = (term: string) => {
    if (!term || term.length <= 2) return;
    getPlaceSuggestionsByTerm(this.props.googleKey, term).then(suggestions =>
      this.setState({
        suggestions
      })
    );
  };

  onSelect = (placeId: string) => {
    this.setState({
      suggestions: []
    });
    getPlaceDetails(this.props.googleKey, placeId)
      .then(selected => {
        this.setState({
          value: selected.title
        });
        return selected;
      })
      .then(this.props.onUpdate);
  };

  render() {
    const { suggestions, value } = this.state || {};
    const items =
      suggestions &&
      suggestions.length > 0 &&
      suggestions.map(({ placeId, ...rest }) => ({
        ...rest,
        // replace id with placeId for <List />
        id: placeId
      }));
    return (
      <Wrapper>
        <Input
          {...this.props}
          value={value}
          onChangeText={text => this.lazySearch(text)}
        />
        {items && <List items={items} onSelect={this.onSelect} />}
      </Wrapper>
    );
  }
}
