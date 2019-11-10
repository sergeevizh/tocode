export default function (context) {
	if (!context.store.getters.checkAuchUser) {
		context.redirect('/admin/auth')
	}
}