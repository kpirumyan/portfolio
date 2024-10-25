import "./styles.css";
import { gluten } from "@/app/fonts";

export default function Home() {
  return (
    <>
      <h1
        className={`title uppercase mx-auto w-3/4 text-white ${gluten.className} text-shadow`}
      >
        <span className="text-tertiary">Karen</span> Pirumyan
      </h1>

      {/*<h2>
      {roles.map((r, i, arr) => <Fragment key={r.key}>
        <span className="lowercase">{r.title}</span>
        {i !== arr.length - 1 && <span className="role-separator"/>}
      </Fragment>)}
    </h2>
    <div>
      <Phrase/>
    </div>
    <ul>
      {links.map((l) => <li key={l.key} className={l.icon}/>)}
    </ul>*/}
    </>
  );
}
