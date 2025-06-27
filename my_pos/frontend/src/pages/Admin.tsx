import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

interface NewItemForm {
  name: string;
  avaliable: string;
  avatarFile: File | null;
}

export default function Admin() {
  const [forms, setForms] = useState<NewItemForm[]>([
    { name: "", avaliable: "", avatarFile: null },
  ]);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, files } = e.target;
    setForms((prev) => {
      const updated = [...prev];
      if (name === "avatarFile") {
        updated[index].avatarFile = files?.[0] ?? null;
      } else {
        if (name === "name") updated[index].name = value;
        if (name === "avaliable") updated[index].avaliable = value;
      }
      return updated;
    });
  };

  const addForm = () => {
    if (forms.length >= 10) return;
    setForms((prev) => [
      ...prev,
      { name: "", avaliable: "", avatarFile: null },
    ]);
  };

  const handleSubmit = async () => {
    const toSubmit = forms.filter((f) => f.name && f.avaliable);
    if (toSubmit.length === 0) {
      setMsg("Please fill at least one item.");
      return;
    }

    setLoading(true);
    setMsg("");

    try {
      await Promise.all(
        toSubmit.map(async (form) => {
          const body = new FormData();
          body.append("name", form.name);
          body.append("avaliable", form.avaliable);
          if (form.avatarFile) body.append("avatar", form.avatarFile);

          const res = await fetch("/api/projects", { method: "POST", body });
          if (!res.ok) throw new Error("Failed to create item");
        })
      );

      setMsg(`✅ ${toSubmit.length} item(s) created`);
      setForms([{ name: "", avaliable: "", avatarFile: null }]);
    } catch (err) {
      console.error(err);
      setMsg("❌ Creation failed for some items");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen border border-neutral-200 dark:border-[#ffffff1a] flex items-center justify-center p-6">
      <div className="w-full max-w-4xl border border-neutral-200 dark:border-[#ffffff1a] shadow-lg p-8">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
          Create New Items
        </h1>

        <div className="space-y-6">
          {forms.map((form, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                name="name"
                type="text"
                placeholder="Item Name"
                value={form.name}
                onChange={(e) => handleChange(idx, e)}
              />

              <Input
                name="avaliable"
                type="number"
                placeholder="Initial Stock"
                value={form.avaliable}
                onChange={(e) => handleChange(idx, e)}
              />
              <Input
                name="avatarFile"
                type="file"
                accept="image/*"
                onChange={(e) => handleChange(idx, e)}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-6">
          <Button onClick={addForm} disabled={forms.length >= 10}>
            + Add More
          </Button>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Saving…" : "Create Items"}
          </Button>
        </div>

        {msg && (
          <p className="mt-4 text-center text-sm text-gray-700 dark:text-gray-200">
            {msg}
          </p>
        )}
      </div>
    </div>
  );
}
