export function parseDate(
    value:string,
    format:any = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }
  ) {
    const date=(new Date(value.slice(0,-1))).toLocaleString('es-ES',{month: 'long'})+' '+(new Intl.DateTimeFormat('en-US').formatToParts(new Date(value))[2].value)
    const hour=new Intl.DateTimeFormat('en-US', format).format(new Date(value.slice(0,-1)))
    return ({
      date: date,
      hour: hour
    });

  }