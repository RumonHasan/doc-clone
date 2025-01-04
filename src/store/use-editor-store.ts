import { create } from 'zustand';
import { type Editor } from '@tiptap/react';

interface EditorState {
  editor: Editor | null;
  setEditor: (editor: Editor | null) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  editor: null,
  setEditor: (editor) => set({ editor }),
}));

/*
IN zustand by default the first two params of create is get and set in order to
set the value and get the original value 
*/
