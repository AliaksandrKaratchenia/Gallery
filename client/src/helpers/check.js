export default function check(params) {
	if (params.userName.toLowerCase() !== 'admin' || params.password !== '12345') {
		return false;
	}

	return true;
}
//add comment