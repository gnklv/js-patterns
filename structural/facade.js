class Complaints {
  constructor() {
    this.complaints = [];
  }
  
  reply(complaint) {}

  add(complaint) {
    this.complaints.push(complaint);

    return this.reply(complaint);
  }
}

class ProductComplaint extends Complaints {
  reply({ id, customer, details }) {
    return `Product: ${id}: ${customer} (${details})`;
  }
}

class ServiceComplaint extends Complaints {
  reply({ id, customer, details }) {
    return `Service: ${id}: ${customer} (${details})`;
  }
}

class ComplaintRegistry {
  register(customer, type, details) {
    const id = Date.now();
    let complaint;

    if (type === 'product') {
      complaint = new ProductComplaint();
    } else if (type === 'service') {
      complaint = new ServiceComplaint();
    }

    return complaint.add({ id, customer, details });
  }
}

const complaintRegistry = new ComplaintRegistry();

console.log(complaintRegistry.register('George', 'service', 'not available'));
console.log(complaintRegistry.register('Daria', 'product', 'type error'));