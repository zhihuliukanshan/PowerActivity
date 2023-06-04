/**
 * Notes: 评论模块业务逻辑
 * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY cclinux0730 (wechat)
 * Date: 2023-06-24 07:48:00 
 */

const BaseBiz = require('../../../comm/biz/base_biz.js');
const projectSetting = require('../public/project_setting.js');
const formSetHelper = require('../../../cmpts/public/form/form_set_helper.js');

class CommentBiz extends BaseBiz {
	static initFormData() {

		return {
			fields: projectSetting.COMMENT_FIELDS,
			formForms: [], 
		}

	}


}

CommentBiz.CHECK_FORM = {
	forms: 'formForms|array',
};

module.exports = CommentBiz;