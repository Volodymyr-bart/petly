export function ageCount(date) {
  const age = new Date(Date.now() - Date.parse(date)).getFullYear() - 1970 || 0
  if (age === 0) {
    return 'less than a year';
  } else if (age === 1) {
    return 'one year';
  } else if (age > 20) {
    return 'very old pet'
  }
  return years[age] + ' years';
}

const years = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty'
]