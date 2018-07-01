import gql from 'graphql-tag';

export default {
  Mutation: {
    updateItemInCart: (
      _,
      { id, title, count, imageUrl, price },
      { cache, getCacheKey }
    ) => {
      const query = gql`
        query getCartItems {
          cart {
            id
            imageUrl
            title
            price
            count
          }
        }
      `;

      const data = cache.readQuery({ query });

      const foundIndex = data.cart.findIndex(i => i.id === id);

      // creating one or updating
      const item = !!~foundIndex
        ? { ...data.cart[foundIndex], count }
        : { __typename: 'CardItem', id, title, count, imageUrl, price };

      cache.writeQuery({
        query,
        data: {
          cart: !!~foundIndex
            ? [...data.cart.slice(0, foundIndex)].concat(
                // ignore item if zero count
                item.count
                  ? [item, ...data.cart.slice(foundIndex + 1)]
                  : [...data.cart.slice(foundIndex + 1)]
              )
            : [...data.cart, item]
        }
      });

      return null;

      const cacheKey = getCacheKey({
        __typename: 'CartItem',
        id
      });
      const fragment = gql`
        fragment updateItemInCart on CartItem {
          id
          imageUrl
          title
          price
          count
        }
      `;
      const cartItem = cache.readFragment({ fragment, id: cacheKey });
      const data = {
        ...cartItem,
        id,
        title,
        count,
        imageUrl,
        price
      };
      cache.writeData({ id: cacheKey, data });
      console.log(cache, data);
      return null;
    }
  }
};
