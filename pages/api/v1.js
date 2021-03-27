// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// V1 Prayer times api WIP

function getDhuhr(timeZone, Longitude, EqT) {
  let dhuhrTime = 12 + timeZone - Longitude/15 - EqT
}

export default (req, res) => {
  res.status(200).json({ Fajr: '' })
}
