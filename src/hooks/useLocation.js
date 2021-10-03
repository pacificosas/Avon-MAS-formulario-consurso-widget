import React from 'react'

const userLocationOptions = (location) => {
  const [options, setValues] = React.useState([])

  const getLocation = async (from) => {
    const newVals = await location(from)
    await setValues(newVals)
    console.log(newVals)
  }

  return [options, getLocation]
}

export default userLocationOptions
