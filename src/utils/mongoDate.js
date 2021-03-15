const mongoDate = (inputDate) => {

    let d = new Date(inputDate)
    let dateNow = new Date()
    let dateFormatter = new Intl.DateTimeFormat("ru");
    let timeFormatter = new Intl.DateTimeFormat("ru",{hour: '2-digit', minute: '2-digit'});
    let comparativeDate = ''
    const millieSecondsCompare = (firstDate, secondDate) =>{
        return (firstDate - secondDate)/(60*60*1000)
    }
    if(millieSecondsCompare(Date.now(), Date.parse(inputDate)) < (dateNow.getHours() * 3600 + dateNow.getMinutes() * 60 + dateNow.getSeconds())/(3600)){
       comparativeDate = 'Сегодня'
    }
    else if (millieSecondsCompare(Date.now(), Date.parse(inputDate)) > (dateNow.getHours() * 3600 + dateNow.getMinutes() * 60 + dateNow.getSeconds())/(3600)
            && millieSecondsCompare(Date.now(), Date.parse(inputDate)) < 24 + (dateNow.getHours() * 3600 + dateNow.getMinutes() * 60 + dateNow.getSeconds())/(3600)){
        comparativeDate = 'Вчера'
    }
    else {
        comparativeDate = dateFormatter.format(d)
    }


    return{
        comparativeDate: comparativeDate,
        date: dateFormatter.format(d),
        time: timeFormatter.format(d),
        seconds: d.getSeconds()
    }
}
export default mongoDate