import React from "react";
import Navbar from "../home/components/Navbar";
import { Box, makeStyles, Typography, Container } from "@material-ui/core";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({}));

const AboutUs = () => {
  return (
    <>
      <Navbar loginBtnShow={true} />
      <Container maxWidth="md">
        <Box my={4} py={4}>
          <Fade left delay={400}>
            <Typography variant="h1" color="initial" align="center">
              Who We Are?
            </Typography>
          </Fade>
          <Fade right delay={500}>
            <Typography variant="subtitle1" align="center">
              Tri-Pack Films Limited (Tri-Pack) – a joint venture between
              Mitsubishi Corporation of Japan and Packages Limited of Pakistan
              was incorporated as a Public Limited Company on April 29, 1993 to
              produce Biaxially Orientated Polypropylene (BOPP) Films in
              Pakistan. Its head office is based in Karachi and regional offices
              are located in Karachi, Lahore and Hattar where focus is to
              provide customers with dependable, economical and quality films
              backed by strong customer services. Tri-Pack is indeed proud of
              making distinctive contributions to the packaging industry in
              Pakistan.
            </Typography>
          </Fade>
          <Fade top delay={600}>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ margin: "20px 5px" }}
            >
              Since inception the Company has been on a growth trajectory and
              has come a long way from one BOPP Line of 5,400 tons to four BOPP
              Lines of 66,800 tons and two CPP Lines of over 17,000 tons.
            </Typography>
          </Fade>
          <Fade top delay={600}>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ margin: "20px 5px" }}
            >
              At Tri-Pack, our passion to cater to the needs of our customers
              lies at the heart of every endeavour. We go a long mile to get
              results, operate responsibly, apply innovative technology, execute
              with excellence, and capture new opportunities to create a
              wonderful world today for generations to come.
            </Typography>
          </Fade>
          <Fade top delay={600}>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ margin: "20px 5px" }}
            >
              Our people and our products are the hallmark of our success that
              give us the strength to endeavour to be amongst the front runners
              in delivering to our customers, shareholders and community. Status
              of the Company Tri-Pack Films limited is a Public Interest Company
              (PIC)
            </Typography>
          </Fade>
        </Box>
      </Container>
    </>
  );
};
export default AboutUs;
