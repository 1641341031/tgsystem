import request from '@/utils/request'

export function register(userInfo) {
  return request({
    url: '/admin/register',
    method: 'post',
    data: userInfo
  })
}