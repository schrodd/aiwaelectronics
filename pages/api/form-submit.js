export default function handler(req, res) {
  console.log(req.query, 'query')
  console.log(req.body, 'body')
  res.status(200).json(req.body)
}