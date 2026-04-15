function SubmissionsSection({ title, description, records, kind, onStatusChange, loading }) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(2,6,23,0.45)] backdrop-blur">
      <div className="flex flex-col gap-2 border-b border-white/10 pb-5 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">{title}</h2>
          <p className="mt-1 text-sm text-slate-400">{description}</p>
        </div>
        {loading ? <span className="text-sm text-slate-400">Loading...</span> : null}
      </div>

      <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-white/10">
        <table className="min-w-full divide-y divide-white/10 text-left text-sm">
          <thead className="bg-white/5 text-xs uppercase tracking-[0.2em] text-slate-400">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Message</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 bg-slate-950/70 text-slate-200">
            {records.map((record) => (
              <tr key={record._id}>
                <td className="px-4 py-4 align-top font-medium text-white">{record.name}</td>
                <td className="px-4 py-4 align-top text-slate-300">{record.email}</td>
                <td className="px-4 py-4 align-top text-slate-300">
                  {kind === "contact" ? (
                    <div className="space-y-1">
                      <p className="font-medium text-white">{record.subject}</p>
                      <p className="max-w-xl text-slate-400">{record.message}</p>
                    </div>
                  ) : (
                    <p className="max-w-xl text-slate-400">{record.message}</p>
                  )}
                </td>
                <td className="px-4 py-4 align-top">
                  <select
                    value={record.status}
                    onChange={(event) => onStatusChange(record._id, event.target.value)}
                    className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none"
                  >
                    <option value="new">New</option>
                    <option value="replied">Replied</option>
                    <option value="closed">Closed</option>
                  </select>
                </td>
              </tr>
            ))}

            {!records.length ? (
              <tr>
                <td colSpan={4} className="px-4 py-10 text-center text-slate-400">
                  No {title.toLowerCase()} available.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default SubmissionsSection;