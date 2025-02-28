import Image from "next/image";

// Define the props type
interface Params {
  id: string; // Example: if your dynamic route includes an `id`
}

interface PropertyHeaderImageProps {
  image: string;
}

// Functional Component with TypeScript
const PropertyHeaderImage: React.FC<PropertyHeaderImageProps> = async ({
  image,
}) => {
  return (
    <section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
            src={image}
            alt=""
            className="object-cover h-[400px] w-full"
            width={0}
            height={0}
            sizes="100vw"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default PropertyHeaderImage;
