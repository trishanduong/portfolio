
export default function Hook({ forwardedRef }:{
  forwardedRef: (el: HTMLElement) => void,
}): JSX.Element {
    return (
      <section id="hook" className="p-100 my-48">
        <div className="w-full text-5xl lg:text-7xl tracking-tighter">
          <div className="w-3/4 text-slate-400 px-10 lg:px-40 font-medium">
            <h1>
            I create, design, and code projects with
            <span className="italic text-slate-300"> intention.</span>
            </h1>
            <h2>
              I&apos;m committed to crafting user experiences and delivering full stack applications from scratch to production.
            </h2>
          </div>
        </div>
      </section>
    );
  }