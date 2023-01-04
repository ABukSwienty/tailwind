import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "./sanity-client";

const builder = imageUrlBuilder(sanityClient);

const sanityImageUrl = (source: string) => {
  return builder.image(source);
};

export default sanityImageUrl;
