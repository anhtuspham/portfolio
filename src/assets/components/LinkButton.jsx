import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LinkButton({
  name,
  srcIcon,
  linkForward,
  canDownload,
  isForward,
}) {
  return (
    <a
      className="p-2.5 bg-teal-700 flex items-center justify-center gap-2 rounded-md"
      href={linkForward}
      download={canDownload}
      target={isForward ? "_blank" : "_self"}
    >
      <FontAwesomeIcon icon={srcIcon} />
      <h3 className="text-sm text-white">{name}</h3>
    </a>
  );
}
