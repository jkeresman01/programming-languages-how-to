import Callout from "../../components/Callout";
import CodeBlock from "../../components/CodeBlock";
import ParseTree from "../../components/ParseTree";

export default function Jargon() {
  return (
    <>
      <h1>Jargon, trees and some boring stuff</h1>

      <p>Was thinking about writing about parser stage for quite some time, but some
      jargon is important before we move to that, we will of course be led by love,
      talk about "Statements" of intent and "Expressions" of feelings, there is also
      this thing called "ExpressionStatement" which is quite fun, but also nature,
      trees, grammar, how do we represent the code and <strong>wars</strong> among
      other things some boring stuff.</p>

     <Callout type="tip">
        <p><strong>They leave me no choice in this wars</strong></p>

        <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/3vI_7os2V_o?start=78&end=95"
            title="They leave me no choice in this wars"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ borderRadius: '8px', border: '1px solid var(--border)' }}>
        </iframe>
      </Callout>

     <h2>What is this shit all about?</h2>

     <p>....</p>

     <h2>Context free grammars</h2>

     <p>Context free grammar is a set of rules that defines how to generate or analyze
     a set of sentences.</p>

     <p>Each of those rules is called a production and has a head - its name and a body, which
     describes what it generates. The body is simply a list of symbols, which come in
     two forms: Terminals and Nonterminals.</p>

      <p><strong>Terminal</strong> is simply a letter from the grammars alphabet,
      in context of syntactic grammar the terminals are individual lexemes, tokens
      comming from the scanner, like <code>if</code> or <code>1234</code>. They are
      called "terminals" in the sense of "end point" because they don't lead to any
      further moves in this game, you simply produce that one symbol</p>

      <p><strong>Nonterminal</strong> is a named reference to another rule it means
      <strong> play</strong> that rule and insert whatever it produces here.</p>

      <p>Here is small example to clarify this shit: </p>

      <CodeBlock
        language="plaintext"
        code={`A -> B C D ...`}
        />

      <p>
         The meaning of this production is that any A can be <i>"rewritten"</i> as B
         C D...  The symbol on left-hand side (lhs), A, is called nonterminal ... it
         can be expanded further. The symbols on right-hand size can be nonterminals,
         more As, or terminals (can't be expanded).
      </p>

     <p>Here is a grammar for sentences like "the boy walks slowly" and "the girl runs
     very quickly". (uppercase names are used for nonterminals and lowercase names
     for terminals.</p>

      <CodeBlock
        language="plaintext"
        code={`Sentence -> Nounphrase Verbprhase
Nounphrase -> the boy
Nounphrase -> the girl
Verbphrase -> Verb Modlist Adverb
Verb -> runs
Verb -> walks
Modlist -> 
Modlist -> very Modlist
Adverb -> quickly
Adverb -> slowly
        `} />

       <p>
        The productions generate sentences for nonterminals as follows. Suppose
        <code>Sentence</code> is the starting nonterminal. Choose a production with
        that nonterminal on left-hand side:
       </p>

      <CodeBlock
        language="plaintext"
        code={`Sentence -> Nounphrase Verbprhase`}
        />

        <p> Next pick any nonterminal from the right hand side, for example
        <code>Nounphrase</code>, and rewrite it with any of the productions for which
        it is the left side: </p>

        <p>Here we have 2 options:</p>

      <CodeBlock
        language="plaintext"
        code ={`
Nounphrase -> the boy
Nounphrase -> the girl`}/>
        
      <p>So we can rewrite this shit like this:</p>

      <CodeBlock
        language="plaintext"
        code={`Sentence -> Nounphrase Verbprhase
        -> the girl Verbprhase`}/>

        <p>Now pick any any nonterminal from the resulting right side(this time only
        <code>Verbprhase</code> remains) and rewrite it by one of its productions: </p>

      <CodeBlock
        language="plaintext"
        code={`Sentence -> Nounphrase Verbprhase
        -> the girl Verbprhase
        -> the girl Verb Modlist Adverb`
            }/>

        <p>
        ... continue rewriting this way until no more nonterminals remains.
        </p>

      <CodeBlock
        language="plaintext"
        code={`Sentence -> Nounphrase Verbprhase
        -> the girl Verbprhase
        -> the girl Verb Modlist Adverb
        -> the girl runs Modlist Adverb
        -> the girl runs Adverb
        -> the girl runs very quickly
        -> the girl runs very very quickly
`}/>

        <p>The result is a sentence for the starting nonterminal. Here is the small
        program to generate a sentences in a grammar, starting from any specifed
        nonterminal. <code>examples/grammar</code></p>

        <p>Well that's all fun and games if you are interested in generating random
        sentences which isn't very useful, so let's see something more interesting</p>

        <p>Arithmetic expressions with the operators: +,-,/,* can be expressed with
        grammar like this: </p>

    <CodeBlock
            language="plaintext"
            code={`
 expr -> term
         expr + term
         expr - term

 term -> factor
         term * factor
         term / factor

 factor -> number
            ( expr )
`}/>

    <p>For example expression in standard infix notation 1 + 2 * 3 is parsed like
    this:</p>

    <ParseTree/>

     <p>
       Here is the grammar from above turned into a working calculator in AWK. It's
       a recursive descent parser: one function per nonterminal, and each function
       parses exactly the thing its rule describes. 
   </p>

   <CodeBlock
        language="plaintext"
        code={`NF > 0 {
    gsub(/[+\\-*\\/()]/, " & ") 
    nf = split($0, op)         
    f = 1                     
    e = expr()

    if (f <= nf)
        printf("error at %s\\n", op[f])
    else
        printf("\\t%.8g\\n", e)
}`}
      />

    <p>
       This runs once per input line. The
       <code> gsub</code> puts spaces around every operator and parenthesis so that
       <code> split</code> can chop the line into tokens, stored in <code>op[1]</code>,
       <code> op[2]</code> and so on. The variable <code>f</code> is our position in
       that token list. We call <code>expr()</code>, and if there are tokens left over
       afterwards the input wasn't a valid expression, otherwise we print the result.
     </p>

     <CodeBlock
        language="plaintext"
        code={`function expr(e) {
    e = term()
    while (op[f] == "+" || op[f] == "-")
        e = op[f++] == "+" ? e + term() : e - term()
    return e
}`}
      />

      <p>
        The rule <code>expr -&gt; expr + term</code> refers to itself on the left,
        and a recursive descent parser can't do that directly, it would call
        itself forever. The trick is to turn that recursion into a loop: parse
        one <code>term</code>, then as long as the next token is <code>+</code> or
        <code>-</code>, consume it and parse another <code>term</code>.
      </p>

      <CodeBlock
        language="plaintext"
        code={`function term(e) {
    e = factor()
    while (op[f] == "*" || op[f] == "/")
        e = op[f++] == "*" ? e * factor() : e / factor()
    return e
}`}
      />

      <p>
        Exactly the same shape one level down, for
        <code> *</code> and <code>/</code>, calling <code>factor</code> instead. This
        is where precedence comes from: <code>expr</code> only ever sees whole terms,
        so multiplication and division are always grouped before addition and
        subtraction. No precedence table needed, the layering of the grammar is the
        precedence.
      </p>

      <CodeBlock
        language="plaintext"
        code={`function factor(e) {
    if (op[f] ~ /^[+-]?([0-9]+[.]?[0-9]*|[.][0-9]+)$/) {
        return op[f++]
    } else if (op[f] == "(") {
        f++
        e = expr()
        if (op[f++] != ")")
            printf("error: missing ) at %s\\n", op[f])
        return e
    } else {
        printf("error: expected number or ( at %s\\n", op[f])
    }
}`}
    />

      <p>
        The bottom of the grammar. If the current token looks like a number we return it
        and move on. If it's an opening parenthesis we skip it, call <code>expr()</code>
        again to parse everything inside, and then expect a closing parenthesis. That
        call back to <code>expr</code> is the recursion that lets parentheses nest as
        deep as you like, and it's what takes us from the bottom of the grammar back
        up to the top.
      </p>

    </>
  );
}


