import React from 'react';

import { AddressForm } from '@/components/Address';
import { Place } from '@/components/Address/Interfaces';

const GOOGLE_MAPS_API_KEY: string = process.env.GOOGLE_MAPS_API_KEY + '';

interface AddressContainerProps {
  label?: string;
  placeholder?: string;
  onUpdate?: (place: Place) => void;
}

export const Address = (props: AddressContainerProps) => (
  <AddressForm
    {...props}
    googleKey={GOOGLE_MAPS_API_KEY}
    onUpdate={({ title, subtitle, placeId, lat, lng }) => {
      console.log({ title, subtitle, placeId, lat, lng });
      if (props.onUpdate)
        props.onUpdate({ title, subtitle, placeId, lat, lng });
    }}
  />
);
