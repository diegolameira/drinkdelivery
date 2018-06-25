import React, { Component } from 'react';
import { debounce } from 'lodash-es';

import Input from '@/components/Input';
import { styl } from '@/configs/theme';
import styled from 'styled-components/native';
import { ListView, TouchableHighlight } from 'react-native';

interface Props {
  label?: string;
  placeholder?: string;
}

interface State {
  current: any;
  input: string;
  suggestions: any[];
}

const SearchURL = (term: string) =>
  `https://maps.googleapis.com/maps/api/place/autocomplete/json?types=geocode&key=AIzaSyBH-JogSQqy0OPUnSf-b1selHP7VGCL7S8&input=${term}`;

const formattedSuggestion = structured_formatting => ({
  mainText: structured_formatting.main_text,
  secondaryText: structured_formatting.secondary_text
});

export default class GeolocationSearchInput extends Component<Props, State> {
  debouncedSearch: (state: State) => void;

  constructor(props: Props) {
    super(props);
    this.debouncedSearch = debounce(this.search, 200);
  }

  onChangeText = input => {
    this.setState(
      {
        input
      },
      () => this.debouncedSearch(this.state)
    );
  };

  search(state: State) {
    fetch(SearchURL(state.input))
      .then(response => response.json())
      .then(({ predictions }) => {
        this.setState({
          suggestions: predictions.map((p, idx) => ({
            id: p.id,
            description: p.description,
            placeId: p.place_id,
            active: idx === 0 ? true : false,
            index: idx,
            formattedSuggestion: formattedSuggestion(p.structured_formatting),
            matchedSubstrings: p.matched_substrings,
            terms: p.terms,
            types: p.types
          }))
        });
      });
  }

  onSuggestionSelect(suggestion: Suggestion) {
    this.setState({
      current: suggestion,
      input: suggestion.formattedSuggestion.mainText,
      suggestions: []
    });
  }

  componentDidMount() {}

  render = () => {
    const { suggestions, current } = this.state || {};
    return (
      <Wrapper focused={!!suggestions && suggestions.length}>
        <Input
          {...this.props}
          value={current ? current.formattedSuggestion.mainText : false}
          onChangeText={text => this.onChangeText(text)}
        />
        {suggestions ? (
          <SuggestionList
            items={suggestions}
            onSuggestionSelect={suggestion =>
              this.onSuggestionSelect(suggestion)
            }
          />
        ) : null}
      </Wrapper>
    );
  };
}

interface Suggestion {
  id: string;
  description: string;
  placeId: string;
  active: boolean;
  index: string;
  formattedSuggestion: any;
  matchedSubstrings: string;
  terms: any;
  types: any;
}

interface SuggestionListPropsInterface {
  items: Suggestion[];
  onSuggestionSelect: (suggestion: Suggestion) => void;
}

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class SuggestionList extends React.Component<SuggestionListPropsInterface, {}> {
  __renderItem = (suggestion: Suggestion) => (
    <TouchableHighlight
      onPress={() => this.props.onSuggestionSelect(suggestion)}
    >
      <Text>{suggestion.formattedSuggestion.mainText}</Text>
    </TouchableHighlight>
  );
  render() {
    return (
      <SuggestionWrapper
        dataSource={ds.cloneWithRows(this.props.items)}
        renderRow={this.__renderItem}
      />
    );
  }
}

const Wrapper = styl(styled.View)`
  position: ${props => (props.focused ? 'absolute' : 'relative')};
  padding: ${props => (props.focused ? '30px' : '0')};
  top: 0;
  right: 0;
  left: 0;
  z-index: 9999;
  background: #fff;
`;

const SuggestionWrapper = styl(styled.ListView)`
`;

const Text = styl(styled.Text)`
  font-size: 20px;
  padding: 10px;
`;
