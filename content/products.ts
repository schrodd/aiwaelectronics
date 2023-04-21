import { Product } from './types'
import { audio } from './products/audio'
import { headsets } from './products/headsets'
import { notebooks } from './products/notebooks'
import { tablets } from './products/tablets'

export const products: Product[] = [
  ...audio,
  ...headsets,
  ...notebooks,
  ...tablets
]
