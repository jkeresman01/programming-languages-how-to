import Callout from '../../components/Callout';

export default function Introduction() {
  return (
    <>
      <h1>Introduction</h1>

      <p>
        What are we cooking in here, you probably might wonder, is it beautiful
        soups, is it a react website that my grandma could write, is it a .NET
        application written in an overbloated IDE/editor called Visual Studio
        for which you need a 2 years course in order to learn what all the
        buttons do while some work only during full blood moon. Like yes, yes
        you really need 14567 different options for creating a controller and
        deleting WeatherForecasts is such a fun activity.
      </p>

      <Callout type="tip">
        <p>
          The answer is of course not, we do some actual programming in here. We
          will build programming languages: an interpreter, a second
          interpreter, a functional one, a transpiler and finally a real
          compiler. Five projects, five different languages, one question that
          keeps coming back:{' '}
          <strong>
            how does source code become something a machine can run?
          </strong>{' '}
          No sciency boring stuff, just pure fun.
        </p>

        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/yq1KIXLrwko?start=110"
          title="What are we cooking"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ borderRadius: '8px', border: '1px solid var(--border)' }}
        ></iframe>
      </Callout>

      <h2>Why do this by hand?</h2>

      <p>
        Given an implementation in one language, AI can handle the rest, so does
        it really matter which languages we pick? Maybe not. But with all of
        that, a certain joy has disappeared: building something slowly, step by
        step, writing a small piece of software, not knowing if it works, and
        finding out day by day. So we'll do it the old way and share some
        thoughts along the way.
      </p>

      <p>
        That includes the debugger, that confusing tool meant for old people.
        The thing about a debugging session is that you don't fight it, you just
        click step over, step into, all day long, until you realize you forgot
        something stupid seven hours ago.
      </p>

      <Callout type="tip">
        <p>
          <strong>I don't understand my debugger</strong>
        </p>

        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/QfIOCyXBttY"
          title="I don't understand my debugger"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ borderRadius: '8px', border: '1px solid var(--border)' }}
        ></iframe>
      </Callout>

      <Callout type="note">
        <p>
          <strong>Interesting side thought: </strong>
          Philosophy is important Bjarne Stroustrup also thinks that, of course
          he talks about language design, debuggers are tools of old, I will
          acknowledge that, young's are faster to learn and adapt, young in age,
          or young in spirit, still minds are quite bright, "Young people walk
          ahead of the adults" all concepts that came from the book, perhaps
          "you doubt" could be the moment of subjective reality trap, perhaps I
          needed to test this concept out, the subjective reality one, genuine
          look, on first walk by proved just that, nonetheless it did bring an{' '}
          <strong> interest</strong>ing thought <strong>of mine</strong>. Keep
          looking at debugger or not? AI is here to stay and putting few
          breakpoints in could generally be just huge waste of time, vibes are
          important, and that's that. Anyhowzzy, on the second thought, one
          debugging session afterwards, perhaps second walk by through the
          codebase, failed to prove that, debugging in the ways of old is quite
          fun. You see, it's all subjective reality trap, perhaps for some,
          stepping through debugger is the only way, but we should try to see
          things objectively, perhaps one different look, or viewpoint can
          change your mind, AI is also quite fun.
        </p>
      </Callout>

      <p>
        Okay, enough chit chat. Be aware that if your background is too sciency
        you will lose a few brain cells along the way, I promise. So sit back,
        relax and embrace the complete meaninglessness of it all.
      </p>

      <Callout type="tip">
        <p>
          <strong>Just embrace the complete meaninglessness of it all</strong>
        </p>

        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/4GZdeWWraTs?start=114&end=136"
          title="Just embrace the meaninglessness"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ borderRadius: '8px', border: '1px solid var(--border)' }}
        ></iframe>
      </Callout>

      <h2>Why study programming languges?</h2>

      <p>
        Programming languages are central to computer science, and to the
        typical computer science curriculum. Students who have become familiar
        with one or more programming languages are often curios to learn about
        other programming languges and to figure out what is going on{' '}
        <i>"under the hood"</i>. Learning about programming languages is
        interesting, but it's also practical.
      </p>

      <Callout type="tip">
        <p>
          Also, good understaning of languge design and it's implementation can
          help you choose the most appropriate languages for any given task.
          Most programming languges are better for some problems than the
          others.
        </p>

        <p>
          <strong>
            Should one choose C++, Go or Rust for systems programming?
          </strong>
        </p>
        <p>
          <strong>Should one choose Ada or C for embedded systems?</strong>
        </p>
        <p>
          <strong>
            Should one choose Python, C#, Java or TypeScript for web based
            application?
          </strong>
        </p>

        <br />

        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/Sg4U4r_AgJU?start=49&end=245"
          title="They leave me no choice in this wars"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ borderRadius: '8px', border: '1px solid var(--border)' }}
        ></iframe>
      </Callout>

      <p>
        But, but but many will argue that high-level programmer should not
        bother with implementation details, there are times, however, when
        understaning of those details is virutally essential. The tenacious bug
        or unusual system-building problem may be drammaticly easier to handle
        if one is willing to peek under the hood, to peek at the bits.
      </p>

      <p>
        Whatever programming language you learn, understaning the decisions that
        went into its design and implementation will help you use it better. In
        C++ for example programmers may need to avoid unnecessary temporary
        variables, and use copy constructors whenver possible to minimize the
        cost of initalization. In Java you might wish to use Executor objects
        rather than explicit thread creation. With certain (poor) compilers you
        might need to adopt special programming idioms to get faster code,
        pointers for array traversals, x*x instead of x**2.
      </p>

      <h1>Phases of our journey</h1>

      <p>
        {' '}
        Learning how programming languages work is a journey of gradually
        uncovering the layers of abstraction that make them possible. Rather
        than trying to understand everything at once, we'll approach this
        through several projects, each introducing new concepts, challenges, and
        ways of thinking.
      </p>

      <p>
        We'll start by implementing a small programming language, explore
        different interpreter architectures, experiment with functional
        programming, build a transpiler, and eventually dive into compilation
        with LLVM.
      </p>

      <p>
        Each phase builds upon the previous one, giving us an opportunity to
        revisit familiar concepts from a different perspective, deepen our
        understanding, and gradually expand what we're capable of building. The
        goal isn't simply to finish five projects, but to understand the ideas
        behind them and develop the confidence to create our own programming
        languages.
      </p>

      <Callout type="tip">
        <p>
          <strong>Difference between professionals and amateurs</strong>
        </p>

        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/NYClgSGzWnI?start=5"
          title="Lua in 15s"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ borderRadius: '8px', border: '1px solid var(--border)' }}
        ></iframe>
      </Callout>

      <h2>
        <strong>Phase 1:</strong> Lox programming language - Java
      </h2>

      <p>
        {' '}
        We'll start by building Lox, a small dynamicaly typed scripting
        language. This is where we'll get our hands dirty with the fundamentals:
        lexical analysis, parsing, abstract syntax trees, environments, and
        interpretation. The goal is to understand how source code goes from a
        stream of characters to an executable program.
      </p>

      <h2>
        <strong>Phase 2:</strong> Sealox - Interpreter - C#
      </h2>

      <p>
        {' '}
        Having built our first interpreter, we'll revisit the concepts and
        implement another language interpreter in C#. This gives us an
        opportunity to reinforce what we've learned, experiment with different
        implementation choices, and better understand how the pieces of an
        interpreter fit together.{' '}
      </p>

      <h2>
        <strong>Phase 3:</strong> Lox in functional programming language
      </h2>

      <p>
        Now we'll take a different approach and implement Lox using functional
        programming. We'll explore how concepts such as immutability, recursion,
        pattern matching, and higher-order functions can influence the way we
        design and implement a programming language.
      </p>

      <h2>
        <strong>Phase 4:</strong> Transpiler - Luapp (Lua with classes) - Lua
      </h2>

      <p>
        {' '}
        So far, we've focused on interpreting programs. Now it's time to explore
        another approach: transpilation. We'll build Luapp, an extension of Lua
        that introduces classes, and translate our source code into another
        language rather than executing it directly.{' '}
      </p>

      <h2>
        <strong>Phase 5:</strong> Jlang - LLVM - Compiler - C++
      </h2>

      <p>
        {' '}
        Finally, we'll take things a step further and build Jlang, a compiled
        programming language using C++ and LLVM. We'll explore intermediate
        representations, code generation, and the compilation pipeline, bringing
        together many of the concepts we've encountered throughout our
        journey.{' '}
      </p>

      <Callout type="tip">
        <p>
          <strong>
            How many programming languaghes should you know? What Bjarne thinks
            about this?
          </strong>
        </p>

        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/NvWTnIoQZj4?start=2"
          title="They leave me no choice in this wars"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ borderRadius: '8px', border: '1px solid var(--border)' }}
        ></iframe>
      </Callout>
    </>
  );
}
