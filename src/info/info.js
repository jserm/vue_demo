import instance from '../utils/request.js'

export function getDataTest() {
  instance.request({
    method: 'get',
    url: '/',
  })
}
export function getDataList() {
  instance.request({
    method: 'get',
    url: '/list',
  })
}
