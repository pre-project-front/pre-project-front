import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import styled from "styled-components";
import { forwardRef } from "react";

const ToastEditor = styled.div`
  width: 800px;
`;

const ToastUi = (props, ref) => (
  <ToastEditor>
    <Editor
      ref={ref}
      initialValue="The first and last buttons are customized."
      toolbarItems={[
        ["bold", "italic", "link"],
        ["quote", "code", "codeblock"],
        ["ul", "ol", "task", "indent", "outdent"],
        ["table", "image", "link"],
        ["code", "codeblock", "strike", "hr"],
      ]}
      insertToolbarItem={
        ({ groupIndex: 0, itemIndex: 0 },
        {
          name: "myItem",
          tooltip: "Custom Button",
          command: "bold",
          text: "@",
          className: "toastui-editor-toolbar-icons first",
          style: { backgroundImage: "none" },
        })
      }
    />
  </ToastEditor>
);

export default forwardRef(ToastUi);
