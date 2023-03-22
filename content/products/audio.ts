import { Product } from "../types"
import { ring } from './lineas/ring'
import { infinit } from './lineas/infinit'
import { party } from './lineas/party'
import { flama } from './lineas/flama'

export const audio: Product[] = [
  ...ring,
  ...infinit,
  ...party,
  ...flama,
];
