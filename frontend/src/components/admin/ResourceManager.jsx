import { useEffect, useMemo, useState } from "react";

function createInitialState(fields) {
  return fields.reduce((accumulator, field) => {
    if (field.type === "checkbox") {
      accumulator[field.name] = Boolean(field.defaultValue);
      return accumulator;
    }

    accumulator[field.name] = field.defaultValue ?? "";
    return accumulator;
  }, {});
}

function mapRecordToState(record, fields) {
  return fields.reduce((accumulator, field) => {
    if (field.type === "checkbox") {
      accumulator[field.name] = Boolean(record[field.name]);
      return accumulator;
    }

    if (field.type === "file") {
      accumulator[field.name] = null;
      return accumulator;
    }

    accumulator[field.name] = record[field.name] ?? "";
    return accumulator;
  }, {});
}

function ResourceManager({
  title,
  description,
  fields,
  records,
  loading,
  onSave,
  onDelete,
  buildCardTitle,
  buildCardSummary,
  imageAccessor,
  idAccessor = (record) => record._id,
}) {
  const initialState = useMemo(() => createInitialState(fields), [fields]);
  const [editingRecordId, setEditingRecordId] = useState(null);
  const [formState, setFormState] = useState(initialState);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const selectedRecord = records.find((record) => idAccessor(record) === editingRecordId) || null;

  useEffect(() => {
    if (selectedRecord) {
      setFormState(mapRecordToState(selectedRecord, fields));
      setFormError("");
      setFormSuccess("");
      return;
    }

    setFormState(initialState);
    setFormError("");
    setFormSuccess("");
  }, [fields, initialState, selectedRecord]);

  useEffect(() => {
    const imageField = fields.find((field) => field.type === "file");

    if (!imageField) {
      setPreviewUrl("");
      return;
    }

    const selectedFile = formState[imageField.name];

    if (selectedFile instanceof File) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(objectUrl);

      return () => {
        URL.revokeObjectURL(objectUrl);
      };
    }

    if (selectedRecord && imageAccessor) {
      setPreviewUrl(imageAccessor(selectedRecord) || "");
      return;
    }

    setPreviewUrl("");
  }, [fields, formState, imageAccessor, selectedRecord]);

  const handleChange = (event) => {
    const { name, type, value, checked, files } = event.target;

    setFormState((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : type === "file" ? files?.[0] || null : value,
    }));
  };

  const handleEdit = (record) => {
    setEditingRecordId(idAccessor(record));
  };

  const handleCancel = () => {
    setEditingRecordId(null);
    setFormState(initialState);
    setFormError("");
    setFormSuccess("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError("");
    setFormSuccess("");

    for (const field of fields) {
      if (field.required && field.type !== "file") {
        const value = formState[field.name];
        if (value === undefined || value === null || String(value).trim() === "") {
          setFormError(`${field.label} is required.`);
          return;
        }
      }
    }

    setSaving(true);

    try {
      const payload = new FormData();

      fields.forEach((field) => {
        const value = formState[field.name];

        if (field.type === "file") {
          if (value) {
            payload.append(field.name, value);
          }
          return;
        }

        if (field.type === "checkbox") {
          payload.append(field.name, value ? "true" : "false");
          return;
        }

        payload.append(field.name, value ?? "");
      });

      await onSave(editingRecordId, payload);
      const successMessage = editingRecordId ? "Item updated successfully." : "Item created successfully.";
      setEditingRecordId(null);
      setFormState(initialState);
      setFormSuccess(successMessage);
    } catch (error) {
      setFormError(error.message || "Unable to save this item.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(2,6,23,0.45)] backdrop-blur">
      <div className="flex flex-col gap-2 border-b border-white/10 pb-5 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">{title}</h2>
          <p className="mt-1 text-sm text-slate-400">{description}</p>
        </div>
        <p className="text-sm text-slate-500">{records.length} items</p>
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[0.92fr_1.08fr]">
        <form onSubmit={handleSubmit} className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
          <h3 className="text-lg font-semibold text-white">{editingRecordId ? "Edit item" : "New item"}</h3>
          <div className="mt-5 grid gap-4">
            {fields.map((field) => (
              <label key={field.name} className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {field.label}
                </span>

                {field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    value={formState[field.name]}
                    onChange={handleChange}
                    required={Boolean(field.required)}
                    rows={field.rows || 4}
                    placeholder={field.placeholder}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60"
                  />
                ) : field.type === "select" ? (
                  <select
                    name={field.name}
                    value={formState[field.name]}
                    onChange={handleChange}
                    required={Boolean(field.required)}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/60"
                  >
                    <option value="">Select {field.label}</option>
                    {field.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : field.type === "checkbox" ? (
                  <label className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                    <input
                      type="checkbox"
                      name={field.name}
                      checked={Boolean(formState[field.name])}
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-white/20 bg-transparent text-cyan-400"
                    />
                    {field.checkboxLabel || field.label}
                  </label>
                ) : field.type === "file" ? (
                  <input
                    type="file"
                    name={field.name}
                    accept="image/*"
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-dashed border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-300 file:mr-4 file:rounded-full file:border-0 file:bg-cyan-500 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-slate-950"
                  />
                ) : (
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    value={formState[field.name]}
                    onChange={handleChange}
                    required={Boolean(field.required)}
                    placeholder={field.placeholder}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60"
                  />
                )}
              </label>
            ))}

            {previewUrl ? (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Image Preview</p>
                <img src={previewUrl} alt="Preview" className="h-40 w-full rounded-xl object-cover" loading="lazy" />
              </div>
            ) : null}

            {formError ? (
              <p className="rounded-xl border border-rose-400/30 bg-rose-500/10 px-3 py-2 text-sm text-rose-200">{formError}</p>
            ) : null}

            {formSuccess ? (
              <p className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">{formSuccess}</p>
            ) : null}
          </div>

          <div className="mt-5 flex gap-3">
            <button
              type="submit"
              disabled={saving}
              className="rounded-2xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? "Saving..." : editingRecordId ? "Update" : "Create"}
            </button>
            {editingRecordId ? (
              <button
                type="button"
                onClick={handleCancel}
                className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Cancel
              </button>
            ) : null}
          </div>
        </form>

        <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Existing items</h3>
            {loading ? <span className="text-sm text-slate-400">Loading...</span> : null}
          </div>

          <div className="mt-5 space-y-4">
            {records.map((record) => {
              const recordId = idAccessor(record);
              const image = imageAccessor ? imageAccessor(record) : null;

              return (
                <article key={recordId} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                  <div className="flex gap-4">
                    {image ? (
                      <img
                        src={image}
                        alt={buildCardTitle(record)}
                        className="h-20 w-20 shrink-0 rounded-2xl object-cover"
                      />
                    ) : null}

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="truncate text-base font-semibold text-white">{buildCardTitle(record)}</h4>
                          <p className="mt-1 text-sm text-slate-400">{buildCardSummary(record)}</p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => handleEdit(record)}
                            className="rounded-full border border-cyan-400/30 px-3 py-1 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => onDelete(recordId)}
                            className="rounded-full border border-rose-400/30 px-3 py-1 text-xs font-semibold text-rose-300 transition hover:bg-rose-400/10"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}

            {!records.length ? (
              <div className="rounded-[1.25rem] border border-dashed border-white/10 px-4 py-10 text-center text-sm text-slate-400">
                No items yet.
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResourceManager;