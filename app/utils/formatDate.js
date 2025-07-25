/**
 * 时间戳转换
 * @param {Number} date 时间戳
 * @returns {String} yyyy-mm-dd hh:mm:ss
 */
// 时间戳=》yyyy-mm-dd hh:mm:ss
export default function (date) {
  return new Date(date).toLocaleString().replace(/:\d{1,2}$/, " ");
}
