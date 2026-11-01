import Callout from '../../components/Callout';

export default function Shortcuts() {
  return (
    <>
      <h1>Shortcuts && Alternate Routs</h1>

      <p>
        There’s more than one way to bring a programming language to life. Some
        implementations compile code directly into machine instructions, others translate
        it into another language, and some execute it step by step by walking through
        a syntax tree, so lets take a closer look at our options, their trade-offs, in
        terms of simplicity, performance and flexibility, but before we move to that lets
        see how can we create small programming language in less than 100 lines of code.
      </p>

       <Callout type="tip">
          <p>Small programming language: </p>

            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Q2UDHY5as90?start=42"
              title=""
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ borderRadius: '8px', border: '1px solid var(--border)' }}>
           </iframe>

      </Callout>

      <h2>Single-pass compilers</h2>
        <p>

        </p>

      <h2>Tree-walk interpreters</h2>
        <p>

        </p>


      <h2>Transpilers</h2>

        <p>

        </p>

      <h2>Just in time compilation</h2>

        <Callout type="tip">
          <p>JIT(just in time) compilation</p>

            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/d7KHAVaX_Rs?start=222&end=378"
              title="JIT compilation"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ borderRadius: '8px', border: '1px solid var(--border)' }}>
           </iframe>
        </Callout>

        <p>

        </p>

      </>
  );
}
