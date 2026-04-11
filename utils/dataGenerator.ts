export function generateUser() {
  return {
    name: 'User' + Math.random().toString(36).substring(2, 7),
    country: 'India',
    city: 'Hyderabad',
    card: '1234567890',
    month: '04',
    year: '2026'
  };
}