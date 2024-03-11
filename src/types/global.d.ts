declare namespace JSX {
  interface IntrinsicElements {
    "swiper-container": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      navigation: string;
      // Add more properties
    };
    "swiper-slide": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      // Add more properties
    };
  }
}
