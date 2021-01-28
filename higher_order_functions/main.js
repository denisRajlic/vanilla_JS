const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach

companies.forEach(company => {
  console.log(company.category);
});

// filter

// Get 21 and older

// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//   if(ages[i] >= 21){
//     canDrink.push(ages[i]);
//   }
// }

const canDrink = ages.filter(age => age >= 21);

console.log(canDrink);

// Filter retail companies

const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies);

// Filter companies from the 80's

const oldCompanies = companies.filter(company => company.start > 1979 && company.start < 1990);
console.log(oldCompanies);

// Filter companies that lasted at least 10 years
const tenYearCompanies = companies.filter(company => company.end - company.start >= 10);
console.log(tenYearCompanies);

// map

// Create array of company names

const companyNames = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(companyNames);

// Get square root of ages

const ageMap = ages
  .map(age => Math.sqrt(age))
  .map(age => age * 2);
console.log(ageMap);

// sort
// Sort companies by start year 
// By Default, sorting is ascending
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

console.log(sortedCompanies);

// Sort ages from lowest to highest

const sortedAges = ages.sort((a, b) => a - b);
console.log(sortedAges);

// reduce

// Add ages together

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

const ageSum = ages.reduce((total, age) => total + age, 0);

console.log(ageSum);

// Get total years for all companies

const totalYears = companies.reduce((total, company) => total + company.end - company.start, 0);
console.log(totalYears);

// Find max number of array

console.log("Max: " + Math.max.apply(null, ages));

// Combine Methods

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a,b) => a + b, 0);

console.log(combined);

// ---------------------------

const players = [
  {name: 'Lionel Messi', age: 32, team: 'Barcelona', ucl_titles: 4, isCaptain: true},
  {name: 'Neymar', age: 27, team: 'PSG', ucl_titles: 1, isCaptain: false},
  {name: 'CR7', age: 35, team: 'Juventus', ucl_titles: 5, isCaptain: true},
  {name: 'Robert Lewandowski', age: 31, team: 'Bayern Munich', ucl_titles: 0, isCaptain: false},
  {name: 'Andres Iniesta', age: 35, team: 'Barcelona', ucl_titles: 4, isCaptain: true},
  {name: 'Douglas Costa', age: 29, team: 'Juventus', ucl_titles: 0, isCaptain: false}
];

// log all champions league wins

const captains = players
  .reduce((a, b) => a + b.ucl_titles, 0)
  
console.log(captains);