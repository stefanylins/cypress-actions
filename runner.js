const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImQyZjQ4NDAxLTU3ZjgtNDgyYy04NjliLTMwMTMzYzA2MmQ0Mi0xNzEzNzQ0NjgxODQxIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiODlhOGRiMDktM2E2Yi00YmI5LTkwNjQtNzEyNTE1ZTI3YTkyIiwidHlwZSI6InQifQ.LZATVU7aIGFdBLzwIcug_HbXc05iO1Ngc4elYnWM56g'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
