// const { mockCarbonEstimate } = require('../services/climatiqService');

// const calculateCarbon = (req, res) => {
//   const { activity, distance } = req.body;

//   if (!activity || !distance) {
//     return res.status(400).json({ error: 'Please provide both activity and distance' });
//   }

//   const result = mockCarbonEstimate(activity, distance);

//   return res.status(200).json({
//     activity,
//     distance,
//     ...result
//   });
// };

const { mockCarbonEstimate } = require('../services/climatiqService');
const { getMockDistance } = require('../services/distanceService');

const calculateCarbon = (req, res) => {
  const { from, to, meansOfTransport } = req.body;

  if (!from || !to || !meansOfTransport) {
    return res.status(400).json({ error: 'Please provide from, to, and means of transport' });
  }

  const distance = getMockDistance(from, to);
  const result = mockCarbonEstimate(meansOfTransport, distance);

  // Make sure the response matches the test
  return res.status(200).json({
    from,
    to,
    meansOfTransport,
    distance: {
      value: distance,
      unit: "km"
    },
    co2e: result.co2e,
    unit: result.unit,
    source: result.source
  });
};

module.exports = { calculateCarbon };
