import { LocationObject } from 'expo-location';
import { Prayers } from '../helpers/parsers/prayer';

export interface LocalState {
  token: string | null;
  location: LocationObject | null;
  lastUpdatedAt: number;
}

export interface CacheState {
  prayers: Prayers | null;
}
