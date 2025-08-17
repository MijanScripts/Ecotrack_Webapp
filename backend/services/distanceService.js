function getMockDistance(from, to) {
  const routes = {
    'ojota-yaba': 10,
    'lagos-ibadan': 130,
    'lagos-abuja': 760,
    'yaba-unilag': 4,
    'ikeja-sango': 30
  };

  const key = `${from.toLowerCase()}-${to.toLowerCase()}`;
  return routes[key] || 50; // default to 50km if route is not found
}

module.exports = { getMockDistance };
