import {
  getCanvas,
  getContext,
} from './utils';

export const create = (query: string) => {
  const ctx = getContext(getCanvas(query));
};
