//  es5
function Server(name, ip) {
	this.name = name;
	this.ip = ip;
}

Server.prototype.getUrl = function() {
	return `https://${this.ip}:80`;
};

const aws = new Server('AWS German', '81.21.21.32');
console.log(aws.getUrl());

// es6
class Serv {
	constructor(name, ip) {
		this.name = name;
		this.ip = ip;
	}

	getUrl() {
		return `https://${this.ip}:80`;
	}
}

const awsServ = new Serv('AWS France', '95.32.32.45');
console.log(awsServ.getUrl());
