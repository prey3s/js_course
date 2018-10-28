const Appointment = require('./appointment')

module.exports = class HairStylist {
    constructor(name, speciality) {
      this.name = name
      this.speciality = speciality
      this.bookings = []
    //this.clients = []  
    }
    
    works(appointment) {
      this.bookings.push(appointment)
      appointment.stylist = this.name
    }

    static create({name, speciality, bookings}) {
      const stylist = new HairStylist(name)
      
      stylist.bookings = bookings.map(Appointment.create)
  
      return stylist
    }
  } 
