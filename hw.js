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

var Client = class {
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

var Appointment = class {
  constructor(date, time, available) {
    this.date = date
    this.time = time
    this.available = false
    this.reservedBy = ""
    }
}

var May1_noon = new Appointment ("May 1", "noon")  


HappyHair.offer(May1_noon)
anna.reserve(May1_noon)
