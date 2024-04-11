import Image from "./image";
import Typography from "@mui/material/Typography";
import { useResponsive } from "src/hooks/use-responsive";
import CardContent from "@mui/material/CardContent";

export default function HeroImage({ imgURL, title, description }) {
  const mdUp = useResponsive("up", "md");

  return (
    <>
      {mdUp && <Image src={imgURL} ratio={"9/2"} />}
      {!mdUp && <Image src={imgURL} ratio={"4/3"} />}
      {mdUp && (
        <CardContent
          sx={{
            left: "18%",
            top: "10vw",
            maxWidth: 540,
            textAlign: "left",
            position: "absolute",
            color: "common.black",
          }}
        >
          <Typography variant="h2" color={"common.white"}>
            {title}
          </Typography>
          <Typography color={"common.white"}>{description}</Typography>
        </CardContent>
      )}

      {!mdUp && (
        <CardContent
          sx={{
            left: "18%",
            top: "30vw",
            maxWidth: 540,
            textAlign: "left",
            position: "absolute",
            color: "common.black",
          }}
        >
          <Typography variant="h2" color={"common.white"}>
            {title}
          </Typography>
          <Typography color={"common.white"}>{description}</Typography>
        </CardContent>
      )}
    </>
  );
}
