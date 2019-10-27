export function convertDate(serverDate) {
    const date = new Date(serverDate)
    const allDate = date.toLocaleDateString()
    const hours = date.getHours()
    const minutes = date.getMinutes()

    const result = allDate + ' - ' + hours + ':' + minutes

    return result
}
