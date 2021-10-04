
let context = {}

export const initContext = data => {
  context = { ...context, ...data }
}

export default () => ({ ...context })
