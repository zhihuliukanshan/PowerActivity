/**
 * Notes: 全局/首页模块业务逻辑
 * Date: 2021-03-15 04:00:00 
 * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY cclinux0730 (wechat)
 */

const BaseProjectService = require('./base_project_service.js');
const setupUtil = require('../../../framework/utils/setup/setup_util.js');
const ActivityModel = require('../model/activity_model.js');

class HomeService extends BaseProjectService {

	async getSetup(key) {
		return await setupUtil.get(key);
	}

	/**首页列表 */
	async getHomeList() {
		let fields = 'ACTIVITY_TITLE,ACTIVITY_CATE_NAME,ACTIVITY_JOIN_CNT,ACTIVITY_USER_LIST,ACTIVITY_OBJ.cover,ACTIVITY_OBJ.vouch';
		let where = {
			ACTIVITY_STATUS: 1
		}
		let newList = await ActivityModel.getAll(where, fields, { 'ACTIVITY_ADD_TIME': 'desc' }, 10);

		let vouchList = await ActivityModel.getAll(where, fields, { 'ACTIVITY_VOUCH': 'desc', 'ACTIVITY_ADD_TIME': 'desc' }, 10);

		let hotList = await ActivityModel.getAll(where, fields, { 'ACTIVITY_JOIN_CNT': 'desc', 'ACTIVITY_ADD_TIME': 'desc' }, 10);

		return { newList, hotList, vouchList }

	}
}

module.exports = HomeService;