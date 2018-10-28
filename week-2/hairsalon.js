const Appointment = require('./appointment')

module.exports = class HairSalon {
  constructor(salonName) {
    this.name = salonName 
    this.appointments = []
  }
  
   offer(appointment) {
    this.appointments.push(appointment)
    appointment.available = true 
   }

   static create({name, appointments}) {
     const hairSalon = new HairSalon(name)
     
     hairSalon.appointments = appointments.map(Appointment.create)

     return hairSalon
   }
}  
