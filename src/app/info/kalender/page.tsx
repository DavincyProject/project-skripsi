import LayoutSurat from "@/components/surat/LayoutSurat";

const page = () => {
  const pdfUrl =
    "https://drive.google.com/file/d/1b0cxYQktkDWuMCWqBnE1rF96v7D5wXAy/preview";

  return (
    <LayoutSurat>
      <iframe
        src={`${pdfUrl}#toolbar=1`}
        allow="fullscreen"
        className="w-full min-h-dvh"
      ></iframe>
    </LayoutSurat>
  );
};

export default page;
