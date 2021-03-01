const mongoDate = (mongoDate) => {
    let daysSeparate = mongoDate.split('T')
    let date = daysSeparate[0];
    let timeSeparate = daysSeparate[1];
    timeSeparate = timeSeparate.split(':')
    let time = timeSeparate.slice(0,2).join(':')
    let seconds = timeSeparate[2].replace('Z','')
    return{
        date: date,
        time: time,
        seconds: seconds
    }
}
export default mongoDate