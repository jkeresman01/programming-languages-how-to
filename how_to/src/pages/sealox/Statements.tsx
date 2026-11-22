import CodeBlock from '../../components/CodeBlock';
import Callout from '../../components/Callout';

export default function Statements() {
  return (
    <>
      <h1>Statements</h1>

      <p>Steve Jobs said that people who are crazy enough to think that they can change
      the world are the ones who do, that was a statement and a statement's job is to
      change the world in some sense, usually by modifying some state, reading input
      or producing output.</p>

      <p>Okay, okay it will all make sense after some examples as I've said statements
      cause effects, they don't evaluate to a value, you've already seen at least one
      through this book, the <strong>print</strong> statement: </p>

      <CodeBlock language="javascript" code={`print "She was smoking hot" + ", " + " mind blown!;"`} />

      <p>A <strong>print</strong> statement evaluates a single expression and displays
      the result to the user.</p>

      <Callout type="note">
          <p><strong>Interesting statement from: </strong>
            The philosopher Friedrich Nietzsche said that there are no facts, only
            interpretations. This statement actually underlines the subjective nature
            of truth. In many situations the truth is simply someone's opininon. When
            someone claims to be be expressing an absoulte truth, they might in fact
            just be affirming their own subjective view of particular situation,
            which is philosophy and coding is all about facts, as I've said this is
            coding book with some philosphy around it to disagree with that.
          </p>
       </Callout>

      <h2>Variables</h2>

      <p>As I've said our programming language will be small and cute, it will also
      be dynamically typed, explained in simple terms, our variables can store values
      of any type and a single variable can even store values of different types at
      different times.</p>

      <p>We will follow what "Lox" does and our variables will be declared using <strong>
      var</strong> statements. Some commonly used alternatives to using var would be
      let (JavaScript, TypeScript), local (Lua) or to simply use no declaration keyword
      (Python, Ruby).</p>

      <CodeBlock language="javascript" code={`var variable = "She was smoking hot";`} />

      <p>If you omit the initializer the variable's value defaults to
      <strong> nil</strong>.</p>

      <CodeBlock language="javascript" code={`var nilValue`} />

      <p>Once declared you can naturally access and assign a variable using its name.</p>

      <CodeBlock language="javascript" code={`var variable = "She was smoking hot";`} />

      <CodeBlock language="javascript" code={`print variable`} />
    </>
  );
}
