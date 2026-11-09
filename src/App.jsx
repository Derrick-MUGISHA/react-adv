import ProfileHeader from "./components/ProfileHeader"
import SkillList from "./components/SkillList"

function App() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
  ]


  return (
  
    <main className="mx-auto max-w-xl p-8">
      <section className="rounded-2xl border border-slate-200 p-6 shadow-sm">
        <ProfileHeader name="Aline Uwase" role="Frontend Learner" city="Kigali" />
        <h2 className="mb-3 mt-6 text-xl font-semibold">Skills</h2>
        <SkillList skills={skills} />
      </section>
    </main>
    // <div>
    //   <h1>second content</h1>
    // </div>

  )
}

export default App
