import CodeBlock from '../../components/CodeBlock';
import Callout from '../../components/Callout';

export default function Introduction() {
  return (
    <>
      <h1>Introduction</h1>

      <p>
        We need an actual language for this to make any sense, we'll use one that's
        simple, small and cute, pretty similar to what "Lox" does, but "Lox" also
        pretty much tries to achieve what Lua does with its cool only-21-keywords
        grammar language design and this world already has enough implementations
        of programming languages such as C, Fortran... so our programming language
        will be as I said small, cute and simple so that it can be implemented easily,
        which also gives me as a writer of this some space to talk about philosophy and
        language design, also implementing already existing one is just boring and dull.
       </p>

      <h1>DataTypes</h1>

      <p>There is nothing too smart about these data types,
         some things are just as they are, we will just follow what "Lox" does in this
         regard, since that's just how it gets done, can't even bring philosophy in
         because it's just as boring as that.</p>

      <h2>Booleans</h2>

      <p>One billion years ago, some languages repurposed existing data types to
      represent what's true and what's false, today most modern languages have dedicated
      data types, so we will just follow that and use plain simple `True` and `False`</p>

      <CodeBlock language="javascript" code={`true  will represent truth`} />

      <CodeBlock language="javascript" code={`false will represent falsehood`} />

      <h2>Numbers</h2>
       <p>
         We keep it simple and also follow what "Lox" does, only have one kind of
         number: double precision floating point.
       </p>

      <CodeBlock language="javascript" code={`1234 will represent integer`} />

      <CodeBlock language="javascript" code={`12.34 will represent decimal`} />

      <h2>Strings</h2>

      <p>
        This is even boring and dull, since here most of the languages use "" for
        string literals, so we will also follow that.
      </p>

      <CodeBlock language="javascript" code={`"She was smoking hot"`} />

      <CodeBlock language="javascript" code={`"" is an empty string`} />

      <CodeBlock language="javascript" code={`"123" and this is a string, not a number`} />

      <h2>Nil</h2>

      <p>We also need a built-in data type that represents "nothing" or "no value"
      and most commonly used solutions here are to use Nil or Null and we will just
      follow what "Lox" does as we did so far, okay one can also argue that we don't
      actually need a value that represents nothing, since null pointer issues tend
      to cause all types of headaches, but that's a separate story</p>

     <CodeBlock language="javascript" code={`Nil is our built in data type of choice for that`} />

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
