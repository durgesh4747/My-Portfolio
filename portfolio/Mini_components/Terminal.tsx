import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "../components/ui/terminal";

export function CodeTerminal() {
  return (
    <Terminal className="font-bold bg-slate-900/40 backdrop-blur-md">
      <TypingAnimation className="font-bold text-cyan-300">
        &gt; durgesh --init partnership
      </TypingAnimation>

      <AnimatedSpan className="text-slate-400">
        &gt; Connecting to your vision...
        <span className="text-emerald-400">
          - Requirements : Understood clearly.
        </span>
        <span className="text-emerald-400">- Goals: Aligned with yours.</span>
      </AnimatedSpan>
      <AnimatedSpan className="text-slate-400">
        &gt; Building the system...
        <span className="text-emerald-400">- Code: Clean & Scalable.</span>
        <span className="text-emerald-400">- Design: Modern & Fast.</span>
        <span className="text-emerald-400">
          - Desktop-Mobile: Fully Responsive.
        </span>
      </AnimatedSpan>
      <AnimatedSpan className="text-slate-400">
        &gt; Deploying to production...
        <span className="text-emerald-400">- Site is Live.</span>
        <span className="text-emerald-400">- Security: Active.</span>
      </AnimatedSpan>
      <AnimatedSpan className="text-slate-400">
        Post-Launch Status:
        <span className="text-emerald-400">
          - Requirements : Understood clearly.
        </span>
        <span className="text-emerald-400">- Goals: Aligned with yours.</span>
      </AnimatedSpan>
    </Terminal>
  );
}

// > Connecting to your vision...
//   ✔ Requirements: Understood clearly.
//   ✔ Goals: Aligned with yours.

// > Building the system...
//   ✔ Code: Clean & Scalable.
//   ✔ Design: Modern & Fast.
//   ✔ Mobile: Fully Responsive.

// &gt; Deploying to production...
//   ✔ Site is Live 🚀.
//   ✔ Security: Active.

// ℹ Post-Launch Status:
//   [ACTIVE] Long-term Support Enabled.

//   > Don't worry, the job isn't done yet.
//   > I am always just one message away.
//   > Your growth is my reputation.

// > _
