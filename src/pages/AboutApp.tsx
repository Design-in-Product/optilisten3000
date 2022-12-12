import { FC, useEffect, useRef } from "react";
import { BaseLayout } from "./BaseLayout";

import Fireworks from "../assets/images/Fireworks.png";
import LinkedIn from "../assets/images/LinkedIn.png";
import Facebook from "../assets/images/Facebook_light.png";
import { Grid, Hidden } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useParams } from "react-router-dom";

export const AboutAppPage: FC = () => {
  const aboutRef = useRef(null);
  const faqRef = useRef(null);
  const whoRef = useRef(null);

  const params = useParams();

  useEffect(() => {
    if (!params || !params.section) return;
    if (params.section === "about" && aboutRef.current != null) {
      (aboutRef!.current as any).scrollIntoView();
    } else if (params.section === "who" && whoRef.current != null) {
      (whoRef?.current as any).scrollIntoView();
    } else if (params.section === "faq" && faqRef.current != null) {
      (faqRef?.current as any).scrollIntoView();
    }
  }, [params]);

  return (
    <BaseLayout>
      <Grid
        container
        justifyContent={"center"}
        className="bg-darkBlue p-10  h-[400px]"
      >
        <Grid item md={8} container>
          <Hidden mdDown>
            <Grid item xs={6}>
              <p
                className="text-white font-sfpro-bold text-3xl pb-6"
                ref={aboutRef}
              >
                About OptiListen
              </p>
              <p className="text-white font-sfpro-regular text-xl">
                OptiListen helps you get better at listening. Quickly set goals
                and track how much time you’re speaking on video and audio
                calls. Unlock the listener within.{" "}
              </p>
              <div className="flex mt-4">
                <a href="https://www.facebook.com/longskymedia/">
                  <img
                    src={Facebook}
                    alt="Facebook"
                    width={40}
                    className="mr-4"
                  />
                </a>
                <a href="https://www.linkedin.com/company/long-sky-media/about/">
                  <img src={LinkedIn} alt="Linkedin" width={40} />
                </a>
              </div>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid item xs={12}>
              <div className="relative h-[270px]">
                <div className="flex justify-center absolute left-0 top-0 z-10">
                  <img src={Fireworks} alt="fireworks" className="w-full z-10" />
                </div>
                <div className="z-20 relative">
                  <p
                    className="text-white font-sfpro-bold text-3xl pb-6"
                    ref={aboutRef}
                  >
                    About OptiListen
                  </p>
                  <p className="text-white font-sfpro-regular text-xl">
                    OptiListen helps you get better at listening. Quickly set
                    goals and track how much time you’re speaking on video and
                    audio calls. Unlock the listener within.{" "}
                  </p>
                  <div className="flex mt-4">
                    <a href="https://www.facebook.com/longskymedia/">
                      <img
                        src={Facebook}
                        alt="Facebook"
                        width={40}
                        className="mr-4"
                      />
                    </a>
                    <a href="https://www.linkedin.com/company/long-sky-media/about/">
                      <img src={LinkedIn} alt="LinkedIn" width={40} />
                    </a>
                  </div>
                </div>
              </div>
            </Grid>
          </Hidden>
          <Hidden mdDown>
            <Grid item xs={6}>
              <div className="flex justify-center">
                <img src={Fireworks} alt="fireworks" className="w-3/4" />
              </div>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
      <div className="w-full h-10  bg-darkBlue curve-radius mt-[-1px]" />

      <Grid
        container
        justifyContent={"center"}
        className="p-10 mt-10 z-20 relative"
      >
        <Grid item md={8} container>
          <p
            className="text-darkBlue font-sfpro-bold text-3xl pb-6"
            ref={whoRef}
          >
            Who We Are
          </p>
          <p className="text-midNight font-sfpro-regular text-xl pb-6">
            Long Sky Media publishes books, makes apps, and tries to bring a wee
            bit of trout music to the world. OptiListen was created by Dan
            Brodnitz and Christian Crumlish, who also fancy themselves its first
            customers. The app was designed by Elaine Phong and developed by
            Fractal Labs. The website was designed by Josh Eisenstat. Rebecca
            Baror provided design direction.
          </p>
        </Grid>
      </Grid>

      <Grid container justifyContent={"center"} className="p-10 z-20 relative">
        <Grid item md={8} container>
          <p
            className="text-darkBlue font-sfpro-bold text-3xl pb-6"
            ref={faqRef}
          >
            Questions you may have
          </p>
          <Accordion sx={{ width: "100%" }} defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p className="text-midNight font-sfpro-regular text-xl">
                Why did you all make this app?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-midNight">
                We were working on our own listening skills, and realized that
                talk talk was going to break our spirits, so we created a
                hands-free app that could let us focus less on the buttons and
                more on trying to be a little more present for the people on our
                audio and video calls.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p className="text-midNight font-sfpro-regular text-xl">
                Do I need to wear headphones for the app to work?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-midNight">
                Yes -- that way the app hears that you are talking but not the
                other folks on the call.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p className="text-midNight font-sfpro-regular text-xl">
                Does the app collect any personal data?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-midNight">
                It doesn't -- no login, no data. All data is kept on your phone.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p className="text-midNight font-sfpro-regular text-xl">
                Are you all better listeners now?{" "}
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-midNight">
                Better, hopefully. But it's a journey! :-) Be, hear, now, good
                people!
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </BaseLayout>
  );
};
