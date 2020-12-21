function formatTime(datestr){
  let timestamp = Date.parse(datestr),
      publishTime = timestamp / 1000,
      d_seconds,
      d_minutes,
      d_hours,
      d_days,
      timeNow = parseInt(new Date().getTime() / 1000),
      d,
      date = new Date(publishTime * 1000),
      M = date.getMonth() + 1,
      D = date.getDate(),
      H = date.getHours(),
      m = date.getMinutes(),
      s = date.getSeconds();
      // 补0
      if( M < 10 ) M = '0' + M
      if( D < 10 ) M = '0' + D
      if( H < 10 ) H = '0' + H
      if( m < 10 ) m = '0' + m
      if( s < 10 ) s = '0' + s

      d = timeNow - publishTime;
      d_days = parseInt(d / 86400)
      d_hours = parseInt(d / 3600)
      d_minutes = parseInt(d / 60)
      d_seconds = parseInt(d)

      if(d_days > 0 && d_days < 7) return `${d_days}天前`
      else if(d_days <= 0 && d_hours > 0) return `${d_hours}小时前`
      else if(d_hours <= 0 && d_minutes > 0) return `${d_minutes}分钟前`
      else if(d_seconds < 60) return '刚刚'
      else if(d_days >= 7 && d_days < 30) return `${~~(d_days / 7)}周前`
      else if(d_days >= 30 && d_days < 365) return `${~~(d_days / 30)}月前`
      else if(d_days >= 365) return `${~~(d_days / 365)}年前`
      else return '未知'
}

function goBack(){
  window.history.go(-1)
}


function calcWordNumber(val) {
  let len = val.toString().length;
  if(len > 8) return Math.floor(val / 10000000) + '亿字'
  else if (len > 4) return Math.floor(val / 10000) + '万字'
  return val
}

module.exports = {
  formatTime,
  goBack,
  calcWordNumber
}