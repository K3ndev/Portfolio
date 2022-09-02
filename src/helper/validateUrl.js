export default function validateUrl(URL){
    const regex = new RegExp(
      "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
    );
    if (regex.test(URL)) {
      return URL;
    } else {
      return "";
    }
  };
