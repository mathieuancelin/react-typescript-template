export function isObject(x) {
  return !!x && (typeof x === 'object' || typeof x === 'function')
}

export function isFunction(x) {
  return isObject(x) && Object.prototype.toString.call(x) === '[object Function]'
}

export function autoBind(instance) {
  for (const key in instance) {
    if (isFunction(instance[key])) {
      instance[key] = instance[key].bind(instance)
    }
  }
}
