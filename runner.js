const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImViNWFmNzA2LWFiMGYtNGEyNy05NzBhLTM2ODRiNjEzNWY3YS0xNzEzNzQ3MzA5NjczIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNmUyZjIwMTItMDZlNy00M2U0LTg2YTctNWRjMWFiOWVmMzEwIiwidHlwZSI6InQifQ.EuJ1E4Q7jfa5G8_aLyQY8G3o0KXsZL3ymnCh6onwvsQ'

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
