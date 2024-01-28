import LayoutSurat from "@/components/surat/LayoutSurat";

const page = () => {
  const pdfUrl =
    "https://drive.google.com/file/d/1b0cxYQktkDWuMCWqBnE1rF96v7D5wXAy/preview";

  return (
    <LayoutSurat>
      <iframe
        src={`${pdfUrl}#toolbar=1`}
        allowFullScreen
        frameBorder="0"
        className="w-full min-h-[70dvh] md:min-h-dvh rounded-md"
      ></iframe>
    </LayoutSurat>
  );
};

export default page;
