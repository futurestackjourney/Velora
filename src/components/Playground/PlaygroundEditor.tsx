import React, { useState } from "react";
import Editor from "@monaco-editor/react";

interface PlaygroundEditorProps {
  code: string;
  setCode: (value: string) => void;
}

const PlaygroundEditor: React.FC<PlaygroundEditorProps> = ({ code, setCode }) => {
  return (
    <div className="w-full h-[50vh]">
      <Editor
        height="100%"
        defaultLanguage="javascript"
        theme="vs-dark"
        value={code}
        onChange={(value) => setCode(value || "")}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default PlaygroundEditor;
