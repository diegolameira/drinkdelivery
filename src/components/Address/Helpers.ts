import { http } from '@/shared/Helpers';

import { Suggestion, Place } from './Interfaces';

export const getPlaceSuggestionsByTerm = (
  key: string,
  term: string
): Promise<Suggestion[]> => {
  const url = buildGMapsAPIUrl(
    key,
    `place/autocomplete`,
    `types=geocode&input=${term}`
  );

  return http(url)
    .then(response => response.json())
    .then(({ predictions }) => {
      return predictions.map(
        ({
          id,
          place_id,
          structured_formatting: { main_text, secondary_text }
        }) => ({
          id,
          placeId: place_id,
          title: main_text,
          subtitle: secondary_text
        })
      );
    });
};

export const getPlaceDetails = (
  key: string,
  placeID: string
): Promise<Place> => {
  const url = buildGMapsAPIUrl(key, `place/details`, `placeid=${placeID}`);

  return http(url)
    .then(response => response.json())
    .then(({ result }) => result)
    .then(
      ({
        id,
        place_id,
        name,
        formatted_address,
        geometry: {
          location: { lat, lng }
        }
      }) => ({
        id,
        placeId: place_id,
        title: name,
        subtitle: formatted_address,
        lat,
        lng
      })
    );
};

const buildGMapsAPIUrl = (KEY: string, PATH: string, PARAMS: string) =>
  `https://maps.googleapis.com/maps/api/${PATH}/json?key=${KEY}&${PARAMS}`;
