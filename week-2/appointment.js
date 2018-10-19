module.exports = class Appointment {
  constructor(date, time, available) {
    this.date = date
    this.time = time
    this.available = false
    this.reservedBy = ""
    }
}
