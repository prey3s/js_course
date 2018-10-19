module.exports = class HairSalon {
  constructor(salonName) {
    this.name = salonName
    this.appointments = []
  }
  
   offer(appointment) {
    this.appointments.push(appointment)
    appointment.available = true 
   }
}  
