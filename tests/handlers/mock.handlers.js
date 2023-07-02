const { rest } = require('msw')

const handlers = [
  rest.post('/hw/store/api/checkout', (_, res, ctx) => res(ctx.json({ id: 1 }))),
]


module.exports = { handlers }