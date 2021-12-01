export default ({ app, route, redirect }) => {
    if(route.path !== '/auth') {
        if(!app.$fire.auth.currentUser) {
            return redirect('/auth')
        }
        else if(route.path === '/auth') {
            if(!app.$fire.auth.currentUser) {

            }
            else {
                return redirect('/')
            }
        }
    }
}