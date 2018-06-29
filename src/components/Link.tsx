import React from 'react';
import { Link } from 'react-router-native';

import { View, Text } from '@/components/Button';

interface Props {
  title: string;
  to: string;
  disabled?: boolean;
}

export default ({ disabled = false, title, to }: Props) => (
  <Link to={disabled ? '' : to}>
    <View disabled={disabled}>
      <Text>{title ? title.toUpperCase() : null}</Text>
    </View>
  </Link>
);
