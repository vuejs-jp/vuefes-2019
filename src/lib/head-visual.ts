export type PartsType =
  | 'head-circle'
  | 'head-horizontal'
  | 'head-square'
  | 'head-triangle'
  | 'head-cross'
  | 'head-photo'
  | 'head-slash'

export interface Parts {
  type: PartsType
  x: number
  y: number
  rotate: number
  src: string
  key: string
}

export type WindowMode = 'sm' | 'md' | 'lg'

export const gap = 12
export const grid = 120
export const partsLeaveTime = 0.2
export const partsCreateTime = 0.6

export function getWindowMode(innerWidth: number): WindowMode {
  if (innerWidth > 980) {
    return 'lg'
  }
  if (innerWidth > 768) {
    return 'md'
  }
  return 'sm'
}
