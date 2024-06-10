/**
 * Notes: 评论实体
 * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY cclinux0730 (wechat)
 * Date: 2023-05-24 19:20:00 
 */


const BaseProjectModel = require('./base_project_model.js');

class CommentModel extends BaseProjectModel {

}

// 集合名
CommentModel.CL = BaseProjectModel.C('comment');

CommentModel.DB_STRUCTURE = {
	_pid: 'string|true',

	COMMENT_ID: 'string|true',

	COMMENT_USER_ID: 'string|true|comment=用户ID',

	COMMENT_TYPE: 'string|true',
	COMMENT_OID: 'string|true', 
	
	COMMENT_FORMS: 'array|true|default=[]',
	COMMENT_OBJ: 'object|true|default={}',

	COMMENT_ADD_TIME: 'int|true',
	COMMENT_EDIT_TIME: 'int|true',
	COMMENT_ADD_IP: 'string|false',
	COMMENT_EDIT_IP: 'string|false',

};

// 字段前缀
CommentModel.FIELD_PREFIX = "COMMENT_";

module.exports = CommentModel;