import { Editor } from "@tinymce/tinymce-react";
import "../styles/tinymce.css";

export const Tinymce = () => {
  const handleEditorChange = (content: any, editor: any) => {
    console.log("Content was updated:", content);
  };
  return (
    <div className="Tinymce">
      <Editor
        tinymceScriptSrc={"/tinymce/tinymce.min.js"}
        onEditorChange={handleEditorChange}
        init={{
          mode: "textareas",
          language: "ru",
          height: 500,
          menubar: false,
          plugins: [
            "advlist autocomplete mentions advlink paste mention autolink lists link image charmap print preview anchor export pagebreak code emoticons image table paste lists advlist checklist link hr charmap directionality" +
              "searchreplace visualblocks code fullscreen" +
              "insertdatetime media table paste code imagetools help wordcount",
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
            "link",
            "image",
            "code",
            "advcode",
            "save",
            "lists",
            "template",
            "importcss",
            "table",
            "media",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic underline backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help" +
            "save" +
            "numlist bullist" +
            " h1 h2 h3 h4 h5 h6 | link image media |imagetools | code |   | table tabledelete  export  | " +
            " toolbar: 'table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol'",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          image_advtab: true,
          convert_urls: false,
        }}
      />
      <div className="Tinymce__Button">
        <div className="Tinymce__Button__Save">Save</div>
        <div className="Tinymce__Button__Cancel">Cancel</div>
      </div>
    </div>
  );
};
