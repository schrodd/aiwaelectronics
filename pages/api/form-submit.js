export default function handler(req, res) {
  console.log(req.query)
  res.status(200).json(req.query)
}