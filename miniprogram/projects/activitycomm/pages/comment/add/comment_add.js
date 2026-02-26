const pageHelper = require('../../../../../helper/page_helper.js');
const cloudHelper = require('../../../../../helper/cloud_helper.js');
const CommentBiz = require('../../../biz/comment_biz.js');
const validate = require('../../../../../helper/validate.js');
const PublicBiz = require('../../../../../comm/biz/public_biz.js');
const ProjectBiz = require('../../../biz/project_biz.js');
const PassportBiz = require('../../../../../comm/biz/passport_biz.js');

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		isLoad: false
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: async function (options) {
		ProjectBiz.initPage(this);

		if (!await PassportBiz.loginMustBackWin(this)) return;
		
		if (!pageHelper.getOptions(this, options)) return;

		this.setData(CommentBiz.initFormData());
		this.setData({
			isLoad: true
		});
	},


	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () { },

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () { },

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () { },

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () { },

	url: function (e) {
		pageHelper.url(e, this);
	},


	bindFormSubmit: async function () {

		let data = this.data;
		data = validate.check(data, CommentBiz.CHECK_FORM, this);
		if (!data) return;


		let forms = this.selectComponent("#cmpt-form").getForms(true);
		if (!forms) return;
		data.forms = forms;
		data.oid = this.data.id;

		try {

			// 创建
			let result = await cloudHelper.callCloudSumbit('comment/insert', data);
			let commentId = result.data.id;

			// 图片
			await cloudHelper.transFormsTempPics(forms, 'comment/', commentId, 'comment/update_forms');

			let callback = async function () {
				PublicBiz.removeCacheList('admin-comment-list');
				PublicBiz.removeCacheList('comment-list');
				wx.navigateBack();

			}
			pageHelper.showSuccToast('发表成功', 2000, callback);

		} catch (err) {
			console.log(err);
		}
	},


})