import sanityImageUrl from "./sanity-image-url";

const teamMemberImageUrl = (ref: string) =>
  sanityImageUrl(ref).width(600).height(600).url();

export default teamMemberImageUrl;
