module.exports = { //activitycomm
	PROJECT_COLOR: '#25C865',
	NAV_COLOR: '#000000',
	NAV_BG: '#ffffff',


	// setup
	SETUP_CONTENT_ITEMS: [
		{ title: '关于我们', key: 'SETUP_CONTENT_ABOUT' },
	],

	// 用户
	USER_REG_CHECK: false,
	USER_FIELDS: [
		{ mark: 'sex', title: '性别', type: 'select', selectOptions: ['男', '女'], must: true },
	],
	USER_CHECK_FORM: {
		name: 'formName|must|string|min:1|max:30|name=昵称',
		mobile: 'formMobile|must|mobile|name=手机',
		pic: 'formPic|must|string|name=头像',
		forms: 'formForms|array'
	},


	NEWS_NAME: '通知公告',
	NEWS_CATE: [
		{ id: 1, title: '通知公告', style: 'leftbig1' },

	],
	NEWS_FIELDS: [
	],

	ACTIVITY_NAME: '活动',
	ACTIVITY_CATE: [
		{ id: 1, title: '体育竞技' },
		{ id: 2, title: '闲聊小聚' },
		{ id: 3, title: '户外活动' },
		{ id: 4, title: '创业碰撞' },
		{ id: 5, title: '晨练晨跑' }, 
		{ id: 6, title: '公益活动' },
		{ id: 7, title: '休闲娱乐' },
		{ id: 8, title: '学术活动' },
		{ id: 9, title: '教育培训' },
		{ id: 10, title: '其他活动' },
	],
	ACTIVITY_FIELDS: [
		{ mark: 'time', title: '预计时长(小时)', type: 'digit', must: true },
		{ mark: 'fee', title: '活动费用', type: 'text', must: true },
		{ mark: 'desc', title: '活动内容', type: 'content', must: true }, 
		{ mark: 'cover', title: '活动封面', type: 'image', min: 1, max: 1, must: true },
		{ mark: 'img', title: '活动图集', type: 'image', min: 1, max: 8, must: true },
		{
			mark: 'flow', title: '活动流程', type: 'rows',
			ext: {
				titleName: '流程',
				hasDetail: false,
				hasVal: false,
				maxCnt: 30,
				minCnt: 1,
				checkDetail: true,
				hasPic: false,
				checkPic: false,
				titleMode: 'textarea'
			},
			def: [{ title: '14:00在指定地点集合' }, { title: '14:50相互认识了解下' }, { title: '15:00正式开始' }, { title: '16:30活动结束，后续自然结束活动，可自行组队约饭' }],
			must: true
		},
	],
	ACTIVITY_JOIN_FIELDS: [
		{ mark: 'name', type: 'text', title: '姓名', must: true, max: 30 },
		{ mark: 'phone', type: 'mobile', title: '手机', must: true, edit: false }
	],


	COMMENT_NAME: '评价',
	COMMENT_FIELDS: [
		{ mark: 'content', title: '评价内容', type: 'textarea', must: true },
		{ mark: 'img', title: '图片', type: 'image', min: 0, max: 8, must: false },

	],

}