import request from '@/utils/request'

export const goodsInboundservice = ({
  name,
  category,
  num,
  price,
  zt,
  text,
  username
}) =>
  request.post('/goods/inbound', {
    name,
    category,
    num,
    price,
    // date,
    zt,
    text,
    username
  })

export const goodsGetInfoService = () => request.get('/goods/getinfo')
