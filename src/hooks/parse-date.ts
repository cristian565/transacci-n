export function parseDate(
    value:string,
    format:any = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timeZone: 'America/Bogota',
    }
  ) {
    const date=(new Date(value.slice(0,-1))).toLocaleString('es-ES',{month: 'long'})+' '+(new Intl.DateTimeFormat('en-US').formatToParts(new Date(value))[2].value)
    const hour=new Intl.DateTimeFormat('en-US', format).format(+new Date(value)-new Date("2022-07-14T05:00:00").getHours())
    return ({
      date: date,
      hour: hour
    });

  }