class SimpleMembership {
	constructor(name) {
		this.name = name;
		this.cost = 50;
	}
}

class StandardMembership {
	constructor(name) {
		this.name = name;
		this.cost = 150;
	}
}

class PremiumMembership {
	constructor(name) {
		this.name = name;
		this.cost = 500;
	}
}

class MembershipFactory {
	static get list() {
		return {
			simple: SimpleMembership,
			standard: StandardMembership,
			premium: PremiumMembership
		}
	}

	create(name, type = 'simple') {
		const Membership = MembershipFactory.list[type] || MembershipFactory.list.simple;
		const membership = new Membership(name);
		membership.type = type;
		membership.define = function() {
			console.log(`${this.name} (${this.type}: ${this.cost})`);
		}

		return membership;
	}
}

const membershipFactory = new MembershipFactory();
const members = [
	membershipFactory.create('George', 'simple'),
	membershipFactory.create('Daria', 'standard'),
	membershipFactory.create('Aleksandr', 'premium')
];
members.forEach(m => {
	m.define();
});