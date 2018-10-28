const Appointment = require('./appointment')

module.exports = class Client {
  constructor(name, hair) {
    this.name = name
    this.hair = hair
    this.reservations = []
    
  }
  
  books(appointment) {
    this.reservations.push(appointment)
    appointment.available = false
    appointment.bookedBy = this.name
  }

  static create({name, hair, reservations}) {
    const client = new Client(name, hair)
    
    client.reservations = reservations.map(Appointment.create)

    return client
  }

} 
