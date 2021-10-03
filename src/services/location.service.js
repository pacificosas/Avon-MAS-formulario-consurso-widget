
const api = process.env.API_UTILS

const fetchData = country => type => async from => {
  const res = await fetch(`${api}/geography/${type}?country=${country}${from >= 0 ? '&fromId=' + from : ''}`)
  const result = await res.json()
  return result.payload.map(loc => {
    let from
    const id = loc.id
    if (type === 'departments') { from = loc.id }
    if (type === 'cities') { from = loc.departmentId }
    if (type === 'towns') { from = loc.cityId }

    return {
      label: loc.name,
      value: loc.name,
      name: loc.name,
      id,
      from
    }
  })
}

const getLabels = (country) => {
  if (country === 'co') {
    return {
      department: 'Departamento *',
      city: 'Ciudad',
      town: null
    }
  }

  if (country === 'ec') {
    return {
      department: 'Provincia *',
      city: 'Canton',
      town: 'Parroquia'
    }
  }

  if (country === 'pe') {
    return {
      department: 'Departamento *',
      city: 'Provincia',
      town: 'Distrito'
    }
  }
}

const service = (country) => {
  const fetchCountry = fetchData(country)
  return {
    labels: getLabels(country),
    getDepartments: fetchCountry('departments'),
    getCities: fetchCountry('cities'),
    getTowns: fetchCountry('towns')

  }
}
export default service
