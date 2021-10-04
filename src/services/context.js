
let context = {}

export const initContext = data => {
  console.log(context)
  context = { ...context, ...data }
  console.log(context)
}

export default () => ({ ...context })
