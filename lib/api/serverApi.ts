import { cookies } from 'next/headers';
import { nextServer } from './api';
import { Note } from '@/types/note';
import { User } from '@/types/user';

export const checkServerSession = async () => {
  const cookieStore = await cookies();
  const response = await nextServer.get('/auth/session', {
    headers: { Cookie: cookieStore.toString() },
  });
  return response;
};

interface FetchNotesProps {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  search: string,
  page: number,
  tag: string
): Promise<FetchNotesProps> => {
  const cookieStore = await cookies();
  const params = {
    params: {
      page,
      search,
      perPage: 9,
      tag,
    },
    headers: { Cookie: cookieStore.toString() },
  };

  const { data } = await nextServer.get<FetchNotesProps>('/notes', params);

  return data;
};

export const fetchNoteById = async (noteId: string): Promise<Note> => {
  const cookieStore = await cookies();
  const { data } = await nextServer.get<Note>(`notes/${noteId}`, {
    headers: { Cookie: cookieStore.toString() },
  });

  return data;
};

export const getMe = async () => {
  const cookieStore = await cookies();
  const { data } = await nextServer.get<User>('/users/me', {
    headers: { Cookie: cookieStore.toString() },
  });
  return data;
};
