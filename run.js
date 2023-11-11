import { Command } from "commander"
import TestCommand from "./commands/TestCommand.js"

const program = new Command()

program
	.version("1.0.0")
	.description("Run commands using ts-node and commander.js")

program.command("test-command").action(TestCommand)

program.parse(process.argv)
