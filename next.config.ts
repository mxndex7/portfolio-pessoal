import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
    Libera o `next dev` para ser aberto pelo IP da rede local (celular no
    mesmo Wi-Fi). Sem isso o Next 16 bloqueia os recursos de dev vindos de
    outro host e a página chega sem hidratar: menu, galeria e tema mortos.
    Vale só no dev — não afeta o build.
  */
  allowedDevOrigins: ["192.168.*.*"],
};

export default nextConfig;
