import produce from 'immer'

export const immer = (config) => (set, get) =>
  config((fn) => set(produce(fn)), get)
