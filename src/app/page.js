import Image from "next/image";
import styles from "./page.module.scss";
import { Box, Typography, Divider } from "@mui/material";
import Experience from "@/components/Experience";
// import EmailIcon from "@mui/icons-material/Email";

export default function Home() {
  return (
    <>
      <Box className={styles.headerBackground}>
        <Box className={styles.container}>
          <Box className={styles.menu}>
            {/* <EmailIcon /> Contact */}
            <img src='GitHub_Logo.png' alt='linkedIn' />
            <img src='LI-logo.png' alt='linkedIn' />
          </Box>
          <Box className={styles.header}>
            <Box>
              <Typography
                variant='h1'
                fontWeight='bold'
                fontSize='2.5rem'
                color='#28282B'
              >
                Dan Ugelow
              </Typography>
              <Box className={styles.tagline}>
                <Typography variant='h2' fontSize='1.5rem' color='#28282B'>
                  Software Developer & UX Designer
                </Typography>
                <Divider color='#f4ad23' />
                <Divider color='#f4ad23' />
              </Box>
              <Typography variant='body1' color='#28282B'>
                I&apos;m a Front End Developer with experience building design
                language libraries, web/native apps, and designing for
                web/native, ranging from proof-of-concepts, improving user
                experiences, to delivering for marketing, business, and design
                initiatives.
              </Typography>
              <Typography variant='body1' color='#28282B'>
                Some of my specializations include React, accessibility, UX
                research/design, and code standards.
              </Typography>
            </Box>
            <Box className={styles.spacer}></Box>
            <Box className={styles.profilePicContainer}>
              <Box
                className={styles.profilePic}
                sx={{
                  backgroundImage: 'url("/profile-pic.png")',
                }}
              ></Box>
              <img src='profile-shape.png' alt='linkedIn' />
            </Box>
          </Box>
        </Box>
      </Box>
      <section>
        <Experience />
      </section>
    </>
  );
}
