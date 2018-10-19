/*
Project: App for Finding Hairsalons with Available Appointments
Classes:
  Client
  HairSalon 
  Appointment
  
Interactions:
  HairSalon offers appointments
  Client can reserve appointment
  
*/


var anna = new Client('Anna', 'short') 


var HairSalon = class {
  constructor(salonName) {
    this.name = salonName
    this.appointments = []
  }
  
   offer(appointment) {
    this.appointments.push(appointment)
    appointment.available = true 
   }
}  
  
var HappyHair = new HairSalon("Happy Hair")


var May1_noon = new Appointment ("May 1", "noon")  


HappyHair.offer(May1_noon)
anna.reserve(May1_noon)
