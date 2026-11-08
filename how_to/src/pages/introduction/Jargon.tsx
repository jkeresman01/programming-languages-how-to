import Callout from "../../components/Callout";
import CodeBlock from "../../components/CodeBlock";

export default function Jargon() {
  return (
    <>
      <h1>Jargon & some boring stuff</h1>

      <p>Was thinking about writing about parser stage for quite some time, but some
      jargon is important before we move to that, we will of course be led by love,
      talk about "Statements" of intent and "Expressions" of feelings, there is also
      this thing called "ExpressionStatement" which is quite fun, but also nature,
      trees, grammar, how do we represent the code and <strong>wars</strong> among
      other boring stuff.</p>

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

      <p>.....</p>

      <h2>Context free grammars</h2>

     <p>
     Context free grammar is a set of rules that define how to generate 
     or analyze a set of sentences.
     </p>

     <p>Each rule is called a production and has the form:  </p>

      <CodeBlock
        language="plaintext"
        code={`A -> B C D ...`}
        />

      <p>
         The meaning of this production is that any A can be <i>"rewritten"</i> as B
         C D...  The symbol on left-hand side (lhs), A, is called nonterminal ... it
         can be exanded further. The symbols on right-hand size can be nonterminals,
         more As, or terminals (can't be expanded).
      </p>

           <h2>Random programming lingo</h2>

      <Callout type="tip"> 
        <p><strong>General advice: </strong></p>

        <p>
          And this is where things get <strong>even more interesting</strong>,
          because the same kind of thing happens in corporate environments. You have
          different groups of people, each with their own set of values, beliefs,
          interests, and ideas about what a good employee should look like. And
          depending on which group holds the power, certain behaviours get rewarded,
          certain people get promoted, and certain ways of thinking become the
          accepted norm. People who conform to these values become visible, their
          contributions get recognized, and their voices carry weight. Meanwhile,
          those who don't conform might find themselves ignored, overlooked,
          or slowly made invisible, regardless of how competent they actually are.
        </p>

        <p>
        And, of course, some people learn how to play this game. Some develop
        what we like to call soft skills, although sometimes the term is
        doing a lot of heavy lifting here. Knowing how to communicate, build
        relationships, and navigate disagreements can genuinely be useful,
        but there's also the less flattering side of it: knowing <strong>whose
        ass to kiss</strong>, when to agree with the boss, which opinions to
        keep to yourself, and how to make the right people feel important. When 
        you have to play into a version that certain people want to hear and when 
        can you simply be yourself and speak truth. 
        </p>

        <p>Young players enter the game, willing to learn its codes. At first,
        they see only the game they're taught to play (game of codes). But with
        time, some begin to notice the other games unfolding around them. They
        start recognizing the rules nobody speaks of, the moves nobody explains,
        alongside dependencies between different player who seem to be playing an
        entirely different game. Some learn how to play. Others never even realize
        there's more than one game.</p>

        <p><strong>The way to see the bigger picture</strong> is to step outside
        the boundaries of any particular group. People who share the same values
        and belief systems tend to form groups, sometimes belonging to several
        at once. But to understand what's really happening, you have to abstract
        yourself from those affiliations. Only then can you begin to see how people
        position themselves within these groups: who plays along to fit in, who
        challenges the rules, who benefits from keeping things the way they are,
        and who gets pushed to the margins. You stop seeing things solely from the
        perspective of someone playing the game and start seeing the game itself.
        </p>

        <p>
        But be careful: once you see the game behind the game, you can never
        unsee it.
        </p>

        <p> <strong>Red flags:</strong> "You're invisible to us now." "We made him
        look good/bad." "Do you want to leave on your own, so people remember you as
        a high performer, or do you want us to make you look bad?" And, of course,
        the endless use of "we" when what someone really means is "I" — or when
        nobody wants to take individual responsibility for what's happening.  </p>

        <p><strong>Jonathan Blow clips that made me consider quitting my job for
        real</strong></p>

        <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/nL8GWU9M8LY?start=175&end=229"
            title="Jonathan Blow clips that made me consider quitting my job for real"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ borderRadius: '8px', border: '1px solid var(--border)' }}>
        </iframe>

       </Callout>
    </>

  );
}
