import { AnimatedSpan, Terminal, TypingAnimation } from "../../ui/terminal";

export function CodeTerminal() {
  return (
    <Terminal className="font-mono leading-tight bg-slate-900/40 backdrop-blur-md shadow-xl border border-slate-800">
      <TypingAnimation className="font-bold text-cyan-300  ">
        &gt; durgesh --init partnership
      </TypingAnimation>
      <AnimatedSpan className="text-slate-400 border-b">
        &gt; Connecting to your vision...
        <span className="text-emerald-400">
          - Requirements : Understood clearly.
        </span>
        <span className="text-emerald-400">- Goals: Aligned with yours.</span>
      </AnimatedSpan>
      <AnimatedSpan className="text-slate-400 border-b">
        &gt; Building the system...
        <span className="text-emerald-400">- Code: Clean & Scalable.</span>
        <span className="text-emerald-400">- Design: Modern & Fast.</span>
        <span className="text-emerald-400">
          - Desktop-Mobile: Fully Responsive.
        </span>
      </AnimatedSpan>
      <AnimatedSpan className="text-slate-400 border-b">
        &gt; Deploying to production...
        <span className="text-emerald-400">- Site is Live.</span>
        <span className="text-emerald-400">- Security: Active.</span>
      </AnimatedSpan>
      <AnimatedSpan className="text-slate-400 ">
        Post-Launch Status:
        <span className="text-emerald-400">
          - Requirements : Understood clearly.
        </span>
        <span className="text-emerald-400">- Goals: Aligned with yours.</span>
      </AnimatedSpan>
    </Terminal>
  );
}
