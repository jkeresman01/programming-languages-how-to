import CodeBlock from '../../components/CodeBlock';
import Callout from '../../components/Callout';

export default function InterpretersVsCompilers() {
  return (
    <>
      <h1>Interpreters vs Compilers</h1>

        <p>
           There are, generally speaking, two gems in this story: compilers and interpreters.
           Some implementations sit clearly on one side; for others it's hard to tell —
           they might even be both, but let's not go too far into that.
          </p>

          <p>
           In simple terms compilers take the source code, do some voodoo magic in between
           and spit out some other form, the poet is then free to do whatever he wants
           with that other form, while interpreters take the source code and execute it
           immediately, or in other words <i>"run from source"</i>.
          </p>

      <Callout type="tip">
          <p><strong>Interpreters and Compilers</strong></p>

            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/_C5AHaS1mOA?start=32&end=155"
              title="Interpreters vs Compilers"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ borderRadius: '8px', border: '1px solid var(--border)' }}>
           </iframe>

      </Callout>

      <h2>Okay but let's dummify it even further with some examples</h2>

      <p>
       Imagine a tiny language we just made up on the spot, call it Sealox, it has no
       semicolons, no curly braces, no committees, just vibes. A program might look
       like this:
      </p>

      <CodeBlock
        language="plaintext"
        code={`print "She was smoking hot" + ", " + " mind blown!"`}
      />

      <p>
        Let's say, hypothetically that this is a compiled language, that would mean that
        user would need to compile this nonsense, generate some usually lower level
        form, let's say an executable. User could then execute this program, which
        would result in this beautiful and truthful printout: <i>"She was smoking hot,
        mind blown!"</i>
      </p>

      <p>
        On the other hand if this language implementation was an interpreter, user
        would take this source and execute it immediately, giving him this beautiful
        and truthful printout: <i>"She was smoking hot, mind blown!"</i>
      </p>

      <p>
        So let's lose few additional brain cells now, let's say that in Sealox
        you could do something like this:
      </p>

      <CodeBlock
        language="plaintext"
        code={`sb compile main.sb`}
      />

      <p>
       But you could also do something like this:
      </p>

      <CodeBlock
        language="plaintext"
        code={`sb execute main.sb`}
      />

      <p>
        The <strong>`compile`</strong> command would generate machine code, while the
        <strong>`execute`</strong> command would do the same but immediately execute it
        afterwards. This would mean that sb can be used as both an interpreter and a
        compiler and when you interpret code you are compiling internally. Brainfuck,
        isn't it? There are also a bunch of shortcuts and subvariants of these two
        pokemons, for example: single pass compilers, tree-walk interpreters, transpilers,
        JIT compilers. But that's all too much in here we just dummify, keep it fun,
        viby and cool and if you want all the boring stuff you can read all about it
        in the actual book.
      </p>

     <h2>Okay this might be too viby and all so let's see concrete examples</h2>

     <h3>C++ — a compiled language</h3>

     <p>
        C++ is a compiled language, right, so this is what needs to happen for a program
        to run, of course in simple terms but nonetheless concrete example it is.
     </p>

    <p>
      So for a C++ program to run it has to be processed by a compiler which would then
      generate a lower level form, in this case object files, which then get combined by
      a linker generating an executable program, UNIX-like operating systems alongside
      many game consoles employ a popular executable file format called Executable
      and Linkable Format (ELF), ELF files usually carry no extension (though .elf
      shows up in embedded and console land), while executables under Windows have
      .exe extension, nonetheless the file contains a partial image of the program
      as it exists in memory when it runs, partial because the program generally
      allocates memory at runtime and it's usually comprised of at least these four
      segments (Text segment, Data segment, BSS segment and read-only data segment),
      anyhowzzy let's get back to the main point, the executable gets generated for a
      specific hardware/system combination, so it would run fast — but that's also
      the downside, portability suffers. Nonetheless, C++ source is still a portable one.
    </p>

    <h3>Java — compiled && interpreted language, wait what what?</h3>

     <p>Now something that we can say sits in between — Java, so here is
     how it goes, the compiler would generate architecture-neutral object files, or
     in other words generate bytecode instructions that aren't tied to any particular
     computer architecture, the Java interpreter can then execute bytecodes directly
     on any machine, or in other words compiled code can run on any system with a
     Java runtime, downside to that is of course that it's slower to interpret virtual
     machine instructions than to execute machine instructions, but, but but virtual
     machines can translate some of these bytecode sequences into machine instructions,
     by observing the program at runtime, and we call that JIT compilation, brainfuck,
     what can I say</p>

    <h3>Go tool can compile and can interpret and when you interpret you compile - wait what, what?</h3>

    <p>This one is the most confusing of them all, the Go tool, when you run go build
    it compiles Go source into machine instructions. If you run go run, it does that
    but executes the executable afterwards.</p>

   <p>
     This makes Go a compiler and an interpreter, and when you use it as an interpreter
     you compile internally. The biggest brain fuck.
   </p>

    <h3> Python - interpreted </h3>

    <Callout type="tip">

        <p><strong>Okay, okay python is an interpreted one meant for people that don't
        really understand type systems</strong></p>

        <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/G7oY8QVL3Fs?start=3279&end=3300"
            title="Bjarne and tensorflow"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ borderRadius: '8px', border: '1px solid var(--border)' }}>
        </iframe>
      </Callout>

    <h3>Generally speaking...</h3>

    <p>
      Okay, okay this all looking language wise, but if we speak generaly, compilation
      leads to better performance. In general a decision made at compile time is
      decision that does not need to be made at runtime. For example if the compiler
      can gurantee that certain variable will lie at location 49378, it can generate
      machine language instructions that access this location whenever the source code
      refers to this variable, by contrast interpreter may need to look that variable
      up in a table every time it is accessed.
    </p>

    </>
  );
}
