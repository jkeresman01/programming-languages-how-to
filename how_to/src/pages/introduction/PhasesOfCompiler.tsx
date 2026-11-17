import Callout from '../../components/Callout';
import CodeBlock from '../../components/CodeBlock';

export default function PhasesOfCompiler() {
  return (
    <>
      <h1>Phases of a compiler/interpreter</h1>

      <p>
        Now that we understand what we're building, let's see which phases we need to
        go through, dummified a lot of course. The main question is:
        <i><strong> "How do we get from a high level language like Sealox to a series
        of instructions that a CPU can actually execute?"</strong></i>
      </p>

      <Callout type="tip">
        <p>
          The phases are roughly three: <strong>front end</strong>, <strong>middle
          end</strong> and <strong>back end</strong>.
        </p>

        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/BT2Cv-Tjq7Q?start=48&end=61"
          title="Artists built the Macintosh"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ borderRadius: '8px', border: '1px solid var(--border)' }}>
        </iframe>
      </Callout>

      <p>
        So just listen, she was mindblowing, smoking hot, and beauty is subjective
        btw, but the phases are three. The <strong>front end</strong> is usuallyPhas
        specific to the source language: here we figure out what the poet was trying
        to say. In the <strong>middle end</strong>, now that we understand the poet,
        we can rephrase a bit while keeping the same meaning, which is where
        optimizations live: constant folding, loop unrolling and so on. Finally the
        <strong> back end</strong>: everything is optimized, so we generate machine
        instructions, either bytecode or code for a specific chip (x86, ARM...). We go
        back from poetry to reality, pure logic and instructions. Of course it's more
        complex than that, but let's leave it there.
      </p>

      <Callout type="note">
        <p><strong>Phases of a compiler, a quick walkthrough: </strong></p>

        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/l-jMsoAY64k?start=67&end=311"
          title="Phases of a compiler"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ borderRadius: '8px', border: '1px solid var(--border)' }}>
        </iframe>

        <p><strong>Takeaway: </strong>source code goes in one end, passes through a
        pipeline of stages and something executable comes out the other.</p>
      </Callout>

      <Callout type="note">
        <p><strong>Offtopic: </strong>
          If your mind isn't blown yet, like mine was, listen to this. The dude in the
          video drops IR (Intermediate Representation), and ohhhhh boy is it neat. If
          you want compilers for M languages targeting N architectures, naively you'd
          need M×N implementations, sounds painful, right? So each front end targets
          one intermediate representation, and each back end takes that IR and spits
          out native code. That turns M×N into M+N. It's the reason GCC supports so
          many languages and chips: every front end goes through an IR, mostly GIMPLE
          and RTL.
        </p>

        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/lflRnEfZgYQ?start=3&end=31"
          title="Intermediate representation and the MxN problem"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ borderRadius: '8px', border: '1px solid var(--border)' }}>
        </iframe>
      </Callout>

      <Callout type="tip">
        <p><strong>Fun fact: </strong>
          Grace Hopper is credited with creating one of the first compilers (the A-0
          system, early 1950s). She also helped popularize the story of the first
          "actual bug", a moth found in the Harvard Mark II in 1947, though the
          operators who found it logged it, and engineers were calling glitches
          "bugs" long before that.
        </p>
      </Callout>

      <h2>Front end</h2>

      <p>
        Here we also have roughly three stages: scanning (lexing), parsing and static
        analysis.
      </p>

      <h3>Scanning</h3>

      <p>
        This stage pretty much boils down to one big dumb switch statement. We take a
        stream of characters and group them into tokens (words) that make up our
        language's grammar, ignoring the noise like comments and whitespace.
      </p>

      <p>
        You'll hear both "scanning" and "lexing". We'll say scanning, but "lexing" is
        arguably more correct, it comes from the Greek <i>lexis</i>, meaning "word".
        That's that, this mystery was quite easy. In practice people use the two terms
        interchangeably.
      </p>

      <h4>Concrete example</h4>

      <p>
        The purpose of scanning and parsing, the first two stages, is to recognize the
        structure of a program without caring about its meaning yet. What the hell
        does that mean? Let's go through a simple example:
      </p>

      <CodeBlock
        language="plaintext"
        code={`var diana = "There is no zebra in here"`}
      />

      <p>
        The scanner reads characters one by one: <code>v</code>, <code>a</code>,
        <code>r</code>, a space, <code>d</code>, <code>i</code>... and groups them
        into tokens:
      </p>

      <CodeBlock
        language="plaintext"
        code={`var                          -> keyword
diana                        -> identifier
=                            -> operator
"There is no zebra in here"  -> string literal`}
      />

      <p>
        <strong>Tokens</strong> are the basic building blocks of a program: the
        shortest strings of characters with an individual meaning (keywords,
        identifiers, operators, literals...).
      </p>

      <Callout type="tip">
        <p><strong>What is scanning (no BS explanation)</strong></p>

        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/BI3K-ME3L74?start=163"
          title="What is scanning"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ borderRadius: '8px', border: '1px solid var(--border)' }}>
        </iframe>

        <p><strong>Takeaway: </strong>the scanner turns a stream of characters into a
        stream of tokens.</p>
      </Callout>

      <h3>Parsing</h3>

      <p>
        The parser takes the flat list of tokens and gives it structure. It builds a
        tree out of them, usually called a syntax tree, where each node is a piece of
        the program and its children are the pieces it's made of. Take
        <code> 1 + 2 * 3</code>. A flat list of tokens doesn't say whether to add or
        multiply first, but the tree does:
      </p>

      <CodeBlock
        language="plaintext"
        code={`
    +
   / \\
  1   *
     / \\
    2   3`}
      />

      <p>
        The multiplication sits lower in the tree, so it's evaluated first, which is
        precedence showing up as shape.
      </p>

      <h3>Static analysis</h3>

      <p>
        The first two stages, scanning and parsing, tend to be boring and dull,
        pretty much the same across all implementations. Static analysis is where the
        individual quirks of each language come into play. This is where we figure out
        what names refer to (binding) and, in a statically typed language, check that
        the types line up, all before the program runs.
      </p>

      <h2>Middle end</h2>

      <p>
        We now understand what the poet tried to say, so we can rephrase it while
        keeping the same meaning, sneaking in some optimizations along the way.
      </p>

      <p>
        Optimization is a weird and complex topic of its own, most of it happens on the
        intermediate representation, though not all, and one can spend decades on it.
        It's a huge rabbit hole with a bunch of fancy words: "strength reduction",
        "scalar replacement of aggregates", "loop invariant code motion", "common
        subexpression elimination"... Some languages keep it cute and simple,
        generating relatively unoptimized code and rolling on. Lua tends to do just
        that.
      </p>

      <Callout type="note">
        <p><strong>Constant folding</strong></p>

        <p>A simple example of this is constant folding, if some expressions always
           evaluate to the same result, we can do the evaluation at the compile time.
         </p>

        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/68oO51ZQyHY?start=170&end=193"
          title="Constant folding"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ borderRadius: '8px', border: '1px solid var(--border)' }}>
        </iframe>
      </Callout>

      <p>Seriously people can spend their entire careers only thinking about
      optimizations and performance, it can become an obsession of its own, we will
      just give a small overview of what can be done: </p>


      <Callout type="note">
        <p><strong>What compilers can and cannot do</strong></p>

        <p>
          A short summary in terms of the Bentley rules for optimizing work, and some
          more:
        </p>

        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/ulJm7_aTiQM?start=828&end=1070"
          title="What compilers can and cannot optimize"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ borderRadius: '8px', border: '1px solid var(--border)' }}>
        </iframe>
      </Callout>

      <Callout type="note">
        <p><strong>C++ optimizer vs Java JIT</strong></p>

        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/1b-9mPTQV1Y"
          title="C++ optimizer vs Java JIT"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ borderRadius: '8px', border: '1px solid var(--border)' }}>
        </iframe>
      </Callout>

      <h2>Back end</h2>

      <p>
        Finally we're at the back end, and it's time to go from poetry to reality:
        from the user's source code to more primitive, assembly-like instructions the
        machine can understand. Here we pick a target. We can generate bytecode for a
        virtual machine, which is portable but needs that VM to run, or native machine
        code for a specific architecture, which is fast but tied to that hardware.
        Phase 5 takes the native route.
      </p>


      <h2>Which phases do our projects use?</h2>

      <p>
        Not every implementation uses all three phases, and that's exactly why we
        build five of them:
      </p>

      <ul>
        <li><strong>Phases 1 and 2 (Jlox, Sealox):</strong> front end only. We scan,
        parse and analyze, then execute by walking the tree directly. No middle end,
        no back end.</li>
        <li><strong>Phase 3 (functional Lox):</strong> same front end, different style
        of building it.</li>
        <li><strong>Phase 4 (Luapp):</strong> front end, then instead of machine code
        we generate Lua source. Lua's own implementation does the rest.</li>
        <li><strong>Phase 5 (Jlang):</strong> the whole pipeline. We build the front
        end and emit LLVM IR, and LLVM handles the middle end and back end.</li>
      </ul>

    </>
  );
}
