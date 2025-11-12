import React from "react";
import styles from "./Profile.module.css";
import { useUser, SignOutButton } from "@clerk/clerk-react";

export default function Profile(): React.JSX.Element {
    const { user, isLoaded } = useUser();

    if (!isLoaded) return <div className={styles.container}>Loading profile...</div>;

    const fullName = (user as any)?.fullName ?? `${(user as any)?.firstName ?? ""} ${(user as any)?.lastName ?? ""}`.trim();
    const email = (user as any)?.primaryEmailAddress?.emailAddress ?? (user as any)?.emailAddresses?.[0]?.emailAddress ?? "";
    const avatar = (user as any)?.imageUrl ?? (user as any)?.profileImageUrl ?? null;

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <div className={styles.avatarWrap}>
                        {avatar ? (
                            // Clerk image URLs are safe to use directly
                            <img src={avatar} alt="avatar" className={styles.avatar} />
                        ) : (
                            <div className={styles.placeholderAvatar}>{fullName ? fullName.charAt(0).toUpperCase() : "U"}</div>
                        )}
                    </div>
                    <div className={styles.info}>
                        <h2 className={styles.name}>{fullName || "Unnamed user"}</h2>
                        <p className={styles.email}>{email}</p>
                    </div>
                </div>

                <div className={styles.actions}>
                    <button type="button" className={styles.editBtn} onClick={() => alert("Edit profile (not implemented)")}>
                        Edit profile
                    </button>
                    <SignOutButton>
                        <button className={styles.signOutBtn}>Sign out</button>
                    </SignOutButton>
                </div>
            </div>
        </div>
    );
}