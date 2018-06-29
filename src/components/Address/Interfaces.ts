export interface Place {
  id: string;
  placeId: string;
  title: string;
  subtitle: string;
  lat: number;
  lng: number;
}

export interface Suggestion {
  id: string;
  placeId: string;
  title: string;
  subtitle: string;
}
