import axios from 'axios';
import type { CreateNote, Note } from '@/types/note';

const baseURL = process.env.NEXT_PUBLIC_API_URL + '/api';

axios.defaults.baseURL = baseURL;

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  search: string,
  page: number,
  tag: string
): Promise<FetchNotesResponse> => {
  const { data } = await axios.get<FetchNotesResponse>('/notes', {
    params: {
      ...(tag && { tag }),
      page,
      search,
      perPage: 8,
    },
  });
  return data;
};

export const createNote = async (newNote: CreateNote): Promise<Note> => {
  const { data } = await axios.post<Note>('/notes', newNote);
  return data;
};

export const deleteNote = async (noteId: string): Promise<Note> => {
  const { data } = await axios.delete<Note>(`/notes/${noteId}`);
  return data;
};

export const fetchNoteById = async (noteId: string): Promise<Note> => {
  const { data } = await axios.get<Note>(`/notes/${noteId}`);
  return data;
};
