import { Credentials, User } from '@/types/user';
import { nextServer } from './api';
import { CreateNote, Note } from '@/types/note';

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  search: string,
  page: number,
  tag: string
): Promise<FetchNotesResponse> => {
  const { data } = await nextServer.get<FetchNotesResponse>('/notes', {
    params: {
      ...(tag && { tag }),
      page,
      search,
      perPage: 9,
    },
  });
  return data;
};

export const fetchNoteById = async (noteId: string): Promise<Note> => {
  const { data } = await nextServer.get<Note>(`/notes/${noteId}`);
  return data;
};

export const createNote = async (newNote: CreateNote): Promise<Note> => {
  const { data } = await nextServer.post<Note>('/notes', newNote);
  return data;
};

export const deleteNote = async (noteId: string): Promise<Note> => {
  const { data } = await nextServer.delete<Note>(`/notes/${noteId}`);
  return data;
};

export const register = async (credentials: Credentials): Promise<User> => {
  const { data } = await nextServer.post<User>('/auth/register', credentials);
  return data;
};
export const login = async (credentials: Credentials): Promise<User> => {
  const { data } = await nextServer.post<User>('/auth/login', credentials);

  return data;
};

export const logout = async () => {
  await nextServer.post<User>('/auth/logout');
};
interface SessionStatus {
  success: boolean;
}

export const checkSession = async () => {
  const { data } = await nextServer.get<SessionStatus>('/auth/session');
  return data.success;
};
export const getMe = async (): Promise<User> => {
  const { data } = await nextServer.get<User>('/users/me');
  return data;
};

export const patchMe = async (username: string): Promise<User> => {
  const { data } = await nextServer.patch<User>('/users/me', {
    username,
  });
  return data;
};
