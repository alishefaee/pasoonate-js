let AdditionAndSubstractionMixin,BaseMethodsMixin;export default AdditionAndSubstractionMixin={addYear(t){let e=this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset),a=this._currentCalendar.dateToTimestamp(e.year+t,e.month,e.day,e.hour,e.minute,e.second);return this._timestamp=a-this._timezoneOffset,this},addMonth(t){let e=this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset),a=e.month+t,i=e.year+Math.floor(a/12),s=a%12,r=this._currentCalendar.dateToTimestamp(i,s,e.day,e.hour,e.minute,e.second);return this._timestamp=r-this._timezoneOffset,this},addDay(t){return this._timestamp+=86400*t,this},addHour(t){return this._timestamp+=3600*t,this},addMinute(t){return this._timestamp+=60*t,this},addSecond(t){return this._timestamp+=t,this},subYear(t){let e=this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset),a=this._currentCalendar.dateToTimestamp(e.year-t,e.month,e.day,e.hour,e.minute,e.second);return this._timestamp=a-this._timezoneOffset,this},subMonth(t){let e=this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset),a=e.month-t,i=e.year,s=a;a<=0&&(a=-a,i-=Math.floor(a/12)+1,s=12-a%12);let r=this._currentCalendar.dateToTimestamp(i,s,e.day,e.hour,e.minute,e.second);return this._timestamp=r-this._timezoneOffset,this},subDay(t){return this._timestamp-=86400*t,this},subHour(t){return this._timestamp-=3600*t,this},subMinute(t){return this._timestamp-=60*t,this},subSecond(t){return this._timestamp-=t,this}};export default BaseMethodsMixin={setTimestamp(t){return this._timestamp=t,this},getTimestamp(){return this._timestamp},setTimezoneOffset(t){return this._timezoneOffset=t,this},getTimezoneOffset(){return this._timezoneOffset},setYear(t){let e=this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset),a=this._currentCalendar.dateToTimestamp(t,e.month,e.day,e.hour,e.minute,e.second);return this._timestamp=a-this._timezoneOffset,this},getYear(){return this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset).year},setMonth(t){let e=this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset),a=this._currentCalendar.dateToTimestamp(e.year,t,e.day,e.hour,e.minute,e.second);return this._timestamp=a-this._timezoneOffset,this},getMonth(){return this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset).month},setDay(t){let e=this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset),a=this._currentCalendar.dateToTimestamp(e.year,e.month,t,e.hour,e.minute,e.second);return this._timestamp=a-this._timezoneOffset,this},getDay(){return this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset).day},setHour(t){let e=this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset),a=this._currentCalendar.dateToTimestamp(e.year,e.month,e.day,t,e.minute,e.second);return this._timestamp=a-this._timezoneOffset,this},getHour(){return this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset).hour},setMinute(t){let e=this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset),a=this._currentCalendar.dateToTimestamp(e.year,e.month,e.day,e.hour,t,e.second);return this._timestamp=a-this._timezoneOffset,this},getMinute(){return this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset).minute},setSecond(t){let e=this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset),a=this._currentCalendar.dateToTimestamp(e.year,e.month,e.day,e.hour,e.minute,t);return this._timestamp=a-this._timezoneOffset,this},getSecond(){return this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset).second},setUTCYear(t){let e=this._currentCalendar.timestampToDate(this._timestamp);return this._timestamp=this._currentCalendar.dateToTimestamp(t,e.month,e.day,e.hour,e.minute,e.second),this},getUTCYear(){return this._currentCalendar.timestampToDate(this._timestamp).year},setUTCMonth(t){let e=this._currentCalendar.timestampToDate(this._timestamp);return this._timestamp=this._currentCalendar.dateToTimestamp(e.year,t,e.day,e.hour,e.minute,e.second),this},getUTCMonth(){return this._currentCalendar.timestampToDate(this._timestamp).month},setUTCDay(t){let e=this._currentCalendar.timestampToDate(this._timestamp);return this._timestamp=this._currentCalendar.dateToTimestamp(e.year,e.month,t,e.hour,e.minute,e.second),this},getUTCDay(){return this._currentCalendar.timestampToDate(this._timestamp).day},setUTCHour(t){let e=this._currentCalendar.timestampToDate(this._timestamp);return this._timestamp=this._currentCalendar.dateToTimestamp(e.year,e.month,e.day,t,e.minute,e.second),this},getUTCHour(){return this._currentCalendar.timestampToDate(this._timestamp).hour},setUTCMinute(t){let e=this._currentCalendar.timestampToDate(this._timestamp);return this._timestamp=this._currentCalendar.dateToTimestamp(e.year,e.month,e.day,e.hour,t,e.second),this},getUTCMinute(){return this._currentCalendar.timestampToDate(this._timestamp).minute},setUTCSecond(t){let e=this._currentCalendar.timestampToDate(this._timestamp);return this._timestamp=this._currentCalendar.dateToTimestamp(e.year,e.month,e.day,e.hour,e.minute,t),this},getUTCSecond(){return this._currentCalendar.timestampToDate(this._timestamp).second},setDate(t,e,a){let i=this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset),s=this._currentCalendar.dateToTimestamp(t,e,a,i.hour,i.minute,i.second);return this._timestamp=s-this._timezoneOffset,this},setTime(t,e,a){let i=this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset),s=this._currentCalendar.dateToTimestamp(i.year,i.month,i.day,t,e,a);return this._timestamp=s-this._timezoneOffset,this},setDateTime(t,e,a,i,s,r){this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset);let n=this._currentCalendar.dateToTimestamp(t,e,a,i,s,r);return this._timestamp=n-this._timezoneOffset,this},setUTCDate(t,e,a){let i=this._currentCalendar.timestampToDate(this._timestamp);return this._timestamp=this._currentCalendar.dateToTimestamp(t,e,a,i.hour,i.minute,i.second),this},setUTCTime(t,e,a){let i=this._currentCalendar.timestampToDate(this._timestamp);return this._timestamp=this._currentCalendar.dateToTimestamp(i.year,i.month,i.day,t,e,a),this},setUTCDateTime(t,e,a,i,s,r){this._currentCalendar.timestampToDate(this._timestamp);return this._timestamp=this._currentCalendar.dateToTimestamp(t,e,a,i,s,r),this},dayOfWeek(){return this._currentCalendar.dayOfWeek(this._timestamp+this._timezoneOffset)},dayOfYear(){return this._currentCalendar.dayOfYear(this._timestamp+this._timezoneOffset)},weekOfMonth(){return this._currentCalendar.weekOfMonth(this._timestamp+this._timezoneOffset)},weekOfYear(){return this._currentCalendar.weekOfYear(this._timestamp+this._timezoneOffset)}};class Calendar{constructor(){this.J1970=2440587.5,this.DayInSecond=86400}timestampToJulianDay(t){return this.J1970+t/this.DayInSecond}julianDayToTimestamp(t){return Math.round((t-this.J1970)*this.DayInSecond)}julianDayWithoutTime(t){return Math.floor(t)+.5}extractJulianDayTime(t){let e=((t+=.5)-Math.floor(t))*this.DayInSecond+.5;return{hour:Math.floor(e/3600),minute:Math.floor(e/60%60),second:Math.floor(e%60)}}addTimeToJulianDay(t,e,a,i){let s=this.julianDayToTimestamp(t);return s+=3600*e+60*a+i,this.timestampToJulianDay(s)}dateToJulianDay(t,e,a,i,s,r){}dateToTimestamp(t,e,a,i,s,r){let n=this.dateToJulianDay(t,e,a,i,s,r);return this.julianDayToTimestamp(n)}julianDayToDate(t){}timestampToDate(t){let e=this.timestampToJulianDay(t);return this.julianDayToDate(e)}daysInMonth(t,e){return 0}dayOfWeek(t){let e=this.timestampToJulianDay(t);return this.mod(Math.floor(e+2.5),7)}dayOfYear(t){let e=this.timestampToDate(t),a=this.dateToJulianDay(e.year,1,1,0,0,0),i=this.dateToJulianDay(e.year,e.month,e.day,e.hour,e.minute,e.second);return Math.floor(i-a+1)}weekOfMonth(t){let e=this.timestampToDate(t),a=this.dateToTimestamp(e.year,e.month,1,e.hour,e.minute,e.second),i=this.dayOfWeek(t),s=this.dayOfWeek(a),r=1;return e.day<=7-s?r:r+=(e.day-(7-s+(i+1)))/7+1}weekOfYear(t){let e=this.timestampToDate(t),a=this.dayOfYear(t),i=this.dateToTimestamp(e.year,1,1,e.hour,e.minute,e.second),s=this.dayOfWeek(t),r=this.dayOfWeek(i),n=1;return a<=7-r?n:n+=(a-(7-r+(s+1)))/7+1}mod(t,e){return t-e*Math.floor(t/e)}isLeap(t){}}export default Calendar;import GregorianCalendar from"./GregorianCalendar";import JalaliCalendar from"./JalaliCalendar";import IslamicCalendar from"./IslamicCalendar";import ShiaCalendar from"./ShiaCalendar";import BaseMethodsMixin from"../mixin/BaseMethodsMixin";import AdditionAndSubstractionMixin from"../mixin/AdditionAndSubstractionMixin";class CalendarManager{constructor(t,e){this._gregorian=new GregorianCalendar,this._jalali=new JalaliCalendar,this._islamic=new IslamicCalendar,this._shia=new ShiaCalendar,this._currentCalendar=null,this._formatter=Pasoonate.formatter,this._formatter.setCalendar(this);let a=new Date;this._timestamp=t||Math.floor(a.getTime()/1e3),this._timezoneOffset=e||60*-a.getTimezoneOffset()}gregorian(t,e,a,i,s,r){let n=this._gregorian.timestampToDate(this._timestamp);return t=t||n.year,e=e||n.month,a=a||n.day,i=i||n.hour,s=s||n.minute,r=r||n.second,this._timestamp=this._gregorian.dateToTimestamp(t,e,a,i,s,r),this._currentCalendar=this._gregorian,this}jalali(t,e,a,i,s,r){let n=this._jalali.timestampToDate(this._timestamp);return t=t||n.year,e=e||n.month,a=a||n.day,i=i||n.hour,s=s||n.minute,r=r||n.second,this._timestamp=this._jalali.dateToTimestamp(t,e,a,i,s,r),this._currentCalendar=this._jalali,this}islamic(t,e,a,i,s,r){let n=this._islamic.timestampToDate(this._timestamp);return t=t||n.year,e=e||n.month,a=a||n.day,i=i||n.hour,s=s||n.minute,r=r||n.second,this._timestamp=this._islamic.dateToTimestamp(t,e,a,i,s,r),this._currentCalendar=this._islamic,this}shia(t,e,a,i,s,r){let n=this._shia.timestampToDate(this._timestamp);return t=t||n.year,e=e||n.month,a=a||n.day,i=i||n.hour,s=s||n.minute,r=r||n.second,this._timestamp=this._shia.dateToTimestamp(t,e,a,i,s,r),this._currentCalendar=this._shia,this}format(t,e){return this._formatter.format(t,e)}}Object.assign(CalendarManager.prototype,BaseMethodsMixin),Object.assign(CalendarManager.prototype,AdditionAndSubstractionMixin);export default CalendarManager;import Calendar from"./Calendar";class GregorianCalendar extends Calendar{constructor(){super(),this.GregorianEpoch=1721425.5,Object.defineProperty(this,"GregorianEpoch",{writable:!1,configurable:!1})}dateToJulianDay(t,e,a,i,s,r){let n=this.GregorianEpoch-1;return n+=365*(t-1),n+=Math.floor((t-1)/4),n+=-1*Math.floor((t-1)/100),n+=Math.floor((t-1)/400),n+=Math.floor((367*e-362)/12+(e<=2?0:this.isLeap(t)?-1:-2)+a),this.addTimeToJulianDay(n,i,s,r)}julianDayToDate(t){let e=this.extractJulianDayTime(t);t=this.julianDayWithoutTime(t);let a=Math.floor(t-.5)+.5,i=a-this.GregorianEpoch,s=Math.floor(i/146097),r=this.mod(i,146097),n=Math.floor(r/36524),o=this.mod(r,36524),m=Math.floor(o/1461),h=this.mod(o,1461),l=Math.floor(h/365),u=400*s+100*n+4*m+l;4!=n&&4!=l&&u++;let d=a-this.julianDayWithoutTime(this.dateToJulianDay(u,1,1,e.hour,e.minute,e.second)),c=a<this.julianDayWithoutTime(this.dateToJulianDay(u,3,1,e.hour,e.minute,e.second))?0:this.isLeap(u)?1:2,p=Math.floor((12*(d+c)+373)/367);return{year:u,month:p,day:a-this.julianDayWithoutTime(this.dateToJulianDay(u,p,1,e.hour,e.minute,e.second))+1,hour:e.hour,minute:e.minute,second:e.second}}daysInMonth(t,e){if(e<1||e>12)throw new RangeException("$month Out Of Range Exception");return t&&this.isLeap(t)&&2==e?29:[31,28,31,30,31,30,31,31,30,31,30,31][e-1]}isLeap(t){return t%4==0&&!(t%100==0&&t%400!=0)}}export default GregorianCalendar;import Calendar from"./Calendar";class IslamicCalendar extends Calendar{constructor(){super(),this.IslamicEpoch=1948439.5,Object.defineProperty(this,"IslamicEpoch",{writable:!1,configurable:!1})}dateToJulianDay(t,e,a,i,s,r){let n=a;return n+=Math.ceil(29.5*(e-1)),n+=354*(t-1),n+=Math.floor((11*t+3)/30),n+=this.IslamicEpoch-1,this.addTimeToJulianDay(n,i,s,r)}julianDayToDate(t){let e=this.extractJulianDayTime(t);t=this.julianDayWithoutTime(t),t=Math.floor(t)+.5;let a=Math.floor((30*(t-this.IslamicEpoch)+10646)/10631),i=Math.min(12,Math.ceil((t-(29+this.julianDayWithoutTime(this.dateToJulianDay(a,1,1,e.hour,e.minute,e.second))))/29.5)+1);return{year:a,month:i,day:t-this.julianDayWithoutTime(this.dateToJulianDay(a,i,1,e.hour,e.minute,e.second))+1,hour:e.hour,minute:e.minute,second:e.second}}daysInMonth(t,e){if(e<1||e>12)throw new RangeException("$month Out Of Range Exception");return t&&this.isLeap(t)&&12==e?30:[30,29,30,29,30,29,30,29,30,29,30,29][e-1]}isLeap(t){return(11*t+14)%30<11}}export default IslamicCalendar;import Calendar from"./Calendar";class JalaliCalendar extends Calendar{constructor(){super(),this.JalaliEpoch=1948320.5,Object.defineProperty(this,"JalaliEpoch",{writable:!1,configurable:!1})}dateToJulianDay(t,e,a,i,s,r){let n=t-(t>=0?474:473),o=474+this.mod(n,2820),m=a;return m+=e<=7?31*(e-1):30*(e-1)+6,m+=Math.floor((682*o-110)/2816),m+=365*(o-1),m+=1029983*Math.floor(n/2820),m+=this.JalaliEpoch-1,this.addTimeToJulianDay(m,i,s,r)}julianDayToDate(t){let e=this.extractJulianDayTime(t);t=this.julianDayWithoutTime(t);let a,i,s,r=(t=Math.floor(t)+.5)-this.julianDayWithoutTime(this.dateToJulianDay(475,1,1,e.hour,e.minute,e.second)),n=Math.floor(r/1029983),o=this.mod(r,1029983);1029982==o?a=2820:(i=Math.floor(o/366),s=this.mod(o,366),a=Math.floor((2134*i+2816*s+2815)/1028522)+i+1);let m=a+2820*n+474;m<=0&&m--;let h=t-this.julianDayWithoutTime(this.dateToJulianDay(m,1,1,e.hour,e.minute,e.second))+1,l=h<=186?Math.ceil(h/31):Math.ceil((h-6)/30);return{year:m,month:l,day:t-this.julianDayWithoutTime(this.dateToJulianDay(m,l,1,e.hour,e.minute,e.second))+1,hour:e.hour,minute:e.minute,second:e.second}}daysInMonth(t,e){if(e<1||e>12)throw new RangeException("$month Out Of Range Exception");return t&&this.isLeap(t)&&12==e?30:[31,31,31,31,31,31,30,30,30,30,30,29][e-1]}isLeap(t){return 682*((t-(t>0?474:473))%2820+474+38)%2816<682}}export default JalaliCalendar;import Calendar from"./Calendar";class ShiaCalendar extends Calendar{constructor(){super(),this.ShiaEpoch=1948439.5,Object.defineProperty(this,"ShiaEpoch",{writable:!1,configurable:!1})}dateToJulianDay(t,e,a,i,s,r){let n=a,o=0;for(let a=1;a<e;a++)n+=this.daysInMonth(t,a);return o+=n,o+=354*(t-1),o+=Math.floor((11*t+3)/30),o+=this.ShiaEpoch-1,this.addTimeToJulianDay(o,i,s,r)}julianDayToDate(t){let e=this.extractJulianDayTime(t);t=this.julianDayWithoutTime(t),t=Math.floor(t)+.5;let a=Math.floor((30*(t-this.ShiaEpoch)+10646)/10631),i=Math.min(12,Math.ceil((t-(29+this.julianDayWithoutTime(this.dateToJulianDay(a,1,1,e.hour,e.minute,e.second))))/29.5)+1),s=t-this.julianDayWithoutTime(this.dateToJulianDay(a,1,1,e.hour,e.minute,e.second)),r=0;for(let t=1;t<=12;t++)if(s<(r+=this.daysInMonth(a,t))){i=t;break}return{year:a,month:i,day:t-(r-this.daysInMonth(a,i)+354*(a-1)+Math.floor((3+11*a)/30)+this.ShiaEpoch)+1,hour:e.hour,minute:e.minute,second:e.second}}daysInMonth(t,e){let a=[30,29,30,29,30,29,30,29,30,29,30,29],i={1435:[29,30,29,30,29,30,29,30,30,30,29,30],1436:[29,30,29,29,30,29,30,29,30,29,30,30],1437:[29,30,30,29,30,29,29,30,29,29,30,30],1438:[29,30,30,30,29,30,29,29,30,29,29,30],1439:[29,30,30,30,30,29,30,29,29,30,29,29],1440:[30,29,30,30,30,29,29,30,29,30,29,29]};if(e<1||e>12)throw new RangeException("$month Out Of Range Exception");return void 0===i[t]?a[e-1]:i[t][e-1]}isLeap(t){return(11*t+14)%30<11}}export default ShiaCalendar;class DateFormat{constructor(){this._calendar=null}setCalendar(t){this._calendar=t instanceof CalendarManager?t:null}getCalendar(){return this._calendar}format(){return null===this.getCalendar()?"":`${this._calendar.getYear()}-${this._calendar.getMonth()}-${this._calendar.getDay()} ${this._calendar.getHour()}:${this._calendar.getMinute()}:${this._calendar.getSecond()}`}}export default DateFormat;import DateFormat from"./DateFormat";class SimpleDateFormat extends DateFormat{constructor(){super()}format(t,e){return this.compile(t,e)}compile(t,e){let a=t=String(t).toLowerCase();const i=["y","m","d"];let s=[],r="",n="",o=0;for(let e=0;e<t.length;e++)""!==(n=i.includes(t[e])?t[e]:"")&&(n===r?s[o].text+=n:s[++o]={text:n,position:e},r=n);for(let t in s)switch(s[t].text){case"yyyy":a=a.replace("yyyy",this.getCalendar().getYear());break;case"yy":a=a.replace("yy",String(this.getCalendar().getYear()).substr(-2,2));break;case"m":a=a.replace("m",this.getCalendar().getMonth());break;case"mm":a=a.replace("mm",this.getCalendar().getMonth()>9?this.getCalendar().getMonth():"0"+this.getCalendar().getMonth());break;case"d":a=a.replace("d",this.getCalendar().getDay());break;case"dd":a=a.replace("dd",this.getCalendar().getDay()>9?this.getCalendar().getDay():"0"+this.getCalendar().getDay())}return a}}export default SimpleDateFormat;class Constants{constructor(){}}export default Constants;class Localization{constructor(){this._langs={},this._locale="fa"}setLang(t,e){this._langs[t]=e}setLocale(t){this._locale=t||this._locale}getLocale(){return this._locale}isLocale(t){return this._locale===t}hasTransKey(t,e){let a=t.split(".");if(void 0==this._langs[e])return!1;let i=this._langs[e];for(let t=0;t<a.length;t++){if(!(a[t]in i))return!1;i=i[a[t]]}return i}getTrans(t,e){let a=this.hasTransKey(t,e);return a||t}trans(t,e){return e=e||this._locale,t=t||"",this.getTrans(t,e)}}export default Localization;import Constants from"./Constants";import CalendarManager from"./calendar/CalendarManager";import Localization from"./Localization";import SimpleDateFormat from"./formatter/SimpleDateFormat";class Pasoonate extends Constants{constructor(){super()}static make(t,e){return new CalendarManager(t,e)}static trans(t,e){return Pasoonate.localization.trans(t,e)}static setLocale(t){Pasoonate.localization.setLocale(t)}static getLocal(){return Pasoonate.localization.getLocal()}static isLocal(t){return Pasoonate.localization.isLocal(t)}static setFormatter(t){Pasoonate.formatter=t instanceof DateFormat?t:new SimpleDateFormat}}Pasoonate.localization=new Localization,Object.defineProperty(Pasoonate,"localization",{writable:!1,configurable:!1}),Pasoonate.formatter=new SimpleDateFormat,Object.defineProperty(Pasoonate,"formatter",{writable:!0,configurable:!1});export default Pasoonate;let fa={gregorian:{day_name:{sunday:"Sunday"}},jalali:{},islamic:{},shia:{}};Pasoonate.localization.setLang("fa",fa);