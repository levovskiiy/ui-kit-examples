const DEFAULT_PREFIX = 'app-ui'
const ELEMENT_SEPARATOR = '__'
const MODIFIER_SEPARATOR = '--'
const STATE_PREFIX = 'is-'

export interface UseNamespaceOptions {
  prefix?: string
}

function bem(
  prefix: string,
  block: string,
  blockSuffix: string,
  element: string,
  modifier: string,
): string {
  let cls = `${prefix}-${block}`
  if (blockSuffix) {
    cls += `-${blockSuffix}`
  }
  if (element) {
    cls += `${ELEMENT_SEPARATOR}${element}`
  }
  if (modifier) {
    cls += `${MODIFIER_SEPARATOR}${modifier}`
  }
  return cls
}

export function useNamespace(block: string, options: UseNamespaceOptions = {}) {
  const prefix = options.prefix ?? DEFAULT_PREFIX

  const b = (blockSuffix = '') => bem(prefix, block, blockSuffix, '', '')
  const e = (element?: string) =>
    element ? bem(prefix, block, '', element, '') : ''
  const m = (modifier?: string) =>
    modifier ? bem(prefix, block, '', '', modifier) : ''
  const be = (blockSuffix?: string, element?: string) =>
    blockSuffix && element
      ? bem(prefix, block, blockSuffix, element, '')
      : ''
  const em = (element?: string, modifier?: string) =>
    element && modifier ? bem(prefix, block, '', element, modifier) : ''
  const bm = (blockSuffix?: string, modifier?: string) =>
    blockSuffix && modifier
      ? bem(prefix, block, blockSuffix, '', modifier)
      : ''
  const bemCls = (blockSuffix?: string, element?: string, modifier?: string) =>
    blockSuffix && element && modifier
      ? bem(prefix, block, blockSuffix, element, modifier)
      : ''

  const is: {
    (name: string, state: boolean | undefined): string
    (name: string): string
  } = (name: string, ...args: [boolean | undefined] | []) => {
    const state = args.length >= 1 ? args[0]! : true
    return name && state ? `${STATE_PREFIX}${name}` : ''
  }

  return {
    prefix,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem: bemCls,
    is,
  }
}

export type UseNamespaceReturn = ReturnType<typeof useNamespace>
