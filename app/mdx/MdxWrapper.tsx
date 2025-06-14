import { useMDXComponent } from "next-contentlayer/hooks";

import CustomImage from "./components/Image";
import Link from "@/app/components/Link";
// import Map from "@/app/components/bento/Map";
import Alert from "./components/Alert";
import Weather from "./components/Weather";
import WeatherList from "./components/WeatherList";
import LinkPreview from "./components/LinkPreview";
import SeriesCollapsible from "./components/SeriesCollapsible";

interface CustomLinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

const CustomLink: React.FC<CustomLinkProps> = (props) => {
  const href = props?.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link {...props} href={href} underline>
        {props.children}
      </Link>
    );
  }
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="font-normal text-link underline underline-offset-4"
      {...props}
    />
  );
};

const components = {
  Image: CustomImage,
  a: CustomLink,
  Link: CustomLink,
  Alert: Alert,
  Weather: Weather,
  WeatherList: WeatherList,
  LinkPreview: LinkPreview,
  // Map: null,
  SeriesCollapsible: SeriesCollapsible,
};

export default function MdxWrapper({ code }: { code: string }) {
  const Component = useMDXComponent(code, { components });

  return <Component components={components} />;
}
