import React, { useRef, useState, useEffect } from "react";
import type { JSX } from "react";
import styles from "./Statements.module.css";

export default function Statements(): JSX.Element {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [files, setFiles] = useState<File[]>([]);
    const [selectedUrl, setSelectedUrl] = useState<string | null>(null);

    useEffect(() => {
        return () => {
            if (selectedUrl) URL.revokeObjectURL(selectedUrl);
        };
    }, [selectedUrl]);

    function handleFiles(fileList: FileList | null) {
        if (!fileList || fileList.length === 0) return;
        const newFiles = Array.from(fileList);
        setFiles((prev) => [...prev, ...newFiles]);
        setSelectedUrl(URL.createObjectURL(newFiles[0]));
    }

    function handleUpload(e: React.FormEvent) {
        e.preventDefault();
        handleFiles(fileInputRef.current?.files ?? null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    }

    function handlePreview(file: File) {
        if (selectedUrl) URL.revokeObjectURL(selectedUrl);
        setSelectedUrl(URL.createObjectURL(file));
    }

    function removeFile(index: number) {
        setFiles((prev) => prev.filter((_, i) => i !== index));
        setSelectedUrl((cur) => cur ?? null);
    }

    return (
        <div className={styles.container}>
            <h2>Upload Statements</h2>

            <form className={styles.form} onSubmit={handleUpload}>
                <label className={styles.fileLabel}>
                    Choose statement files (PDF, PNG, JPG)
                    <input
                        ref={fileInputRef}
                        className={styles.fileInput}
                        type="file"
                        accept="application/pdf,image/*"
                        multiple
                    />
                </label>
                <div className={styles.formActions}>
                    <button type="submit" className={styles.uploadBtn}>
                        Add Files
                    </button>
                </div>
            </form>

            <section className={styles.viewerArea}>
                <aside className={styles.fileList}>
                    <h3>Uploaded files</h3>
                    {files.length === 0 ? (
                        <p className={styles.empty}>No files added yet.</p>
                    ) : (
                        <ul>
                            {files.map((f, i) => (
                                <li key={`${f.name}-${i}`} className={styles.fileItem}>
                                    <button
                                        type="button"
                                        className={styles.previewBtn}
                                        onClick={() => handlePreview(f)}
                                    >
                                        Preview
                                    </button>
                                    <span className={styles.fileName}>{f.name}</span>
                                    <button
                                        type="button"
                                        className={styles.removeBtn}
                                        onClick={() => removeFile(i)}
                                        aria-label={`Remove ${f.name}`}
                                    >
                                        ✕
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </aside>

                <div className={styles.previewPane}>
                    <h3>Preview</h3>
                    {selectedUrl ? (
                        files.length > 0 &&
                        (() => {
                            const lower = selectedUrl.toLowerCase();
                            if (lower.endsWith(".pdf") || selectedUrl.includes("application/pdf")) {
                                return (
                                    <iframe
                                        title="statement-preview"
                                        src={selectedUrl}
                                        className={styles.iframe}
                                    />
                                );
                            }
                            return <img src={selectedUrl} alt="statement preview" className={styles.image} />;
                        })()
                    ) : (
                        <p className={styles.empty}>Select a file to preview it here.</p>
                    )}
                </div>
            </section>
        </div>
    );
}