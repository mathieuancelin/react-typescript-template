export function isObject(x: any): boolean {
  return !!x && (typeof x === 'object' || typeof x === 'function')
}

export function isFunction(x): boolean {
  return isObject(x) && Object.prototype.toString.call(x) === '[object Function]'
}

export function autoBind(instance: any): void {
  for (const key in instance) {
    if (isFunction(instance[key])) {
      instance[key] = instance[key].bind(instance)
    }
  }
}
