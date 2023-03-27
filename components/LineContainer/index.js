import Image from "next/image";
import Link from "next/link";

export default function LineContainer({ line }) {
  return (
    <div className={`line-container ${line.name}`}>
      <div className="line-image-wrapper">
        <Image src={line.logo} alt={`Logo línea ${line.line}`} fill />
      </div>
      <button>
        <Link href={line.link}>Conocelos</Link>
      </button>
      <Image
        className="bg"
        src={line.indexImage}
        alt={`Logo línea ${line.line}`}
        fill
      />
    </div>
  );
}
