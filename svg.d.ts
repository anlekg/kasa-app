declare module "*.svg" {
    import { FunctionComponent, SVGProps } from "react";
    const content: FunctionComponent<SVGProps<SVGSVGElement>>;  // Assure-toi que SVGProps est bien utilisé
    export default content;
  }