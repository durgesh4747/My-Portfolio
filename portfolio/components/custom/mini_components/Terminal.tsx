import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "../../ui/terminal"

export function CodeTerminal() {
  return (
    <Terminal className="font-bold">
      <TypingAnimation className="font-bold">Solve Client Problem</TypingAnimation>

      <AnimatedSpan className="text-green-500">
        ✔ Analyzing Client Problem.
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Figuring out Solution.
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Validating Tailwind CSS.
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Validating import alias.
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Writing components.json.
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Checking registry.
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Updating tailwind.config.ts
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Updating app/globals.css
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Optimizing the Final Product.
      </AnimatedSpan>

      <AnimatedSpan className="text-blue-500">
        <span>ℹ Final Product Completed:</span>
        <span className="pl-2">- Deployment</span>
      </AnimatedSpan>

      <TypingAnimation className="text-muted-foreground">
        Here is your Product.
      </TypingAnimation>

      <TypingAnimation className="text-muted-foreground">
        Don&apos;t Worry We are always there for You.
      </TypingAnimation>
    </Terminal>
  )
}
