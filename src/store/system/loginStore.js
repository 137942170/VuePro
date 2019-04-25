// import LoginDomain from '../../domain/LoginDomain'
// import GoingUtils from 'GoingUtils'

// const CHANGE_LOGIN_MODEL = 'CHANGE_LOGIN_MODEL';
// // 用户登陆操作
// const SUBMIT_SUCCESS = 'SUBMIT_SUCCESS';
// //  登陆成功
// const SUBMIT_ERROR = 'SUBMIT_ERROR';
// //  登陆错误
// const LOAD_LOGIN_CONFIG = 'LOAD_LOGIN_CONFIG'; 
// 加载登陆界面的配置信息

/** i18n **/
let LoginStore = {
  state: {
    // 使用vue 来做国际化显示的映射。
    pageLabel: {
      // loginBtnLabel: goI18nLabel("登录"),
      // // 登录按钮的label
      // findPswLabel: goI18nLabel("找回密码"),
      // // 找回密码的label
      // i18nSelLabel: goI18nLabel("中文（简体）"),
      // // 选则语言的label
      // mobileLabel: goI18nLabel("微信扫描登录"),
      // wxScanLabel: goI18nLabel("下载移动客户端"),
    },
    pageImages: {
      // mobileScanImg: './img/m3-qrcode.png',
      // wxScanImg: './img/mi-qrcode.png',
      // dropDownImg: "../../svg/down4.svg",
    },
    showForm: true,
    // 控制是否显示登录框
    loginInfo: {
      userId: '',
      password: ''
    },
    count: 0,
    // domainData: GoingUtils.getJsonDomain(LoginDomain),
    errorInfo: false,
    // 登陆相关的错误信息
    jumpFlag: false,
    // 跳转到系统首页,
    superAdminJumpFlag: false,
    // 超级管理员跳转标志
    adminJumpFlag: false,
    // 单位管理员跳转标志
    systemAdminJumpFlag: false,
    // 系统管理员跳转标志
    sysSessionId: '',
    recoverPwdFlag: false
  },
  actions: {},
  mutations: {}
}

export default LoginStore
