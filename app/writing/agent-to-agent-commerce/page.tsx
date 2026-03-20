import FadeUp from "@/components/FadeUp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent-to-Agent Commerce: From Protocol to Practice — Aziz Kane",
  description:
    "How HLOS, STAAMP receipts, and the x402 protocol create the trust and settlement layer that agent-to-agent commerce needs to move from demos to production.",
};

export default function AgentToAgentCommerceArticle() {
  return (
    <article className="py-16 max-w-[680px] mx-auto">
      <FadeUp>
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2 py-0.5 text-[10px] rounded bg-accent3/10 text-accent3 border border-accent3/20 uppercase tracking-wider">
              AI
            </span>
            <span className="px-2 py-0.5 text-[10px] rounded bg-accent3/10 text-accent3 border border-accent3/20 uppercase tracking-wider">
              Economics
            </span>
            <span className="text-[11px] text-dim ml-2">2025</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl text-bright leading-tight mb-4"
            style={{ fontFamily: "var(--font-serif), serif" }}
          >
            Agent-to-Agent Commerce: From Protocol to Practice
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
            Picture this: a procurement agent finds a cheaper supplier for your
            office furniture. It has the authority to negotiate. It has the
            context — your budget, your specs, your delivery timeline. It drafts
            a purchase order. And then it stops. Because there&apos;s no way for
            the supplier&apos;s agent to verify who it&apos;s dealing with, no
            way to settle payment without a human wiring funds, and no record
            either side can trust after the fact.
          </p>

          <p>
            The agent is capable. The commerce layer is missing.
          </p>

          <p>
            That&apos;s the question I kept coming back to while building the{" "}
            <a
              href="/projects"
              className="text-accent hover:underline"
            >
              procurement agent
            </a>
            :{" "}
            <span className="text-bright italic">
              who pays the agent? And how does anyone trust the receipt?
            </span>
          </p>

          <hr className="border-border my-8" />

          <h2 className="text-bright text-lg font-medium mt-10 mb-4">
            The Commerce Gap
          </h2>

          <p>
            We&apos;ve solved agent capability. Tool calls, function calling,
            multi-step reasoning, web browsing — the demos are impressive and
            the production deployments are real. An agent can research suppliers,
            compare prices, draft emails, and negotiate terms. That part works.
          </p>

          <p>
            What doesn&apos;t work is the last mile. The moment an agent needs
            to <span className="text-bright">commit resources</span> — spend
            money, sign an agreement, make a binding promise — the entire
            system falls back to human intervention. Someone has to log in,
            review, approve, and click &quot;send.&quot;
          </p>

          <p>
            The gap isn&apos;t capability. It&apos;s{" "}
            <span className="text-bright">trust plus payment</span>. Two
            problems that look separate but are actually the same problem: how
            do you create a verifiable record that both parties — and any
            observer — can rely on?
          </p>

          <p>
            Current agent frameworks don&apos;t address this. They give you
            tool definitions, retry logic, and orchestration. They assume
            settlement happens somewhere else. But &quot;somewhere else&quot;
            means a human in a browser, which means the entire value proposition
            of autonomous agents collapses at the transaction boundary.
          </p>

          <hr className="border-border my-8" />

          <h2 className="text-bright text-lg font-medium mt-10 mb-4">
            HLOS: The Minimum Viable Trust Layer
          </h2>

          <p>
            <a
              href="https://hlos.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent3 hover:underline"
            >
              HLOS
            </a>{" "}
            is an agentic commerce protocol. The framing I find most useful:
            it&apos;s the settlement layer for agent-to-agent transactions.
          </p>

          <p>
            Think about what settlement means in finance. It&apos;s not just
            &quot;money moved.&quot; It&apos;s: this transaction happened, at
            this time, these parties were involved, these rules were followed,
            and no one can dispute that afterward. Settlement converts a
            handshake into a record.
          </p>

          <p>
            HLOS provides three primitives — the minimum viable trust layer for
            agent commerce:
          </p>

          <div className="space-y-4">
            <p>
              <span className="text-bright">Identity — who.</span> Every agent
              gets a verifiable on-chain identity, registered as a Metaplex
              Core NFT on Solana. This isn&apos;t a profile page. It&apos;s a
              cryptographic anchor that ties every action to a specific agent.
              When a procurement agent sends a purchase order, the receiving
              agent can verify the sender&apos;s identity without trusting a
              centralized directory. The identity is self-sovereign — no
              platform can revoke it, and no intermediary sits between the
              agents.
            </p>

            <p>
              <span className="text-bright">Ledger — what happened.</span> Every
              transaction produces an immutable record. Not a log file on
              someone&apos;s server — a cryptographically signed,
              append-only ledger entry that neither party can alter after the
              fact. This is the STAAMP receipt system. It records what was
              agreed, what was delivered, what was paid, and when. The ledger is
              the source of truth that replaces the trust you&apos;d normally
              place in a relationship or a brand.
            </p>

            <p>
              <span className="text-bright">Attestation — was it good.</span>{" "}
              After a transaction completes, a quality score is submitted
              on-chain via the ATOM protocol. This is where reputation begins.
              Not self-reported ratings, not reviews you can delete — permanent,
              verifiable attestations that accumulate over time. An agent that
              delivers late, overcharges, or underperforms carries that record
              publicly. An agent that consistently delivers builds a track
              record that opens doors.
            </p>
          </div>

          <p>
            These three primitives — identity, ledger, attestation — are
            deliberately minimal. They don&apos;t try to solve business logic,
            domain-specific negotiation, or workflow orchestration. They solve
            the trust problem at the infrastructure level so that everything
            built on top can assume settlement works.
          </p>

          <hr className="border-border my-8" />

          <h2 className="text-bright text-lg font-medium mt-10 mb-4">
            STAAMP: Why the Receipt Is the Product
          </h2>

          <p>
            Traditional invoices are documents. They describe what should
            happen. A STAAMP receipt describes{" "}
            <span className="text-bright">what did happen</span> — and
            proves it cryptographically.
          </p>

          <p>
            The data model is built around five fields: Service, Time, Amount,
            Agent, Method, and Proof. Each receipt captures what service was
            rendered, when, how much was paid, which agents were involved, the
            payment method used, and a cryptographic proof that ties the whole
            thing together. It&apos;s not a PDF you email — it&apos;s a
            structured, machine-readable record that any agent can verify
            independently.
          </p>

          <p>
            The append-only constraint is critical. In traditional commerce,
            disputes happen because records can be altered — an invoice gets
            &quot;corrected,&quot; a line item disappears, a date shifts.
            STAAMP receipts can&apos;t be edited after creation. If something
            needs to change, you issue a new receipt that references the
            original. The history is always intact. This matters less when two
            humans are exchanging invoices and it matters enormously when two
            agents are transacting at scale — thousands of transactions per
            hour, across jurisdictions, with no human reviewing each one.
          </p>

          <p>
            The difference from traditional invoices is architectural, not
            cosmetic. An invoice says &quot;please pay me.&quot; A STAAMP
            receipt says &quot;this happened, here&apos;s the proof, verify it
            yourself.&quot;
          </p>

          <hr className="border-border my-8" />

          <h2 className="text-bright text-lg font-medium mt-10 mb-4">
            The Procurement Agent: A Full Walkthrough
          </h2>

          <p>
            The{" "}
            <span className="text-accent">HLOS Procurement Agent</span> does
            one thing well: it negotiates with your suppliers, tracks purchase
            orders, and charges 18% of verified savings. No savings, no fee.
          </p>

          <p>
            Here&apos;s the full flow, step by step:
          </p>

          <div className="space-y-4">
            <p>
              <span className="text-bright">1. Discover.</span> The agent scans
              your existing supplier contracts and purchase history. It
              identifies categories where spend is high and pricing hasn&apos;t
              been renegotiated recently. It builds a target list — not by
              guessing, but by analyzing your actual procurement data.
            </p>

            <p>
              <span className="text-bright">2. Negotiate.</span> The Negotiation
              Agent contacts suppliers directly — via email, through
              procurement portals, or via supplier-side agents if they exist.
              It has market pricing data. It knows your volume. It makes the
              case for a better rate. Critically, this agent runs in an isolated{" "}
              <span className="text-bright">HLOS space</span> — it can
              communicate externally but cannot access billing, treasury, or
              PO systems. If a supplier sends a manipulated email designed to
              exploit the agent, the blast radius is contained.
            </p>

            <p>
              <span className="text-bright">3. Pay via x402.</span> When a deal
              is reached, payment settles through the x402 protocol. The agent
              sends an HTTP POST. The supplier&apos;s endpoint returns a 402
              Payment Required response with USDC payment instructions — amount,
              wallet address, memo. The agent pays. The supplier&apos;s system
              detects the on-chain payment and releases the goods or service.
              No invoices. No net-30. No &quot;check&apos;s in the mail.&quot;
            </p>

            <p>
              <span className="text-bright">4. Receive and verify.</span> The PO
              Tracking Agent — running in its own isolated space with ERP
              access but no negotiation or billing capability — confirms
              delivery against the purchase order. Quantities, specs,
              timelines. Any discrepancy gets flagged before payment finalizes.
            </p>

            <p>
              <span className="text-bright">5. Attest.</span> The Savings Audit
              Agent — read-only, no write access to anything — calculates
              verified savings by comparing the negotiated price against
              historical spend. Only verified savings trigger the 18% fee.
              The entire calculation is recorded in a STAAMP receipt that the
              client can independently audit.
            </p>
          </div>

          <p>
            Three agents, three isolated spaces, one transaction. The
            isolation isn&apos;t paranoia — it&apos;s the architecture that
            makes autonomy safe. A compromised negotiation agent can&apos;t
            drain the treasury. A buggy PO tracker can&apos;t sign contracts.
            Each agent has the minimum permissions it needs and nothing more.
          </p>

          <hr className="border-border my-8" />

          <h2 className="text-bright text-lg font-medium mt-10 mb-4">
            x402: HTTP for Commerce
          </h2>

          <p>
            The{" "}
            <span className="text-bright">x402 protocol</span> is named after
            the HTTP 402 status code — &quot;Payment Required&quot; — a code
            that&apos;s been reserved since HTTP/1.1 was drafted in 1997 but
            never standardized for actual payments. x402 finally gives it a
            job.
          </p>

          <p>
            The flow is deliberately simple:
          </p>

          <div className="space-y-4">
            <p>
              <span className="text-bright">Step 1.</span> An agent sends a
              standard HTTP POST to a service endpoint — requesting an
              evaluation, a data lookup, a compute job, anything.
            </p>

            <p>
              <span className="text-bright">Step 2.</span> The server responds
              with HTTP 402, including a JSON body: the price (in USDC), the
              recipient wallet address, a payment memo for correlation, and an
              expiry window.
            </p>

            <p>
              <span className="text-bright">Step 3.</span> The requesting agent
              submits an on-chain USDC payment matching the 402 response
              parameters.
            </p>

            <p>
              <span className="text-bright">Step 4.</span> The agent retries the
              original POST, this time including the transaction signature in a
              header. The server verifies payment on-chain and returns the
              result.
            </p>
          </div>

          <p>
            No API keys. No OAuth. No accounts. No invoices. An agent with a
            funded wallet can pay for any x402-enabled service the same way a
            browser with cookies can access any website. The protocol is
            stateless and composable — an agent can chain ten x402 calls
            across ten different providers in a single workflow without any
            provider knowing about the others.
          </p>

          <p>
            This is what makes agent-to-agent commerce scalable. The
            alternative — bespoke payment integrations, billing accounts,
            credit terms — works for a handful of known partners. It falls
            apart when agents need to discover and transact with services
            they&apos;ve never seen before.
          </p>

          <hr className="border-border my-8" />

          <h2 className="text-bright text-lg font-medium mt-10 mb-4">
            Reputation: The Cold-Start Problem
          </h2>

          <p>
            The most interesting implication of agent-to-agent commerce
            isn&apos;t the efficiency gains. It&apos;s the reputation systems
            that emerge from it.
          </p>

          <p>
            Right now, every agent starts from zero. Agent A negotiates with
            Supplier B, but Supplier B has no record of Agent A&apos;s history.
            Next week, a different company deploys Agent A against the same
            supplier, and neither side has context. Every interaction is
            isolated. There&apos;s no memory, no track record, no basis for
            trust beyond the current transaction.
          </p>

          <p>
            This is the cold-start problem, and it&apos;s the same problem
            that eBay, Uber, and Airbnb solved for humans. Their answer was
            ratings — but ratings are self-reported, platform-locked, and easy
            to game. An eBay seller with 10,000 five-star reviews can&apos;t
            port that reputation to Amazon.
          </p>

          <p>
            On-chain attestation solves this differently. Reputation is{" "}
            <span className="text-bright">public</span> — anyone can read an
            agent&apos;s transaction history and quality scores. It&apos;s{" "}
            <span className="text-bright">not self-reported</span> — the
            counterparty submits the attestation, not the agent itself.
            It&apos;s{" "}
            <span className="text-bright">portable</span> — an agent&apos;s
            reputation follows it across platforms, providers, and use cases.
            And it&apos;s{" "}
            <span className="text-bright">permanent</span> — you can&apos;t
            delete a bad review or start over with a fresh account.
          </p>

          <p>
            Over time, this creates emergent market dynamics. Suppliers offer
            better terms to agents with proven track records. Agents with
            strong reputations get priority access to scarce resources. New
            agents pay a premium until they build trust. Commerce has always
            worked this way for humans — we&apos;re building the infrastructure
            to extend it to machines.
          </p>

          <hr className="border-border my-8" />

          <h2 className="text-bright text-lg font-medium mt-10 mb-4">
            The Hard Problems
          </h2>

          <p>
            I don&apos;t want to oversell this. Three things still need solving,
            and they&apos;re genuinely hard:
          </p>

          <div className="space-y-4">
            <p>
              <span className="text-bright">Legal standing.</span> When an agent
              signs a contract, who&apos;s liable? The company that deployed it?
              The protocol operator? The model provider whose weights produced
              the decision? Current contract law assumes a human principal
              behind every agreement. Agent-to-agent contracts don&apos;t have
              that — you have a chain of delegation where the deploying entity
              may not have reviewed or even seen the specific terms the agent
              agreed to. Until legal frameworks catch up, every agent
              transaction carries legal ambiguity. The practical workaround
              today is treating the deploying entity as the principal and
              constraining agent authority through wallet limits and scope
              restrictions — but that&apos;s a patch, not a solution.
            </p>

            <p>
              <span className="text-bright">Adversarial inputs.</span> Supplier
              emails, product listings, and counterparty messages are all
              untrusted content. A sophisticated adversary could craft a
              supplier response designed to manipulate a negotiation agent —
              injecting hidden instructions in a price quote, embedding
              misleading context in a product description, or exploiting the
              agent&apos;s optimization function to accept terms that look good
              on one metric but are terrible on another. HLOS&apos;s isolation
              model contains the blast radius, but prompt injection is an
              unsolved problem in the broader AI ecosystem. The defense today is
              defense-in-depth: isolation, wallet limits, human review for
              transactions above a threshold, and anomaly detection on agent
              behavior patterns.
            </p>

            <p>
              <span className="text-bright">Rubric governance.</span> For the{" "}
              <a
                href="/writing/grant-allocator"
                className="text-accent hover:underline"
              >
                grant allocator
              </a>
              , who decides what &quot;good&quot; looks like? For procurement,
              who decides what &quot;fair price&quot; means? Right now, these
              rubrics are hardcoded — I set the evaluation dimensions and their
              weights. That works for a single-operator system but breaks the
              moment multiple stakeholders need input. A DAO funding public
              goods has different criteria than a corporate procurement
              department, and both need the ability to define their rubrics
              without breaking the autonomous evaluation chain. This is a
              governance problem disguised as a technical one, and governance
              problems are the hardest kind.
            </p>
          </div>

          <p>
            These aren&apos;t reasons to stop. They&apos;re the actual work.
            The protocols exist. The infrastructure is live on devnet. The
            question now is whether the hard problems get solved fast enough for
            agent commerce to matter — or whether the ecosystem settles for
            human-in-the-loop workarounds that defeat the purpose.
          </p>

          <p>
            I&apos;m betting on the former.
          </p>

          <hr className="border-border my-8" />

          <div className="flex items-center gap-3 text-[11px] text-dim mt-8">
            <a
              href="https://hlos.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              hlos.ai ↗
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
