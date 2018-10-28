module.exports = class Appointment {
  constructor(date, time, available) {
    this.date = date
    this.time = time
    this.available = false
    this.bookedBy = ""
    this.stylist = ""
    }

    static create({date, time, available}) {
      return new Appointment(date, time, avaialable)
    }
}
