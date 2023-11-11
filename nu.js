import { defineCommand, runMain } from "citty"
import consola from "consola"
import TestCommand from "./commands/TestCommand.js"

const test = defineCommand({
	meta: {
		name: "test",
		description: "This is a sub-command",
	},
	run: TestCommand,
})

const print = defineCommand({
	meta: {
		name: "print",
	},
	args: {
		name: {
			type: "positional",
			description: "Your name",
			required: true,
		},
		friendly: {
			type: "boolean",
			description: "Use friendly greeting",
		},
	},
	run() {
		consola.warn("The print command is not yet implemented")
	},
})

const main = defineCommand({
	meta: {
		name: "hello",
		version: "1.0.0",
		description: "My Awesome CLI App",
	},
	subCommands: {
		print: print,
		test: test,
	},
})

runMain(main)
