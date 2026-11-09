export default function ProfileHeader({ name, role, city }) {
    return (
    <header className="space-y-2">
      <h1 className="text-3xl font-bold text-slate-900">{name}</h1>
      <p className="text-lg text-slate-600">{role}</p>
      <p className="text-sm text-slate-500">{city}</p>
    </header>
    )
}