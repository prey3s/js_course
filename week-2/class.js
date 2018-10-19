
module.exports = class Client {
  constructor(name, hair) {
    this.name = name
    this.hair = hair
    this.reservations = []
    
  }
  
  reserve(appointment) {
    this.reservations.push(appointment)
    appointment.available = false
  }
} 
