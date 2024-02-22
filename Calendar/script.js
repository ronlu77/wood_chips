const WeekList = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
//#region SETTING CALENDAR
const currentYear = new Date().getFullYear() // 当前年份
const currentMonth = new Date().getMonth() // 当前月份 (0 - 11)
const lastDays = new Date(currentYear, currentMonth + 1, 0).getDate() // 当前月份总计天数(本月最后一天日期)
const lastMonthDay = new Date(currentYear, currentMonth, 0).getDate() // 获取上个月的总计天数(上月最后一天)
const curMothFirstDay = new Date(currentYear, currentMonth, 1).getDay() // 获取本月第一天对应周几 (0 - 6) 表示周
const curMothLastDay = new Date(currentYear, currentMonth + 1, 0).getDay() // 获取本月最后一天对应周几
const lastMonthDays = new Date(currentYear, currentMonth, 0).getDay() // 获取上月最后一天对应周几

console.log(curMothFirstDay, curMothLastDay);
const days = [] // 存储当前日历月份需要展示的天数对象
for (let i = 1; i <= lastDays; i++) {
    days.push({
        isSetted: false,
        day: i,
        data: {
        }
    })
}
const SEVENCONST = 7

completionOtherDay()

// 补齐其他月份的天数
function completionOtherDay() {
    // 补齐头部信息 
    for (let i = lastMonthDay; i >= lastMonthDay - (SEVENCONST + curMothFirstDay - lastMonthDays) % SEVENCONST; i--) {
        days.unshift({
            isSetted: false,
            day: i
        })
    }
    // 有更好的实现方法
    const total = days.length
    // 补齐尾部信息
    for (let i = 1; i <= 6 * 7 - total; i++) {
        days.push({
            isSetted: false,
            day: i
        })
    }
}
//#endregion

/** 初始化当前展示月份日历 */
function initCalendar(year = new Date().getFullYear(), month = new Date().getMonth) {
    const y = year
    const m = month                      // 当月 0-11
    const days = new Date(y, m + 1, 0).getDate() // 获取当前月份总天数
    const calendar = []
    const pre_calendar = []
    const mid_calendar = []
    const last_calendar = []

    // 获取第一周的日期

    // 获取中间日期
    // for(let i = 1; i <)

    // 获取最后一周日期
}