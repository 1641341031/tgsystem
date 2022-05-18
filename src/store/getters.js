const getters = {
  token: state => state.user.token,
  sidebar: state => state.app.sidebar,
  avatar: state => state.user.avatar,
  device: state => state.app.device,
  name: state => state.user.name,
  roles: state => state.user.roles,
  addRouters: state => state.permission.addRouters,
  routers: state => state.permission.routers
}
export default getters