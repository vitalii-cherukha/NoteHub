'use client';

import Image from 'next/image';
import css from './EditProfilePage.module.css';
import { useRouter } from 'next/navigation';
import { getMe, patchMe } from '@/lib/api/clientApi';

const EditProfilePage = () => {
  const router = useRouter();
  const user = getMe();
  const patchUser = patchMe();

  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <h1 className={css.formTitle}>Edit Profile</h1>

        <Image
          src={user.avatar}
          alt={user.username}
          width={120}
          height={120}
          className={css.avatar}
        />

        <form className={css.profileInfo}>
          <div className={css.usernameWrapper}>
            <label htmlFor="username">Username:</label>
            <input
              onChange={handleChange}
              id="username"
              type="text"
              className={css.input}
            />
          </div>

          <p>Email: user_email@example.com</p>

          <div className={css.actions}>
            <button type="submit" className={css.saveButton}>
              Save
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className={css.cancelButton}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default EditProfilePage;
