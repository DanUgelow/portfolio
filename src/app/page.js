import styles from "./page.module.scss";
import { Box, Typography, Divider, Tooltip } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Home() {
  const renderSocial = () => (
    <>
      <a
        href='https://www.linkedin.com/in/danugelow/'
        target='_blank'
        className={styles.linkedin}
      >
        <Tooltip title='LinkedIn' placement='bottom'>
          <LinkedInIcon />
        </Tooltip>
      </a>

      <a
        href='https://github.com/DanUgelow'
        target='_blank'
        className={styles.github}
      >
        <Tooltip title='GitHub' placement='bottom'>
          <GitHubIcon />
        </Tooltip>
      </a>
      {/* <a
        href='mailto:'
        target='_blank'
        className={styles.email}
      >
        <Tooltip title='Email' placement='bottom'>
          <EmailIcon />
        </Tooltip>
      </a> */}
    </>
  );

  return (
    <>
      <Box
        sx={{
          backgroundImage: 'url("papyrus.webp")',
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: -1,
          display: {
            md: "none",
          },
        }}
      />
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
              <Typography
                fontWeight='medium'
                sx={{
                  marginTop: "60px !important",
                }}
              >
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
                textAlign: "center",
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
