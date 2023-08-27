import request from '@/utils/request'

export const goodsInboundservice = ({ username, password }) =>
  request.post('/goods/inbound', { username, password })
