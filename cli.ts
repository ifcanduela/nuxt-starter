/**
 * This file is meant to be run with Bun or tsx.
 *
 * Use `bun cli.ts` or `npx tsx cli.ts` instead.
 */
import { defineCommand, runMain } from "citty"
import { consola } from "consola"
import TestCommand from "./commands/TestCommand.ts"

const main = defineCommand({
	meta: {
		name: "cli",
		version: "1.0.0",
		description: "My Awesome CLI App",
	},
	subCommands: {
		print: defineCommand({
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
		}),
		test: defineCommand({
			meta: {
				name: "test",
				description: "This is a sub-command",
			},
			run: TestCommand,
		}),
	},
})

runMain(main)
