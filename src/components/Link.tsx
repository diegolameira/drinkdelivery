import React from 'react';
import { Link } from 'react-router-native';

import { View, Text } from '@/components/Button';

interface Props {
  title: string;
  to: string;
}

export default ({ title, to }: Props) => (
  <Link to={to}>
    <View>
      <Text>{title ? title.toUpperCase() : null}</Text>
    </View>
  </Link>
);
