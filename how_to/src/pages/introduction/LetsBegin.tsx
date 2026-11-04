import Callout from "../../components/Callout";

export default function LetsBegin() {
  return (
    <>

      <h1>Phases of our journey</h1>

      <p> Learning how programming languages work is a journey of gradually uncovering
      the layers of abstraction that make them possible. Rather than trying to
      understand everything at once, we'll approach this through several projects,
      each introducing new concepts, challenges, and ways of thinking.
      </p>

      <p>
        We'll start by implementing a small programming language, explore different
        interpreter architectures, experiment with functional programming, build a
        transpiler, and eventually dive into compilation with LLVM.
      </p>

      <p>
        Each phase builds upon the previous one, giving us an opportunity to revisit familiar
        concepts from a different perspective, deepen our understanding, and gradually expand
        what we're capable of building. The goal isn't simply to finish five projects, but
        to understand the ideas behind them and develop the confidence to create our own
        programming languages.
      </p>

      <Callout type="tip">

            <p><strong>Difference between professionals and amateurs</strong></p>

            <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/NYClgSGzWnI?start=5"
                title="Lua in 15s"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ borderRadius: '8px', border: '1px solid var(--border)' }}>
            </iframe>
      </Callout>

      <h2><strong>Phase 1:</strong> Lox programming language - Java</h2>

      <p> We'll start by building Lox, a small dynamicaly typed scripting language.
      This is where we'll get our hands dirty with the fundamentals: lexical analysis,
      parsing, abstract syntax trees, environments, and interpretation. The goal is
      to understand how source code goes from a stream of characters to an executable
      program.</p>

      <h2><strong>Phase 2:</strong> Sealox - Interpreter - C#</h2>

      <p> Having built our first interpreter, we'll revisit the concepts and implement
      another language interpreter in C#. This gives us an opportunity to reinforce
      what we've learned, experiment with different implementation choices, and better
      understand how the pieces of an interpreter fit together.  </p>


      <h2><strong>Phase 3:</strong> Lox in functional programming language</h2>

      <p>
       Now we'll take a different approach and implement Lox using functional
       programming. We'll explore how concepts such as immutability, recursion,
       pattern matching, and higher-order functions can influence the way we design
       and implement a programming language.
      </p>


      <h2><strong>Phase 4:</strong> Transpiler - Luapp (Lua with classes) - Lua</h2>

      <p> So far, we've focused on interpreting programs. Now it's time to explore
      another approach: transpilation. We'll build Luapp, an extension of Lua that
      introduces classes, and translate our source code into another language rather
      than executing it directly.  </p>


      <h2><strong>Phase 5:</strong> Jlang - LLVM - Compiler - C++</h2>

      <p> Finally, we'll take things a step further and build Jlang, a compiled
      programming language using C++ and LLVM. We'll explore intermediate
      representations, code generation, and the compilation pipeline, bringing together
      many of the concepts we've encountered throughout our journey.  </p>
     
      <Callout type="tip">

        <p><strong>Stick to the fundamentals, Wow</strong></p>

        <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/n3pxkcInkTs?start=87&end=169"
            title="They leave me no choice in this wars"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ borderRadius: '8px', border: '1px solid var(--border)' }}>
        </iframe>

      </Callout>

      </>
  );
}
