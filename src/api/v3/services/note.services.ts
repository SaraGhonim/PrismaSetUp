
import  * as noteModel from '../models/note.model'

export const retrieveNotes = async () => {
  return noteModel.getAll()
};


export const retrieveNote = async (id:string) => {
  const note   = await noteModel.getNote(id)
  if(!note.length) throw new Error('Not found')

  return note
};

export const insertNote = async (title: string, content: string,authorId:string) => {

    const result = await noteModel.create(title,content,authorId)
    return result;
  };
  
export const editNote = async (id: string, title: string) => {
    const note   = await noteModel.getNote(id)
    if(!note.length) throw new Error('Not found')

    const result = await noteModel.update(id,title) 
    return result;
  };

export const removeNote = async (id: string) => {
    const note   = await noteModel.getNote(id)
    if(!note.length) throw new Error('Not found')

    const result = await noteModel.deleteNote(id)
    return result;
  };
 