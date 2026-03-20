import FadeUp from "@/components/FadeUp";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voice AI for Informal Merchants: Lessons from Sentreso — Aziz Kane",
  description:
    "Why dashboards fail informal merchants, how voice-first design changes everything, and what we learned building Sentreso for Francophone West African markets.",
};

export default function VoiceAIInformalMerchantsArticle() {
  return (
    <article className="py-16 max-w-[680px] mx-auto">
      <FadeUp>
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2 py-0.5 text-[10px] rounded bg-accent3/10 text-accent3 border border-accent3/20 uppercase tracking-wider">
              Fintech
            </span>
            <span className="px-2 py-0.5 text-[10px] rounded bg-accent3/10 text-accent3 border border-accent3/20 uppercase tracking-wider">
              Africa
            </span>
            <span className="px-2 py-0.5 text-[10px] rounded bg-accent3/10 text-accent3 border border-accent3/20 uppercase tracking-wider">
              Voice AI
            </span>
            <span className="text-[11px] text-dim ml-2">2025</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl text-bright leading-tight mb-4"
            style={{ fontFamily: "var(--font-serif), serif" }}
          >
            Voice AI for Informal Merchants: Lessons from Sentreso
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
          <div className="rounded-lg overflow-hidden border border-border mb-8">
            <Image
              src="/images/sentreso-launch.jpg"
              alt="Sentreso launch — voice-first financial assistant for informal merchants"
              width={680}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>

          <p>
            It&apos;s 6:30 AM in Dakar. Fatou is arranging bags of rice and
            onions on a wooden table outside her house. By 7, the first
            customers arrive — neighbors buying breakfast ingredients on the way
            to work. She makes change from a small plastic bag of coins. She
            remembers who owes her from yesterday. She keeps no written records.
            By noon, she&apos;ll have processed thirty or forty transactions,
            and if you ask her how much she&apos;s made, she&apos;ll give you
            an approximate number from memory.
          </p>

          <p>
            Fatou isn&apos;t unusual. She&apos;s the norm. Across Francophone
            West Africa, millions of merchants operate exactly like this —
            selling from carts, tables, and storefronts, managing inventory in
            their heads, and tracking finances through a combination of memory,
            notebook scribbles, and trust.
          </p>

          <p>
            We built{" "}
            <span className="text-accent">Sentreso</span> for merchants like
            Fatou. And we got almost everything wrong before we got something
            right.
          </p>

          <hr className="border-border my-8" />

          <h2 className="text-bright text-lg font-medium mt-10 mb-4">
            The Dashboard That Nobody Used
          </h2>

          <p>
            The first version of Sentreso had a dashboard. It was clean. It had
            charts. It showed income vs. expenses over time, category
            breakdowns, daily summaries. We were proud of it.
          </p>

          <p>
            Nobody used it.
          </p>

          <p>
            Not because it didn&apos;t work. Because the assumptions behind it
            were wrong at every level:
          </p>

          <div className="space-y-4">
            <p>
              <span className="text-bright">Literacy assumption.</span> A
              dashboard assumes you can read labels, interpret axes, and
              understand what a bar chart means. Many of our target users are
              functionally literate in their daily lives but not in the visual
              language of data visualization. A pie chart of expense categories
              is not intuitive — it&apos;s a learned convention.
            </p>

            <p>
              <span className="text-bright">Screen-time assumption.</span> A
              dashboard assumes you sit down and review data. Fatou
              doesn&apos;t have a moment between 7 AM and 2 PM when she&apos;s
              not actively serving customers, restocking, or moving between
              locations. A dashboard is a tool for someone with an office. We
              were building for someone with a cart.
            </p>

            <p>
              <span className="text-bright">Data cost assumption.</span> Loading
              a chart-heavy dashboard costs data. In markets where users buy
              connectivity in small increments — 100 FCFA for an hour of data —
              every megabyte has a price. A dashboard that auto-refreshes is
              literally burning money.
            </p>

            <p>
              <span className="text-bright">The deeper failure.</span> We
              weren&apos;t just building the wrong interface. We were solving
              the wrong problem. We assumed merchants wanted{" "}
              <span className="text-bright italic">analysis</span>. They
              wanted{" "}
              <span className="text-bright italic">records</span>.
            </p>
          </div>

          <hr className="border-border my-8" />

          <h2 className="text-bright text-lg font-medium mt-10 mb-4">
            The Insight: Voice Is the Existing Workflow
          </h2>

          <p>
            We tried everything before we tried voice. Simplified data entry.
            Fewer fields. Offline sync. SMS-based logging. Every time we added
            a feature, we added friction. The product got more capable and less
            used.
          </p>

          <p>
            Then we asked a different question:{" "}
            <span className="text-bright italic">
              what does the merchant already know how to do?
            </span>
          </p>

          <p>
            They know how to talk.
          </p>

          <p>
            And here&apos;s the thing we almost missed: they&apos;re already
            narrating their transactions. Watch a merchant in Dakar or Abidjan
            with a notebook. They don&apos;t silently write figures. They talk
            through the transaction as they record it — &quot;twelve bags of
            rice, two thousand each, that&apos;s twenty-four thousand.&quot;
            The voice is the workflow. The notebook is the artifact.
          </p>

          <p>
            We weren&apos;t introducing a new behavior. We were replacing the
            notebook. The merchant keeps talking exactly the way they already
            do. The phone listens instead of the paper.
          </p>

          <p>
            That reframe changed everything.
          </p>

          <hr className="border-border my-8" />

          <h2 className="text-bright text-lg font-medium mt-10 mb-4">
            What We Built
          </h2>

          <p>
            <span className="text-accent">Sentreso</span> is a voice-first
            financial assistant. You talk to it in French — the language our
            users actually speak for commerce — and it records your
            transactions, tracks your balance, and gives you summaries in the
            same conversational format.
          </p>

          <p>
            The stack: React Native + Expo for mobile,{" "}
            <a
              href="https://vapi.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent3 hover:underline"
            >
              VAPI
            </a>{" "}
            for voice AI, Supabase for backend, EAS for the build and
            deployment pipeline.
          </p>

          <h2 className="text-bright text-lg font-medium mt-10 mb-4">
            Transaction Extraction: The Hard Part
          </h2>

          <p>
            Voice recognition is now a commodity. The hard part is what happens
            after transcription — turning unstructured, conversational speech
            into structured financial data.
          </p>

          <p>
            When someone says &quot;I sold twelve bags at two thousand
            each,&quot; the system needs to parse that into a structured
            record: type=income, quantity=12, unit_price=2000, currency=FCFA,
            total=24000. When they say &quot;I spent fifteen thousand on
            transport this morning,&quot; that&apos;s: type=expense,
            amount=15000, category=transport, time=morning.
          </p>

          <p>
            The extraction has to handle ambiguity. &quot;Two thousand&quot; —
            is that a unit price or a total? &quot;This morning&quot; — does
            that mean today or is the user reporting yesterday&apos;s
            transactions? Context matters, and the NLP layer needs to resolve
            these ambiguities correctly or ask for clarification naturally,
            in the flow of conversation.
          </p>

          <p>
            Speed matters as much as accuracy. If the user has to wait three
            seconds for confirmation, the product fails. If they have to repeat
            themselves because the system misheard, the product fails. The
            feedback loop needs to be as fast as a human saying &quot;got
            it&quot; — because that&apos;s what it&apos;s replacing.
          </p>

          <hr className="border-border my-8" />

          <h2 className="text-bright text-lg font-medium mt-10 mb-4">
            Offline-First: Not a Feature, the Architecture
          </h2>

          <p>
            In most fintech products, offline mode is an afterthought — a
            degraded experience you fall back to when connectivity drops. That
            approach fails completely in markets where connectivity is the
            exception, not the rule.
          </p>

          <p>
            Sentreso is built local-first. Every transaction is stored on-device
            immediately. The app is fully functional with no internet
            connection — you can record transactions, check your balance,
            generate receipts, and review history without a single byte leaving
            the phone.
          </p>

          <p>
            When connectivity returns, the sync engine kicks in: outbound
            transactions queue locally and push to Supabase when a connection
            is available. Conflicts are resolved with a last-write-wins
            strategy at the field level, which works because in practice these
            are single-user devices and conflicts are rare. The key design
            choice: the local database is the source of truth, and the server
            is a backup. Not the other way around.
          </p>

          <p>
            Why does &quot;offline as afterthought&quot; fail? Because it
            treats the server as the source of truth and the local store as a
            cache. When the cache can&apos;t reach the server, the app shows
            spinners, disabled buttons, and &quot;no connection&quot; banners.
            The user learns that the app only works sometimes — and
            &quot;sometimes&quot; isn&apos;t good enough to replace a notebook
            that works always.
          </p>

          <hr className="border-border my-8" />

          <h2 className="text-bright text-lg font-medium mt-10 mb-4">
            The Code-Switching Problem
          </h2>

          <p>
            We assumed French was enough. It&apos;s not.
          </p>

          <p>
            Merchants in Dakar don&apos;t speak pure French. They speak a fluid
            mix of French and Wolof, switching mid-sentence without thinking
            about it. &quot;J&apos;ai vendu&quot; (I sold) might be followed
            by a Wolof numeral instead of &quot;douze.&quot; A transaction
            description might start in French and end with a Wolof product
            name that has no French equivalent.
          </p>

          <p>
            Standard ASR (automatic speech recognition) models are trained on
            monolingual corpora. They expect French or Wolof, not both in the
            same utterance. When they encounter a code-switch, they either
            hallucinate a French word that sounds similar to the Wolof one, or
            they drop the segment entirely. Both failure modes are silent —
            the user doesn&apos;t know the system misheard until they check
            their records and find wrong numbers.
          </p>

          <p>
            What we tried: fine-tuning on code-switched audio, building a
            custom vocabulary layer for common Wolof commercial terms, and
            post-processing heuristics that detect likely code-switches and
            re-route them through a Wolof-aware model. What worked best was
            the vocabulary layer — a focused set of ~200 Wolof terms that
            appear frequently in market transactions (product names, numerals,
            greetings, units of measure) injected into the French ASR pipeline
            as known tokens. It&apos;s not a general solution to multilingual
            ASR. It&apos;s a pragmatic one for a specific domain.
          </p>

          <p>
            This is still an active problem. A real solution requires
            multilingual ASR models trained on naturalistic African language
            data — data that barely exists in public datasets. We&apos;re
            contributing to that effort, but it&apos;s a multi-year project.
          </p>

          <hr className="border-border my-8" />

          <h2 className="text-bright text-lg font-medium mt-10 mb-4">
            The Receipt Pivot
          </h2>

          <p>
            We thought people wanted insights. They wanted proof.
          </p>

          <p>
            The most-used feature turned out to be voice receipt generation —
            the ability to say &quot;generate a receipt for this sale&quot; and
            send a professional PDF to a customer via WhatsApp. We hadn&apos;t
            planned for this to be the primary use case. We built it as an
            afterthought. It became the product.
          </p>

          <p>
            The reason is trust. An informal merchant selling wholesale to a
            restaurant wants to look professional. A receipt — formatted,
            dated, with a business name — transforms the interaction from
            &quot;I bought rice from a lady at the market&quot; to &quot;I have
            a documented purchase from a supplier.&quot; It&apos;s not about
            record-keeping. It&apos;s about{" "}
            <span className="text-bright">legitimacy</span>.
          </p>

          <p>
            This reframed Sentreso entirely. We thought we were building a
            personal finance tool. We were actually building a{" "}
            <span className="text-bright">business operations tool</span>. The
            distinction matters because it changes what features you prioritize,
            how you talk about the product, and who you build for. A personal
            finance tool helps you understand your money. A business operations
            tool helps you run your business. The merchants didn&apos;t need
            more understanding. They needed better tools.
          </p>

          <hr className="border-border my-8" />

          <h2 className="text-bright text-lg font-medium mt-10 mb-4">
            The Family Finance Gap
          </h2>

          <p>
            Western fintech assumes a clean separation between personal and
            business finances. You have a business account and a personal
            account. Revenue goes here, groceries go there. This assumption is
            baked into every financial product from QuickBooks to Mint.
          </p>

          <p>
            That assumption breaks completely in the context we&apos;re building
            for. Many of the merchants we spoke to manage finances across a
            household and a business simultaneously. Today&apos;s rice
            inventory is also tonight&apos;s dinner supply. The profit from
            this morning&apos;s sales pays for a child&apos;s school fees this
            afternoon. Money flows between business and family constantly, and
            the boundaries are fluid by design — not because of poor financial
            discipline, but because that&apos;s how household economics works
            when the household is the business.
          </p>

          <p>
            The single-user, single-entity model we launched with misses this
            entirely. A useful financial tool for these merchants needs to
            understand that &quot;I spent 5,000 on rice&quot; might be
            inventory or might be dinner, and that both are legitimate
            financial events worth tracking. It needs to handle shared accounts
            — a husband and wife running a stall together, a mother tracking
            expenses for three market-stall businesses operated by her
            children.
          </p>

          <p>
            We haven&apos;t solved this yet. The next version of Sentreso needs
            to support multi-entity tracking without adding the complexity that
            killed the dashboard. That&apos;s the design challenge.
          </p>

          <hr className="border-border my-8" />

          <h2 className="text-bright text-lg font-medium mt-10 mb-4">
            The Broader Lesson
          </h2>

          <p>
            There&apos;s a pattern I&apos;ve seen across Sentreso, the work at{" "}
            <a
              href="https://medic.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent3 hover:underline"
            >
              Medic
            </a>
            , and the Wave years:{" "}
            <span className="text-bright italic">
              technology built for markets with high smartphone penetration
              doesn&apos;t work when you just translate it.
            </span>
          </p>

          <p>
            The assumptions are wrong at a fundamental level. Assumptions about
            connectivity, about literacy, about how people organize their
            financial lives, about what &quot;professional&quot; looks like.
            You can&apos;t retrofit. You have to design from scratch, from the
            user&apos;s actual context.
          </p>

          <p>
            Voice AI gets interesting in these markets not because it&apos;s
            novel but because it&apos;s{" "}
            <span className="text-bright">appropriate</span>. Speaking is
            universal. Typing is learned. For a merchant who didn&apos;t grow
            up with smartphones, talking to a financial assistant is more
            natural than tapping through menus.
          </p>

          <p>
            That&apos;s the bet Sentreso is built on. The infrastructure is
            still catching up — voice recognition in African languages,
            low-bandwidth audio streaming, payment integration across mobile
            money networks. But the direction is right.
          </p>

          <p>
            The next version is going to be harder to build and more useful.
            That&apos;s the right trade-off.
          </p>

          <hr className="border-border my-8" />

          <div className="flex items-center gap-3 text-[11px] text-dim mt-8">
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
