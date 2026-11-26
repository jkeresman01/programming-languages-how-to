import CodeBlock from '../../components/CodeBlock';

export default function Introduction() {
  return (
    <>
      <h1>Introduction</h1>

      <p>
        Jlang is a <strong>procedural</strong> language &mdash; no classes, no
        inheritance, no method overloading. Just functions, structs, and data
        you control. Languages like Go and Rust have shown that you can build
        serious, large-scale software without classical OOP, and jlang follows
        that same spirit: keep it simple, keep it explicit.
      </p>

      <h1>Variables</h1>

      <h2>
        Variables with <code>var</code>
      </h2>
      <p>
        Variables are declared with the <code>var</code> keyword using
        colon-separated type annotations. The identifier comes first, followed
        by a colon and the type, then an optional initializer.
      </p>

      <CodeBlock language="jlang" code={`var count: i32 = 42;`} />
      <CodeBlock language="jlang" code={`var name: char* = "jlang";`} />
      <CodeBlock language="jlang" code={`var isReady: bool = true;`} />

      <h2>
        Immutable variables with <code>val</code>
      </h2>

      <p>
        Use <code>val</code> to declare variables that cannot be reassigned
        after initialization. All mutation operations are rejected at compile
        time: <code>=</code>, <code>+=</code>, <code>-=</code>, <code>*=</code>,{' '}
        <code>/=</code>, <code>%=</code>, <code>++</code>, <code>--</code>.
      </p>

      <CodeBlock
        language="jlang"
        code={`val pi: f64 = 3.14159;
val maxRetries := 3;
var counter: i32 = 0;
counter = counter + 1;  // OK
// pi = 2.71;           // ERROR: Cannot assign to immutable variable 'pi'
// maxRetries++;        // ERROR: Cannot modify immutable variable 'maxRetries'`}
      />

      <h2>Unused variables are compile-time errors</h2>

      <p>
        Declaring a variable and never using it is a compile-time error. This
        also applies to function parameters. jlang follows the Go and Rust
        philosophy of keeping code clean by disallowing dead declarations.
      </p>

      <CodeBlock
        language="jlang"
        code={`fn main() -> i32 {
    var x: i32 = 10;
    var y: i32 = 20;  // ERROR: unused variable 'y'
    return x;
}`}
      />

      <h2>Single-line comments</h2>

      <p>
        Use <code>//</code> to write a comment that spans the rest of the line.
        Everything after <code>//</code> until the end of the line is ignored by
        the compiler.
      </p>

      <CodeBlock
        language="jlang"
        code={`// This is a single-line comment

fn main() -> i32 {
    // Comment before a variable
    var x: i32 = 10; // inline comment

    return 0;
}`}
      />

      <h2>Block comments</h2>
      <p>
        Use <code>/* ... */</code> to write comments that span multiple lines.
        Block comments are useful for temporarily disabling code or writing
        longer explanations.
      </p>

      <CodeBlock
        language="jlang"
        code={`/* This is a
   multi-line
   block comment */

fn main() -> i32 {
    /* Block comment in code */
    var y: i32 = 20;

    return 0;
}`}
      />

      <h2>Comments don't affect code</h2>
      <p>
        Comments are stripped during lexing and have no effect on program
        behavior. Operators like <code>/</code> still work normally — the
        scanner only treats
        <code>//</code> and <code>/*</code> as comment starters.
      </p>

      <CodeBlock
        language="jlang"
        code={`fn main() -> i32 {
    var x: i32 = 10;
    var y: i32 = 20;

    // Division still works fine
    var z: i32 = x / y;

    return 0;
}`}
      />

      <h1>Operators</h1>

      <h2>Logical Operators</h2>
      <p>
        jlang provides the standard logical operators <code>&&</code> (AND),{' '}
        <code>||</code> (OR), and <code>!</code> (NOT). These operators use{' '}
        <strong>short-circuit evaluation</strong>: the right-hand side is only
        evaluated if necessary.
      </p>

      <CodeBlock
        language="jlang"
        code={`if (x > 0 && y > 0) {
    printf("Both positive");
}

if (a == 0 || b == 0) {
    printf("At least one is zero");
}

if (!isReady) {
    printf("Not ready yet");
}`}
      />

      <h2>Increment and Decrement</h2>

      <p>
        jlang supports both prefix and postfix increment (<code>++</code>) and
        decrement (<code>--</code>) operators.
      </p>

      <CodeBlock
        language="jlang"
        code={`var x: i32 = 5;

x++;    // postfix: x becomes 6
++x;    // prefix:  x becomes 7
x--;    // postfix: x becomes 6
--x;    // prefix:  x becomes 5`}
      />

      <h2>Bitwise Operators</h2>

      <p>
        jlang provides the full set of bitwise operators for working with
        individual bits in integer values.
      </p>

      <CodeBlock
        language="jlang"
        code={`var a: i32 = 0b1100;  // 12
var b: i32 = 0b1010;  // 10

var bitwiseAnd := a & b;   // 0b1000 = 8
var bitwiseOr  := a | b;   // 0b1110 = 14
var bitwiseXor := a ^ b;   // 0b0110 = 6
var complement := ~a;      // bitwise NOT
var leftShift  := a << 2;  // 0b110000 = 48
var rightShift := a >> 1;  // 0b0110 = 6`}
      />

      <h2>Integer Sizes</h2>
      <p>
        Jlang supports all standard integer types: <code>i8</code>,{' '}
        <code>i16</code>, <code>i32</code>, <code>i64</code>, <code>u8</code>,{' '}
        <code>u16</code>, <code>u32</code>, and <code>u64</code>. Integer
        literals are parsed as <code>i32</code> by default.
      </p>

      <CodeBlock
        language="jlang"
        code={`var a: i8 = 127;
var b: i16 = 32767;
var c: i32 = 42;
var d: i64 = 9223372036854775807;
var e: u8 = 255;
var f: u16 = 65535;
var g: u32 = 100;
var h: u64 = 18446744073709551615;`}
      />

      <h2>Character Literals</h2>
      <p>
        Character literals use single quotes and support escape sequences (
        <code>\n</code>, <code>\t</code>, <code>\r</code>, <code>\\</code>,{' '}
        <code>\'</code>, <code>\0</code>). Characters are stored as{' '}
        <code>i8</code> values.
      </p>

      <CodeBlock
        language="jlang"
        code={`var letter: char = 'A';
var newline: char = '\\n';`}
      />

      <table className="doc-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Description</th>
            <th>Size</th>
            <th>Range/Values</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>i8</code>
            </td>
            <td>Signed 8-bit integer</td>
            <td>1 byte</td>
            <td>-128 to 127</td>
          </tr>
          <tr>
            <td>
              <code>i16</code>
            </td>
            <td>Signed 16-bit integer</td>
            <td>2 bytes</td>
            <td>-32,768 to 32,767</td>
          </tr>
          <tr>
            <td>
              <code>i32</code>
            </td>
            <td>Signed 32-bit integer</td>
            <td>4 bytes</td>
            <td>-2^31 to 2^31-1</td>
          </tr>
          <tr>
            <td>
              <code>i64</code>
            </td>
            <td>Signed 64-bit integer</td>
            <td>8 bytes</td>
            <td>-2^63 to 2^63-1</td>
          </tr>
          <tr>
            <td>
              <code>u8</code>
            </td>
            <td>Unsigned 8-bit integer</td>
            <td>1 byte</td>
            <td>0 to 255</td>
          </tr>
          <tr>
            <td>
              <code>u16</code>
            </td>
            <td>Unsigned 16-bit integer</td>
            <td>2 bytes</td>
            <td>0 to 65,535</td>
          </tr>
          <tr>
            <td>
              <code>u32</code>
            </td>
            <td>Unsigned 32-bit integer</td>
            <td>4 bytes</td>
            <td>0 to 2^32-1</td>
          </tr>
          <tr>
            <td>
              <code>u64</code>
            </td>
            <td>Unsigned 64-bit integer</td>
            <td>8 bytes</td>
            <td>0 to 2^64-1</td>
          </tr>
          <tr>
            <td>
              <code>f32</code>
            </td>
            <td>Single-precision float</td>
            <td>4 bytes</td>
            <td>&plusmn;3.4&times;10^38</td>
          </tr>
          <tr>
            <td>
              <code>f64</code>
            </td>
            <td>Double-precision float</td>
            <td>8 bytes</td>
            <td>&plusmn;1.8&times;10^308</td>
          </tr>
          <tr>
            <td>
              <code>bool</code>
            </td>
            <td>Boolean</td>
            <td>1 bit</td>
            <td>true or false</td>
          </tr>
        </tbody>
      </table>

      <h1>Types &amp; Literals</h1>

      <h2>Integer Sizes</h2>

      <p>
        Jlang supports all standard integer types: <code>i8</code>,{' '}
        <code>i16</code>, <code>i32</code>, <code>i64</code>, <code>u8</code>,{' '}
        <code>u16</code>, <code>u32</code>, and <code>u64</code>. Integer
        literals are parsed as <code>i32</code> by default.
      </p>

      <CodeBlock
        language="jlang"
        code={`var a: i8 = 127;
var b: i16 = 32767;
var c: i32 = 42;
var d: i64 = 9223372036854775807;
var e: u8 = 255;
var f: u16 = 65535;
var g: u32 = 100;
var h: u64 = 18446744073709551615;`}
      />

      <blockquote>
        <p>
          "There are only two kinds of languages: the ones people complain about
          and the ones nobody uses."
        </p>
        <footer>
          — Bjarne Stroustrup, <em>The C++ Programming Language</em>
        </footer>
      </blockquote>

      <h2>Floating Point</h2>
      <p>
        Single-precision (<code>f32</code>) and double-precision (
        <code>f64</code>) floating-point types are available.
      </p>

      <CodeBlock
        language="jlang"
        code={`var pi: f32 = 3.14;
var precise: f64 = 3.141592653589793;`}
      />

      <h1>Operators</h1>

      <h2>Logical Operators</h2>

      <p>
        jlang provides the standard logical operators <code>&&</code> (AND),{' '}
        <code>||</code> (OR), and <code>!</code> (NOT). These operators use{' '}
        <strong>short-circuit evaluation</strong>: the right-hand side is only
        evaluated if necessary.
      </p>
      <h3>Comparison</h3>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Operator</th>
            <th>Short-circuit</th>
            <th>Right side evaluated</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>&&</code>
            </td>
            <td>Yes</td>
            <td>
              Only if left is <code>true</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>||</code>
            </td>
            <td>Yes</td>
            <td>
              Only if left is <code>false</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>and</code>
            </td>
            <td>No</td>
            <td>Always</td>
          </tr>
          <tr>
            <td>
              <code>or</code>
            </td>
            <td>No</td>
            <td>Always</td>
          </tr>
        </tbody>
      </table>

      <h2>Increment and Decrement</h2>

      <p>
        jlang supports both prefix and postfix increment (<code>++</code>) and
        decrement (<code>--</code>) operators.
      </p>

      <CodeBlock
        language="jlang"
        code={`var x: i32 = 5;

x++;    // postfix: x becomes 6
++x;    // prefix:  x becomes 7
x--;    // postfix: x becomes 6
--x;    // prefix:  x becomes 5`}
      />

      <h2>Bitwise Operators</h2>

      <p>
        jlang provides the full set of bitwise operators for working with
        individual bits in integer values.
      </p>

      <CodeBlock
        language="jlang"
        code={`var a: i32 = 0b1100;  // 12
var b: i32 = 0b1010;  // 10

var bitwiseAnd := a & b;   // 0b1000 = 8
var bitwiseOr  := a | b;   // 0b1110 = 14
var bitwiseXor := a ^ b;   // 0b0110 = 6
var complement := ~a;      // bitwise NOT
var leftShift  := a << 2;  // 0b110000 = 48
var rightShift := a >> 1;  // 0b0110 = 6`}
      />

      <h3>Compound Assignment</h3>
      <p>All bitwise operators have compound assignment forms:</p>

      <CodeBlock
        language="jlang"
        code={`var flags: i32 = 0;

flags |= 0b0001;   // set bit 0
flags |= 0b0100;   // set bit 2
flags &= ~0b0001;  // clear bit 0
flags ^= 0b0100;   // toggle bit 2
flags <<= 1;       // shift all bits left
flags >>= 1;       // shift all bits right`}
      />

      <h1>Control Flow</h1>

      <h2>If / Else</h2>
      <p>
        Conditional branching uses familiar C-style syntax. Conditions are
        wrapped in parentheses and the body is enclosed in braces. There is no
        special <code>elseif</code> or <code>elif</code> keyword; chain standard{' '}
        <code>else if</code> instead.
      </p>

      <CodeBlock
        language="jlang"
        code={`if (x == 0) {
    printf("x is zero");
} else if (x == 10) {
    printf("x is ten");
} else {
    printf("x is something else");
}`}
      />

      <p>
        Braces are optional for single-statement bodies, but using them is
        recommended for clarity.
      </p>

      <h2>While Loops</h2>
      <p>
        A <code>while</code> loop repeats its body as long as the condition
        evaluates to <code>true</code>.
      </p>

      <CodeBlock
        language="jlang"
        code={`var i: i32 = 0;
while (i < 10) {
    printf("i = %d", i);
    i = i + 1;
}`}
      />

      <h2>For Loops</h2>
      <p>
        The <code>for</code> loop has three semicolon-separated clauses: an
        initializer (variable declaration or expression), a condition, and an
        update expression. All three clauses are optional.
      </p>

      <CodeBlock
        language="jlang"
        code={`for (var i: i32 = 0; i < 10; i++) {
    printf("i = %d", i);
}`}
      />

      <h2>Switch Statement</h2>

      <p>
        The <code>switch</code> statement selects a branch based on the value of
        an expression. It uses familiar C-style syntax with <code>case</code>{' '}
        labels and an optional <code>default</code>. Unlike some languages,
        cases
        <strong> fall through</strong> by default &mdash; use <code>break</code>{' '}
        to exit.
      </p>

      <CodeBlock
        language="jlang"
        code={`var x: i32 = 2;
switch (x) {
    case 1:
        printf("one");
        break;
    case 2:
        printf("two");
        break;
    case 3:
        printf("three");
        break;
    default:
        printf("other");
}`}
      />

      <h2>Switch Expression</h2>

      <p>
        When you need a switch that <em>produces a value</em>, use the switch
        expression. It uses <code>{'=>'}</code> (fat arrow) syntax instead of
        colons, and each arm is separated by a comma. No <code>break</code>{' '}
        needed &mdash; there is no fallthrough.
      </p>

      <CodeBlock
        language="jlang"
        code={`var z: i32 = 3;
var result: i32 = switch (z) {
    case 1 => 10,
    case 2 => 20,
    case 3 => 30,
    default => 0
};
printf("result = %d", result); // result = 30`}
      />
    </>
  );
}
