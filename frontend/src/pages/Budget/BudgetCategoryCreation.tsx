import React, { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

function BudgetCategoryCreationPage() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [color, setColor] = useState("#4caf50");
    const [monthlyLimit, setMonthlyLimit] = useState<number | "">("");
    const [notes, setNotes] = useState("");

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const payload = {
            name: name.trim(),
            color,
            monthlyLimit: monthlyLimit === "" ? null : monthlyLimit,
            notes: notes.trim() || null,
        };
        console.log("Create category:", payload);
        // TODO: call API to save category
        navigate(-1); // go back after creation
    }

    return (
        <div style={{ maxWidth: 520, margin: "1.5rem auto", padding: "1rem" }}>
            <h1 style={{ marginBottom: 12 }}>Create Budget Category</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 10 }}>
                    <label style={{ display: "block", fontSize: 14, marginBottom: 4 }}>
                        Name
                    </label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="e.g. Groceries"
                        style={{ width: "100%", padding: 8 }}
                    />
                </div>

                <div style={{ marginBottom: 10 }}>
                    <label style={{ display: "block", fontSize: 14, marginBottom: 4 }}>
                        Color
                    </label>
                    <input
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        style={{ width: 64, height: 36, padding: 0, border: "none" }}
                    />
                </div>

                <div style={{ marginBottom: 10 }}>
                    <label style={{ display: "block", fontSize: 14, marginBottom: 4 }}>
                        Monthly limit (optional)
                    </label>
                    <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={monthlyLimit}
                        onChange={(e) =>
                            setMonthlyLimit(e.target.value === "" ? "" : parseFloat(e.target.value))
                        }
                        placeholder="0.00"
                        style={{ width: "100%", padding: 8 }}
                    />
                </div>

                <div style={{ marginBottom: 14 }}>
                    <label style={{ display: "block", fontSize: 14, marginBottom: 4 }}>
                        Notes (optional)
                    </label>
                    <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        rows={3}
                        style={{ width: "100%", padding: 8 }}
                    />
                </div>

                <div style={{ display: "flex", gap: 8 }}>
                    <button type="submit" style={{ padding: "8px 12px" }}>
                        Create
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        style={{ padding: "8px 12px" }}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default BudgetCategoryCreationPage;