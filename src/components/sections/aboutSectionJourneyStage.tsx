import { stages } from "@/data/aboutPageJourneyStage";

export default function JourneyStage() {
  return (
    <>
      {stages.map((item) => (
        <article key={item.number}>
          {item.number}
          {item.title}
          {item.description}

          {item.diagonalLine && (
            <div aria-hidden="true">
              斜線
            </div>
          )}

          {item.learnings.map((learning) => (
            <div key={learning}>{learning}</div>
          ))}
        </article>
      ))}
    </>
  );
}