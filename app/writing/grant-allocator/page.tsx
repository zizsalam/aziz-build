import FadeUp from "@/components/FadeUp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grant Allocator: Design Rationale & Architecture — Aziz Kane",
  description:
    "Why I built a fully autonomous grant allocation system with adversarial AI agents, hard wallet limits, and on-chain identity — and what it means for agentic coordination.",
};

export default function GrantAllocatorArticle() {
  return (
    <article className="py-16 max-w-[680px] mx-auto">
      <FadeUp>
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2 py-0.5 text-[10px] rounded bg-accent3/10 text-accent3 border border-accent3/20 uppercase tracking-wider">
              DAO Tooling
            </span>
            <span className="px-2 py-0.5 text-[10px] rounded bg-accent3/10 text-accent3 border border-accent3/20 uppercase tracking-wider">
              AI
            </span>
            <span className="text-[11px] text-dim ml-2">2025</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl text-bright leading-tight mb-4"
            style={{ fontFamily: "var(--font-serif), serif" }}
          >
            Grant Allocator: Design Rationale & Architecture
          </h1>
          <p className="text-dim text-sm">
            By{" "}
            <a href="/" className="text-accent hover:underline">
              Aziz Kane
            </a>
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={100}>
        <div className="prose-custom space-y-6 text-body text-sm leading-[1.85]">
          <p>
            Most grant systems have the same problem: they&apos;re slow, opaque,
            and biased toward whoever writes the best proposal — not who does the
            best work.
          </p>

          <p>
            I&apos;ve been on both sides of this. At{" "}
            <a
              href="https://medic.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent3 hover:underline"
            >
              Medic
            </a>
            , I watched organizations spend weeks waiting on funding decisions
            that could have been made in hours. People doing critical community
            health work, stuck in a queue because a three-person committee hadn&apos;t
            met yet. At{" "}
            <span className="text-bright">Wave</span>, I saw how trust-based
            systems break the moment they scale. The humans in the loop become
            bottlenecks, and the bottlenecks introduce bias — not malicious bias,
            just the kind that creeps in when you&apos;re reviewing your fortieth
            proposal on a Thursday afternoon.
          </p>

          <p>
            The question I started with was simple:{" "}
            <span className="text-bright italic">
              what if agents held the money and made the calls?
            </span>
          </p>

          <hr className="border-border my-8" />

          <h2 className="text-bright text-lg font-medium mt-10 mb-4">
            What I Built
          </h2>

          <p>
            <a
              href="https://github.com/zizsalam/mini-grant-allocator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Mini Grant Allocator
            </a>{" "}
            is a fully autonomous grant allocation system. No human approves or
            rejects proposals. Three AI agents collaborate to evaluate
            submissions, and a fourth agent holds the treasury and disburses
            funds based on their verdict.
          </p>

          <p>
            That last sentence sounds scary. It shouldn&apos;t. The design is
            deliberately conservative — the agents are constrained, auditable,
            and wrong-proof by construction. Every decision has a paper trail.
            Every dollar has a receipt. The point isn&apos;t to remove
            accountability. It&apos;s to make accountability automatic.
          </p>

          <hr className="border-border my-8" />

          <h2 className="text-bright text-lg font-medium mt-10 mb-4">
            The Three-Agent Evaluation Panel
          </h2>

          <p>The panel is adversarial by design.</p>

          <p>
            <span className="text-accent">The Evaluator</span> scores each
            proposal across five dimensions: team credibility, impact potential,
            budget realism, goal alignment, and execution risk. It produces a
            0–100 score per dimension with explicit reasoning — not a vague
            &quot;looks good,&quot; but a structured breakdown you can argue with.
          </p>

          <p>
            <span className="text-accent2">The Skeptic</span> doesn&apos;t try
            to agree. That&apos;s the whole point. It reads the Evaluator&apos;s
            output and actively looks for the weakest arguments, the assumptions
            that haven&apos;t been challenged, the places where a 72/100 might
            really be a 45 if you squint. It argues back — in writing, on the
            record.
          </p>

          <p>
            <span className="text-accent3">The Coordinator</span> reads both
            sides. It resolves disagreements, produces a final score, and writes
            a plain-language explanation of the decision — including why the
            proposal passed or failed each dimension. This is the output a human
            funder would actually want to read.
          </p>

          <p className="text-dim italic">
            Three agents. One decision. Every step logged.
          </p>

          <hr className="border-border my-8" />

          <h2 className="text-bright text-lg font-medium mt-10 mb-4">
            The Treasury Agent
          </h2>

          <p>
            This is where things get interesting. The treasury agent holds a real
            wallet with hard limits enforced by the{" "}
            <a
              href="https://hlos.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent3 hover:underline"
            >
              HLOS
            </a>{" "}
            infrastructure layer. It can&apos;t be prompted into overspending.
            It can&apos;t be manipulated through a clever proposal. It doesn&apos;t
            have opinions. It runs one job: when the panel returns a score ≥70,
            disburse full funding. 50–69, partial. Below 50, reject.
          </p>

          <p>
            Every disbursement produces a cryptographic{" "}
            <span className="text-bright">STAAMP receipt</span> — an immutable
            record that any stakeholder can independently audit. The ledger is
            append-only. Nothing gets deleted, overwritten, or
            &quot;corrected.&quot; If you want to know where every dollar went,
            you can trace it. That&apos;s not a feature — it&apos;s the
            architecture.
          </p>

          <hr className="border-border my-8" />

          <h2 className="text-bright text-lg font-medium mt-10 mb-4">
            On-Chain Identity
          </h2>

          <p>
            Each agent has a verifiable on-chain identity, registered as a{" "}
            <span className="text-bright">Metaplex Core NFT</span> on Solana
            devnet. This isn&apos;t a gimmick — it&apos;s the foundation for
            agent reputation. When you&apos;re letting AI agents make financial
            decisions, the question isn&apos;t just &quot;did it work this
            time?&quot; It&apos;s &quot;how has this agent performed over
            hundreds of decisions?&quot;
          </p>

          <p>
            After each batch run, a quality score is submitted on-chain via the{" "}
            <span className="text-bright">ATOM protocol</span>. Over time, the
            system builds a tamper-proof track record of funding decision quality.
            An agent that consistently makes poor calls accumulates that record
            publicly. No one can edit the tape.
          </p>

          <p>
            The evaluation API is exposed via the{" "}
            <span className="text-bright">x402 protocol</span>: external agents
            POST a proposal and receive a 402 response with USDC payment
            instructions. 0.10 USDC per evaluation. Pay, get a verdict. No
            accounts, no API keys, no handshake — just a transaction.
          </p>

          <hr className="border-border my-8" />

          <h2 className="text-bright text-lg font-medium mt-10 mb-4">
            Why These Design Choices
          </h2>

          <div className="space-y-4">
            <p>
              <span className="text-bright">No human in the loop</span> — not
              because humans are bad at this, but because humans in the loop
              become the attack surface. The moment someone can email a reviewer,
              the system is gameable. I&apos;ve seen it happen. A well-connected
              organization gets a faster review. A first-time applicant gets
              deprioritized. None of it intentional, all of it structural. I
              wanted a system that&apos;s genuinely the same for everyone.
            </p>

            <p>
              <span className="text-bright">Adversarial agents</span> — a single
              evaluator is too easy to fool with a well-written proposal. Good
              writing isn&apos;t the same as good work, and the gap between the
              two is where most grant fraud lives. The Skeptic&apos;s job is to
              be skeptical, not helpful. That tension — Evaluator optimism vs.
              Skeptic pessimism — produces decisions that are harder to game than
              either alone.
            </p>

            <p>
              <span className="text-bright">Hard wallet limits</span> — the
              treasury agent doesn&apos;t ask for permission. It operates within
              constraints set at configuration time. If the wallet is empty, no
              disbursement happens. No exceptions, no overrides, no
              &quot;emergency&quot; approvals. This is the part that makes
              traditional grant administrators uncomfortable, and it&apos;s also
              the part that makes the system trustworthy.
            </p>

            <p>
              <span className="text-bright">Full audit trail</span> — every
              token, every decision, every score, every disagreement between
              agents. Not because I expect fraud, but because trust requires
              evidence. The whole point of removing humans from the decision loop
              is that the machine&apos;s reasoning is legible in a way that a
              committee meeting never is.
            </p>
          </div>

          <hr className="border-border my-8" />

          <h2 className="text-bright text-lg font-medium mt-10 mb-4">
            What&apos;s Next
          </h2>

          <p>
            The system runs on devnet today. Moving to mainnet means solving a
            real problem: who defines the evaluation rubric? Right now it&apos;s
            hardcoded — I set the five dimensions and their weights. A production
            version needs rubric governance — the ability for funding communities
            to define what &quot;good&quot; looks like without breaking the
            autonomous evaluation chain.
          </p>

          <p>
            That&apos;s a coordination problem. And coordination problems are
            exactly what{" "}
            <a
              href="https://efficientfrontierlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent3 hover:underline"
            >
              agentic commerce
            </a>{" "}
            is built to solve.
          </p>

          <hr className="border-border my-8" />

          <div className="flex items-center gap-3 text-[11px] text-dim mt-8">
            <a
              href="https://github.com/zizsalam/mini-grant-allocator"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              View the repo ↗
            </a>
            <span>·</span>
            <a href="/projects" className="hover:text-accent transition-colors">
              All projects
            </a>
            <span>·</span>
            <a href="/writing" className="hover:text-accent transition-colors">
              All writing
            </a>
          </div>
        </div>
      </FadeUp>
    </article>
  );
}
