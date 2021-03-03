const mongoDate = (mongoDate) => {
    let d = new Date(mongoDate)
    let formatter = new Intl.DateTimeFormat("ru");
    let formatter2 = new Intl.DateTimeFormat("ru",{hour: '2-digit', minute: '2-digit'});

    return{
        date: formatter.format(d),
        time: formatter2.format(d),
        seconds: d.getSeconds()
    }
}
export default mongoDate