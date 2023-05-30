import { uniqueId } from "lodash";
import MicrosoftExcelLogo from "../../assets/img/file_logo/microsoft_excel.png";
import MicrosoftWordLogo from "../../assets/img/file_logo/microsoft_word.png";
import othersLogo from "../../assets/img/file_logo/other.png";
import PDFFileLogo from "../../assets/img/file_logo/pdf_file.webp";
import zipLogo from "../../assets/img/file_logo/zip.png";
import BUTTON_LABElS from "../../data/localization/buttons.localization";
import useLang from "../../hooks/useLang";
const FILE_TYPES = {
  IMAGE: { val: "Photo", mimeRegex: /image\/\w*/ },
  VIDEO: { val: "Video", mimeRegex: /video\/w*/ },
  AUDIO: { val: "Audio", mimeRegex: /audio\/w*/ },
  PDF: { val: "Pdf", mimeRegex: /application\/pdf/ },
  MSEXCEL: {
    val: "MS Excel",
    mimeRegex:
      /application\/(vnd\.ms-excel|vnd\.openxmlformats-officedocument\.spreadsheetml\.sheet)/,
  },
  MSWORD: {
    val: "MS Word",
    mimeRegex:
      /application\/(msword|vnd\.openxmlformats-officedocument\.wordprocessingml\.document)/,
  },

  ZIP: { val: "Zip", mimeRegex: /application\/zip/ },
  OTHER: { val: "Other", mimeRegex: /\w*/ },
};

export const getFileType = (mimeType: string) => {
  const matchingType = Object.values(FILE_TYPES).find((val) => {
    return mimeType?.match(val?.mimeRegex) ? true : false;
  });
  return matchingType?.val || FILE_TYPES.OTHER.val;
};

const VideoPreview = ({ url }: { url: string }) => {
  return (
    <video width="100%" height="90%" style={{ marginTop: "20px" }} controls>
      <source src={url} type="video/mp4" />
    </video>
  );
};

const AudioPreview = ({ url }: { url: string }) => {
  return (
    <div className="mt-5 text-center">
      <audio controls>
        <source src={url} type="audio/ogg" width="100%" height="100%" />
      </audio>
    </div>
  );
};

const FileImagePreview = ({
  url,
  fileType,
}: {
  url: string;
  fileType: string;
}) => {
  let srcName;
  switch (fileType) {
    case "zip":
      srcName = zipLogo;
      break;
    case "pdf":
      srcName = PDFFileLogo;
      break;
    case "word":
    case "doc":
    case "docx":
      srcName = MicrosoftWordLogo;
      break;
    case "excel":
      srcName = MicrosoftExcelLogo;
      break;
    case "image":
      srcName = url;
      break;
    default:
      srcName = othersLogo;
  }
  console.log(srcName, fileType);
  return (
    <img
      width="100%"
      height="100%"
      src={srcName}
      style={{ objectFit: "contain" }}
      className="img-fluid h-50 w-50 mt-2 rounded"
      alt="..."
    />
  );
};

export const FileCard = ({
  type,
  link,
  title,
  subTitle = "",
}: {
  type: string;
  link: string;
  title: string;
  subTitle: string;
}) => {
  const { lang } = useLang();
  // if (link && link.toString().includes("undefined"))
  //   link = link.replace("undefined", "old-applications");

  return (
    <div className="col-lg-4 col-md-3" key={uniqueId()}>
      <div className="card mb-3 mx-1">
        <div
          className="col-md-12"
          style={{
            height: "50px",
            objectFit: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {(type === FILE_TYPES.IMAGE.val ||
            FILE_TYPES.IMAGE.mimeRegex.test(type)) && (
            <FileImagePreview url={link} fileType={"image"} />
          )}
          {(type === FILE_TYPES.VIDEO.val ||
            FILE_TYPES.VIDEO.mimeRegex.test(type)) && (
            <VideoPreview url={link} />
          )}
          {type === FILE_TYPES.AUDIO.val && <AudioPreview url={link} />}
          {(type === FILE_TYPES.PDF.val ||
            FILE_TYPES.PDF.mimeRegex.test(type)) && (
            <FileImagePreview url={link} fileType={"pdf"} />
          )}
          {type === FILE_TYPES.MSWORD.val && (
            <FileImagePreview url={link} fileType={"word"} />
          )}
          {type === FILE_TYPES.MSEXCEL.val && (
            <FileImagePreview url={link} fileType={"excel"} />
          )}
          {type === FILE_TYPES.ZIP.val && (
            <FileImagePreview url={link} fileType={"zip"} />
          )}
          {type === FILE_TYPES.OTHER.val && (
            <FileImagePreview url={link} fileType={"other"} />
          )}
        </div>
        <div className="col-md-12 mt-3">
          {/* <div className="card-body"> */}
          <h6 className="card-title text-nowrap" style={{ fontSize: "15px" }}>
            {title}
          </h6>
          <p className="card-title  text-nowrap" style={{ fontSize: "10px" }}>
            {subTitle ? `${subTitle}` : ""}
          </p>
          <p className="card-text">
            <small className="text-muted">
              <a href={link} target="_blank">
                {
                  // @ts-ignore
                  BUTTON_LABElS["View"][lang]
                }
              </a>
            </small>
          </p>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};
//file renderer component for application details.
