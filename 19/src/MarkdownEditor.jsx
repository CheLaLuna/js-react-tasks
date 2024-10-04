import React from 'react';
import Editor from '@toast-ui/editor';

// BEGIN (write your solution here)
import { useEffect, useRef } from 'react';

const MarkdownEditor = ({ onContentChange }) => {
  const editorRef = useRef();

  useEffect(() => {
    const editor = new Editor({
      el: editorRef.current,
      hideModeSwitch: true,
      previewStyle: 'vertical',
      height: '500px',
      initialEditType: 'markdown',
      previewHighlight: true,
    });

    editor.addHook('change', () => {
      const content = editor.getMarkdown();
      onContentChange(content);
    });

    return () => {
      editor.destroy();
    };
  }, [onContentChange]);

  return <div ref={editorRef}></div>;
};

export default MarkdownEditor;
// END
