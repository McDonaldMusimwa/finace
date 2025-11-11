import React, { useState } from "react";
import type { JSX } from "react";
import styles from "./Settings.module.css";

export default function Settings(): JSX.Element {
    const [notifications, setNotifications] = useState<boolean>(true);
    const [theme, setTheme] = useState<string>("light");
    const [language, setLanguage] = useState<string>("en");
    const [saving, setSaving] = useState<boolean>(false);

    async function handleSave(e: React.FormEvent) {
        e.preventDefault();
        setSaving(true);
        // TODO: wire this to backend API or Clerk user metadata
        await new Promise((r) => setTimeout(r, 700));
        setSaving(false);
        alert("Settings saved (stub)");
    }

    function handleReset() {
        setNotifications(true);
        setTheme("light");
        setLanguage("en");
    }

    return (
        <div className={styles.container}>
            <h2>Settings</h2>
            <form className={styles.form} onSubmit={handleSave}>
                <div className={styles.row}>
                    <label className={styles.label}>Notifications</label>
                    <div>
                        <label className={styles.switch}>
                            <input
                                type="checkbox"
                                checked={notifications}
                                onChange={(e) => setNotifications(e.target.checked)}
                            />
                            <span className={styles.slider} />
                        </label>
                    </div>
                </div>

                <div className={styles.row}>
                    <label className={styles.label}>Theme</label>
                    <select value={theme} onChange={(e) => setTheme(e.target.value)} className={styles.select}>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="system">System</option>
                    </select>
                </div>

                <div className={styles.row}>
                    <label className={styles.label}>Language</label>
                    <select value={language} onChange={(e) => setLanguage(e.target.value)} className={styles.select}>
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                    </select>
                </div>

                <div className={styles.actions}>
                    <button type="button" className={styles.resetBtn} onClick={handleReset} disabled={saving}>
                        Reset
                    </button>
                    <button type="submit" className={styles.saveBtn} disabled={saving}>
                        {saving ? "Saving..." : "Save settings"}
                    </button>
                </div>
            </form>
        </div>
    );
}