export function zip(...args) {
  const longest = args.reduce((a, b) => {
    return a.length > b.length ? a : b
  }, [])

  return longest.map((_, i) => {
    return args.map((array) => {
      return array[i] || array[array.length - 1]
    })
  })
}

export function formatPath(path) {
  return path.replace(/\.mdx$/, '')
}

/**
 * Returns a random integer between `min` and `max` that's guaranteed to NOT be `except`.
 * @param {number} min
 * @param {number} max
 * @param {number} except
 * @returns {number}
 */
export function getRandomInt(min, max, except = null) {
  let randomValue = Math.floor(Math.random() * (max - min + 1)) + min
  while (randomValue === except) {
    randomValue = Math.floor(Math.random() * (max - min + 1)) + min
  }
  return randomValue
}
