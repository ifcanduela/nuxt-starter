import type { CommandContext } from "citty"

function TestCommand(ctx: CommandContext) {
	console.log(ctx.args)
}

export default TestCommand
