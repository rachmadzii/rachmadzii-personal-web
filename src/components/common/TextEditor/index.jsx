import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function TextEditor() {
  return (
    <CKEditor
      editor={ClassicEditor}
      data="<p>Write your article description here</p>"
      onChange={(editor) => {
        const data = editor.getData();
        console.log({ data });
      }}
    />
  );
}

export default TextEditor;
