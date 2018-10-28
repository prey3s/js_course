const HairSalon = require('./hairsalon')

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

  static create({name, hair}) {
    const client = new Client(name)
    
    client.reservations = reservations.map(HairSalon.create)

    return client
  }

} 
