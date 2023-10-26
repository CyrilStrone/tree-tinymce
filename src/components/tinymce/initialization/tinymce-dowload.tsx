import React, { useEffect } from "react";

const TinyMCEComponent: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/tinymce.min.js"; // Используйте относительный путь к файлу в папке public
    script.type = "text/javascript";
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      // Код, который нужно выполнить после загрузки скрипта
    };

    return () => {
      // Очистка при размонтировании компонента, если это необходимо
    };
  }, []); // Пустой массив зависимостей, чтобы выполнить эффект только после монтирования компонента

  return <div id="tinymce-editor"></div>;
};

export default TinyMCEComponent;
