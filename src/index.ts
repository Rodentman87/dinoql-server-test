import { parse } from "dinoql-ts";
import { DinoQLServer, ResourceHandler } from "dinoql-server-ts";
import { readFileSync } from "fs";

const content = readFileSync("./schema.dinoql", "utf8");
const document = parse(content);

const server = new DinoQLServer({
	schema: document,
});

enum UserRole {
	ADMIN = "ADMIN",
	USER = "USER",
	GUEST = "GUEST",
}

interface User {
	id: number;
	username: string;
	createdAt: Date;
	role: UserRole;
	displayName?: string;
	friends: { id: number }[];
	email: string;
}

const users: User[] = [
	{
		id: 1,
		username: "maisy",
		createdAt: new Date("2020-01-01"),
		role: UserRole.ADMIN,
		displayName: "Maisy",
		email: "example@example.com",
		friends: [
			{
				id: 2,
			},
		],
	},
	{
		id: 2,
		username: "madeline",
		createdAt: new Date("2020-01-01"),
		role: UserRole.ADMIN,
		displayName: "Madeline",
		email: "strawberry@celeste.mountain",
		friends: [
			{
				id: 1,
			},
		],
	},
];

class UserHandler extends ResourceHandler {
	get resourceName(): string {
		return "User";
	}

	get(params: { id: number }) {
		return users
			.filter((user) => user.id === params.id)
			.map((u) => ({
				...u,
				email: undefined,
			}))[0];
	}

	test(_params: { roles: UserRole[] }) {
		return true;
	}

	findByName(params: { name: string }) {
		const filtered = users
			.filter((user) => user.username.startsWith(params.name))
			.map((u) => ({
				...u,
				email: undefined,
			}));
		return filtered;
	}

	create(params: { username: string; displayName?: string; email: string }) {
		const user = {
			id: users.length + 1,
			role: UserRole.GUEST,
			username: params.username,
			displayName: params.displayName,
			createdAt: new Date(),
			email: params.email,
			friends: [],
		};
		users.push(user);
		return user;
	}
}

class MeHandler extends ResourceHandler {
	get resourceName(): string {
		return "Me";
	}

	get() {
		return users.find((user) => user.id === 1);
	}

	changeEmail(params: { email: string }) {
		const user = users.find((user) => user.id === 1);
		if (user) {
			user.email = params.email;
		}
		return user;
	}
}

server.addResourceHandler(new UserHandler());
server.addResourceHandler(new MeHandler());

server.start(8787);
console.log("Server listening on port 8787");
