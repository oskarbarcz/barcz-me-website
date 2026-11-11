import photo from "../assets/photos/photo_oskar.jpeg";

const BLOB_SHAPE = "rounded-[63%_37%_54%_46%/55%_48%_52%_45%]";

export default function ProfilePictureBlob() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-64 md:max-w-sm">
      <div className={`absolute inset-0 translate-x-3 translate-y-3 bg-brand-100 ${BLOB_SHAPE}`} aria-hidden/>
      <img
        className={`relative h-full w-full object-cover ${BLOB_SHAPE}`}
        src={photo}
        alt="Oskar Barcz podczas wystąpienia na konferencji"
        width={384}
        height={384}
      />
    </div>
  );
}
