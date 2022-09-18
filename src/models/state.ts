import { LocationObject } from 'expo-location';

export interface LocalState {
  token: string | null;
  location: LocationObject | null;
  lastUpdatedAt: number;
}
