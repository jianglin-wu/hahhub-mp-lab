// import wepy from 'wepy'
// import 'wepy-async-function'
// // import tracker from './utils/tracker'

// import { setStore } from 'wepy-redux'
// import configStore from './store'

// const store = configStore()
// setStore(store)

// export default class extends wepy.app {
//   config = {
//     pages: ['pages/index'],
//     window: {
//       backgroundTextStyle: 'light',
//       navigationBarBackgroundColor: '#fff',
//       navigationBarTitleText: 'WeChat',
//       navigationBarTextStyle: 'black'
//     }
//   }

//   globalData = {
//     userInfo: null
//   }

//   constructor() {
//     super()
//     this.use('requestfix')
//   }

//   onLaunch() {
//     tracker.init(this, { debug: true })
//   }
//   onShow(object) {
//     console.log('trackEventTime in onShow app.wpy:---')
//     this.tracker.setScene(1001)

//     this.tracker.trackEventTime(1)
//     this.tracker.localStorage.set('onShow time', new Date().getTime())
//     console.log('trackEventTime in onShow app.wpy:---')
//   }
//   onHide() {
//     console.log('track in onHide app.wpy:---')
//     tracker.track(1, {
//       occurredTime: new Date().getTime(),
//       taskTitle: '访问陆海任务',
//       taskId: 111222,
//       taskType: 'taskType',
//       userName: 'userName',
//       phoneNo: 13900000000
//     })
//     this.tracker.localStorage.set('onHide time', new Date().getTime())

//     tracker.onAppHide()
//     console.log('track in onHide app.wpy:---')
//   }

//   sleep(s) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('promise resolved')
//       }, s * 1000)
//     })
//   }

//   getUserInfo(cb) {
//     const that = this
//     if (this.globalData.userInfo) {
//       return this.globalData.userInfo
//     }
//     wepy.getUserInfo({
//       success(res) {
//         that.globalData.userInfo = res.userInfo
//         cb && cb(res.userInfo)
//       }
//     })
//   }
// }
