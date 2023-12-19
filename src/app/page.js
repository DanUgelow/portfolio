import Image from "next/image";
import styles from "./page.module.scss";
import { Box, Typography, Divider, useMediaQuery } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
// import Experience from "@/components/Experience";
// import EmailIcon from "@mui/icons-material/Email";

export default function Home() {
  // const isDesktop = useMediaQuery("(min-width:900px)");

  const renderSocial = () => (
    <>
      <a
        href='https://www.linkedin.com/in/danugelow/'
        target='_blank'
        className={styles.linkedin}
      >
        <LinkedInIcon />
      </a>
      <a
        href='https://github.com/DanUgelow'
        target='_blank'
        className={styles.github}
      >
        <GitHubIcon />
      </a>
      <a
        href='mailto:dan.ugelow@gmail.com'
        target='_blank'
        className={styles.email}
      >
        <EmailIcon />
      </a>
    </>
  );

  return (
    <>
      <Box className={styles.container}>
        <Box className={styles.card}>
          <Box className={styles.infoContainer}>
            <Box className={styles.info}>
              <Typography
                variant='h1'
                fontWeight='medium'
                fontSize='2.5rem'
                color='#28282B'
              >
                Dan Ugelow
              </Typography>
              <Typography variant='h2' fontSize='1.5rem' color='#28282B'>
                Software Developer & UX Designer
              </Typography>
              <Divider color='#f4ad23' />
              <Divider color='#f4ad23' />
              <Typography fontWeight='medium'>
                I am a developer and UX designer with a passion for design
                systems, elegant UI, accessibility, and standards. My experience
                ranges from building web/native apps and prototypes, improving
                user experiences, to delivering for marketing, business, and
                design initiatives.
              </Typography>
              <Typography fontWeight='medium'>
                You may have seen me at...
              </Typography>
              <Box>
                <Typography fontWeight='bold'>
                  Care.com
                  <br />
                  E*TRADE
                  <br />
                  AT&T <br />
                  JUICE Pharma Worldwide LLC
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
                marginTop: "40px",
              }}
            >
              {renderSocial()}
            </Box>
          </Box>
          <Box
            className={styles.profile}
            sx={{
              backgroundImage: {
                xs: "none",
                md: 'url("dark-paths.png")',
              },
              backgroundColor: { xs: "white" },
            }}
          >
            <Box className={styles.profilePicContainer}>
              <Box
                className={styles.profilePic}
                sx={{
                  backgroundImage: 'url("profile-pic.png")',
                }}
              ></Box>
              <img src='profile-shape.png' alt='' />
            </Box>
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            >
              {renderSocial()}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
