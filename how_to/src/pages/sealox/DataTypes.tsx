import CodeBlock from '../../components/CodeBlock';

export default function DataTypes() {
  return (
    <>
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

     <p>
      Okay, okay we are done with basic data types, as I said they are just boring
      and dull but we can't do anything useful without them, but let's move to some
      more interesting parts.
     </p>

    </>

  );
}
