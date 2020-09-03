exports.date = function (birth) {

    const date = new Date(birth)

    const year = date.getUTCFullYear()
    const month = `0${date.getUTCMonth() + 1}`.slice(-2)
    const day = `0${date.getUTCDate()}`.slice(-2)

    return {
        birthDay:  `${day}/${month}`,
        iso: `${year}-${month}-${day}`,
        created_at: `${day}/${month}/${year}`
    }
}