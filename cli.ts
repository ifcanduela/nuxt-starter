/**
 * This file is meant to be run with Bun.
 *
 * As far as I know, setting up ts-node to run this file
 * is a futile exercise that will send you in a downward
 * spiral of desperation and madness.
 *
 * Use `bun nu.ts` instead.
 */
import { defineCommand, runMain } from "citty"
import consola from "consola"
import TestCommand from "./commands/TestCommand.ts"

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
	run(payload) {
		consola.warn("The print command is not yet implemented")
		consola.warn("But here are the arguments you passed:")
		console.log(payload.rawArgs)
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
