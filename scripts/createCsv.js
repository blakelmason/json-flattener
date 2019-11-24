function createCsv(flat) {
  let csvString = ''
  csvString += 'firstName,'
  csvString += 'lastName,'
  csvString += 'county,'
  csvString += 'city,'
  csvString += 'role,'
  csvString += 'sales\n'
  for (person of flat) {
    csvString += person.firstName + ','
    csvString += person.lastName + ','
    csvString += person.county + ','
    csvString += person.city + ','
    csvString += person.role + ','
    csvString += person.sales + '\n'
  }
  csvString = csvString.substring(0, csvString.length - 1)
  return csvString
}

module.exports = createCsv
