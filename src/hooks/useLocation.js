import React from 'react'

const userLocationOptions = (location) => {
  const [options, setValues] = React.useState([])

  const getLocation = async (from) => {
    setValues(await location(from))
  }

  return [options, getLocation]
}

export default userLocationOptions
