(function($, owner) {

	owner.changePwd = function(changePwdInfo, callback) {
		print('点击修改密码');
		callback = callback || $.noop;
		changePwdInfo = changePwdInfo || {};
		changePwdInfo.oldPassword = changePwdInfo.oldPassword || '';
		changePwdInfo.newPassword = changePwdInfo.newPassword || '';
		changePwdInfo.passwordConfirm = changePwdInfo.passwordConfirm || '';
		if(changePwdInfo.oldPassword.length < 6) {
			return callback('旧密码最短为 6 个字符');
		}
		if(changePwdInfo.newPassword.length < 6) {
			return callback('新密码最短为 6 个字符');
		}

		if(changePwdInfo.passwordConfirm.length < 6) {
			return callback('确认新密码最短为 6 个字符');
		}

		if(changePwdInfo.passwordConfirm != changePwdInfo.newPassword) {
			return callback('密码两次输入不一致');
		}

		return callback();
	};

})(mui, window.app = {});