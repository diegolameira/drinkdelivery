import React from 'react';

import { AddressForm } from '@/components/Address';

const GOOGLE_MAPS_API_KEY: string = process.env.GOOGLE_MAPS_API_KEY + '';

interface AddressContainerProps {
  label?: string;
  placeholder?: string;
  onClear?: () => void;
  onUpdate?: (place: Place) => void;
}

export const Address = (props: AddressContainerProps) => (
  <AddressForm {...props} googleKey={GOOGLE_MAPS_API_KEY} />
);
