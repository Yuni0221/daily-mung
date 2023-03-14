import React, { useState } from "react";
import { Editor, EditorState } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function TextEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  return (
    <>
      <Editor
        editorState={editorState}
        onChange={(editorState) => setEditorState(editorState)}
      />
    </>
  );
}

export default TextEditor;
