import { createOrUpdate } from '@/shared/Helpers';

import { getCartItems as query } from '../tags/cart';

export const addOrUpdate = (_: any, args: Product, { cache }: any) => {
  const data = cache.readQuery({ query });

  const cart = createOrUpdate(data.cart, {
    __typename: 'CardItem',
    ...args
  }).filter(i => i.count);

  cache.writeQuery({
    query,
    data: {
      cart
    }
  });

  return null;
};
