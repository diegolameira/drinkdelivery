import React from 'react';
import { ListView, ListViewDataSource } from 'react-native';

import Touchable from '@/components/Touchable';
import { Title, Subtitle, ListWrapper } from '@/components/List/index.styles';

interface ListItem {
  id: string;
  title: string;
  subtitle?: string;
}

interface ListProps {
  items: (ListItem | React.Component)[];
  onSelect?: (id: string) => void;
}

export class List extends React.Component<ListProps, {}> {
  dataSource: ListViewDataSource;

  constructor(props: ListProps) {
    super(props);
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
  }

  __renderItem = (item: ListItem) => (
    <Touchable
      onPress={() => {
        return this.props.onSelect && this.props.onSelect(item.id);
      }}
    >
      <React.Fragment>
        <Title>{item.title}</Title>
        {item.subtitle && <Subtitle>{item.subtitle}</Subtitle>}
      </React.Fragment>
    </Touchable>
  );

  render = () => {
    const { items } = this.props;
    if (!items || !items.length) return <Title>Carregando...</Title>;
    // TODO: check if react elm
    const renderRow = true ? this.__renderItem : items;
    return (
      <ListWrapper
        dataSource={this.dataSource.cloneWithRows(this.props.items)}
        renderRow={renderRow}
      />
    );
  };
}
