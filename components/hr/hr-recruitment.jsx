"use client";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Container,
} from "@mui/material";
import React, { useState } from "react";
import Link from "next/link";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const cards = [
  {
    id: 1,
    title: "Job Analysis and Role Definition",
    text: "Assessing tasks, responsibilities, and qualifications for role clarity and effectiveness.",
    image: "/assets/image_1.png",
    // page: "icg/hr/hrPlanning",
  },
  {
    id: 2,
    title: "Candidate Sourcing and Screening",
    image: "/assets/image_2.png",
    text: "Strategically source and screen candidates to match organizational needs efficiently and effectively.",
  },
  {
    id: 3,
    title: "Tailored Recruitment Strategies",
    image: "/assets/image_3.png",
    text: "Customized approaches to attract and retain top talent efficiently.",
  },
  {
    id: 4,
    title: "Onboarding and Integration",
    image: "/assets/image_4.png",
    text: "Streamlining new hires' integration process to enhance productivity and engagement.",
  },
  {
    id: 5,
    title: "Assessment and Selection",
    image: "/assets/image_4.png",
    text: "Strategic methods for identifying and hiring top talent efficiently.",
  },
];

const HrRecruitment = () => {
  const [isHovered, setIsHovered] = useState(false);
  const CustomCard = ({ text, image, page, title }) => (
    //   <Link href={`/${page}`} passHref>
    <Box
      sx={{
        // border: "1px solid",
        display: "flex",
        flexDirection: "column",
        //  borderRadius: 2,
        //  boxShadow: 1,
        // "&:hover": { boxShadow: 6 },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        sx={{ objectFit: "cover" }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Box>
    //   </Link>
  );
  return (
    <Box>
      <Box>
        <Typography
          sx={{
            fontSize: { md: 70, xs: 50 },
            // pl: { md: 23 },
            px: { md: 8 },
          }}
        >
          Recruitment and Talent Acquisition Service
        </Typography>
      </Box>
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box sx={{ py: { md: 8, xs: 4 }, px: { md: 8, xs: 1 } }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={12}>
              <Typography
                sx={{
                  fontSize: { md: 36, xs: 26 },
                  textDecoration: "underline",
                  textUnderlineOffset: "0.4em",
                }}
              >
                What are Recruitment & Talent Acquisition Services?
              </Typography>
              <Box>
                <Typography variant="body1" sx={{ fontSize: 22, mt: 4 }}>
                  Recruitment & Talent Acquisition Services at Irish Consulting
                  Group (ICG) are crafted to empower organizations with a
                  skilled and motivated workforce. Understanding the paramount
                  importance of attracting and retaining top talent, we offer
                  comprehensive solutions. Our services include meticulous job
                  analysis, strategic candidate sourcing and screening, tailored
                  recruitment strategies, thorough assessment and selection
                  processes, and streamlined onboarding and integration. What
                  sets ICG apart is our commitment to tailoring strategies to
                  meet each organization's unique needs. Leveraging cutting-edge
                  technology and industry expertise, we attract top talent,
                  ensuring not only the requisite skills but also alignment with
                  organizational culture. Choose ICG for a strategic partnership
                  dedicated to your organizational growth through effective
                  talent acquisition practices.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box
                component="img"
                src="/assets/history_image.jpg"
                alt="Vision"
                sx={{
                  width: "100%",
                  height: 500,
                  borderRadius: "30px",
                  objectFit: "cover", // Ensures the image covers the area without stretching

                  //  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={6} alignItems="center" sx={{ mt: 2 }}>
            <Grid
              item
              xs={12}
              md={12}
              sx={{ backgroundColor: "#dde4f0", py: 4 }}
            >
              <Typography
                sx={{
                  fontSize: { md: 36, xs: 26 },
                  textDecoration: "underline",
                  textUnderlineOffset: "0.4em",
                }}
              >
                Why Choose ICG for Recruitment & Talent Acquisition Services?
              </Typography>
              <Box>
                <Typography variant="body1" sx={{ fontSize: 22, mt: 4 }}>
                  Choose ICG for Recruitment & Talent Acquisition Services for
                  our tailored approach, leveraging industry expertise to
                  attract top talent. We meticulously craft recruitment
                  strategies aligned with your organization's unique needs,
                  ensuring a seamless and efficient hiring process. Our
                  dedicated team employs cutting-edge techniques and technology
                  to source, assess, and onboard candidates who not only possess
                  the requisite skills but also align with your company culture
                  and values. With a commitment to excellence, we go beyond
                  traditional recruitment methods, offering comprehensive
                  support and guidance at every stage. From job analysis and
                  candidate sourcing to interview coordination and onboarding,
                  we provide personalized attention and proactive communication,
                  fostering lasting partnerships built on trust and mutual
                  success. With ICG, you gain a strategic partner dedicated to
                  driving your organization's growth and success through
                  effective talent acquisition practices.
                </Typography>
              </Box>
              <Grid item xs={12} md={12}>
                <Box
                  component="img"
                  src="/assets/history_image.jpg"
                  alt="Vision"
                  sx={{
                    width: "100%",
                    mt: 4,
                    height: 500,
                    borderRadius: "30px",
                    objectFit: "cover", // Ensures the image covers the area without stretching

                    //  borderRadius: "10px",
                    // boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontSize: 36,
              textDecoration: "underline",
              textUnderlineOffset: "0.4em",
            }}
          >
            Why choose ICG for HR Planning?
          </Typography>
          <Box>
            <Grid
              container
              spacing={6}
              justifyContent="center"
              sx={{ pt: 7 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {cards.map((card) => (
                <Grid
                  item
                  key={card.id}
                  xs={12}
                  sm={6}
                  display="flex"
                  justifyContent="center"
                >
                  <CustomCard {...card} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
        <Box
          sx={{
            justifyItems: "center",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            pt: 10,
            width: { md: "60%", xs: "100%" },
            bgcolor: "white",
          }}
        >
          <Typography sx={{ fontSize: 48, mb: 7 }}>
            Frequently Asked Questions
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                bgcolor: "white", // Sets the background color to white
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: { md: 20, xs: 18 },
                  fontWeight: "bold",
                  bgcolor: "white", // Sets the background color to white
                }}
              >
                What sets ICG's Recruitment & Talent Acquisition Services apart
                from others in the industry?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography>
                's Recruitment & Talent Acquisition Services stand out due to
                our tailored approach, leveraging industry expertise to attract
                top talent. We meticulously craft recruitment strategies aligned
                with your organization's unique needs, ensuring a seamless and
                efficient hiring process. payroll reports.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: { md: 20, xs: 18 },
                  fontWeight: "bold",
                  bgcolor: "white",
                }}
              >
                How does ICG ensure that the recruitment strategies are tailored
                to meet the unique needs of my organization?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography>
                ICG ensures that recruitment strategies are tailored by
                conducting in-depth consultations to understand your
                organization's culture, values, and specific requirements. We
                then craft personalized recruitment strategies that align with
                these factors, ensuring the best possible fit for your
                organization.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: { md: 20, xs: 18 },
                  fontWeight: "bold",
                  bgcolor: "white",
                }}
              >
                Can you provide examples of successful recruitment strategies
                implemented by ICG for other clients?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography>
                Certainly, ICG has successfully implemented various recruitment
                strategies for our clients, such as targeted job advertising,
                proactive candidate sourcing, and innovative candidate screening
                methods. These strategies have resulted in the successful hiring
                of top talent across various industries.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: { md: 20, xs: 18 },
                  fontWeight: "bold",
                  bgcolor: "white",
                }}
              >
                {" "}
                Can you provide examples of how ICG has helped clients improve
                their payroll processes and compliance measures? compliance?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography>
                Examples may include reducing payroll processing time,
                eliminating errors in salary calculations, ensuring timely tax
                filings, avoiding penalties for non-compliance, and implementing
                efficient payroll software systems.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: { md: 20, xs: 18 },
                  fontWeight: "bold",
                  bgcolor: "white",
                }}
              >
                {" "}
                What methods does ICG employ for candidate sourcing and
                screening to ensure a high-quality talent pool?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography>
                ICG employs a combination of methods for candidate sourcing and
                screening, including leveraging our extensive network, utilizing
                advanced sourcing tools, conducting thorough candidate
                assessments, and employing innovative screening techniques to
                ensure a high-quality talent pool.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: { md: 20, xs: 18 },
                  fontWeight: "bold",
                  bgcolor: "white",
                }}
              >
                How does ICG assess and select candidates to ensure they are the
                right fit for my organization?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography>
                ICG assesses and selects candidates through a rigorous screening
                and evaluation process that includes behavioral interviews,
                skills assessments, and cultural fit assessments. We ensure that
                candidates not only possess the necessary skills and
                qualifications but also align with your organization's values
                and culture.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: { md: 20, xs: 18 },
                  fontWeight: "bold",
                  bgcolor: "white",
                }}
              >
                What measures does ICG take to streamline the onboarding and
                integration process for new hires?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography>
                ICG streamlines the onboarding and integration process by
                providing comprehensive support and guidance to both candidates
                and clients. We offer personalized onboarding plans, conduct
                regular check-ins, and provide ongoing support to ensure a
                smooth transition for new hires.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: { md: 20, xs: 18 },
                  fontWeight: "bold",
                  bgcolor: "white",
                }}
              >
                What level of involvement can I expect from ICG throughout the
                recruitment process, from job analysis to onboarding?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography>
                You can expect a high level of involvement from ICG throughout
                the entire recruitment process. We work closely with you to
                conduct job analysis, develop tailored recruitment strategies,
                source and screen candidates, coordinate interviews, facilitate
                job offers, and provide support during the onboarding process.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: { md: 20, xs: 18 },
                  fontWeight: "bold",
                  bgcolor: "white",
                }}
              >
                How does ICG leverage technology and industry expertise to
                attract top talent for my organization?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography>
                ICG leverages cutting-edge technology and industry expertise to
                attract top talent for your organization. We utilize advanced
                sourcing tools, data analytics, and targeted advertising
                strategies to identify and engage with qualified candidates,
                ensuring a steady flow of high-quality talent.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: { md: 20, xs: 18 },
                  fontWeight: "bold",
                  bgcolor: "white",
                }}
              >
                {" "}
                Can ICG assist with specialized recruitment needs, such as
                executive-level positions or niche skill sets?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography>
                Absolutely, ICG specializes in recruiting for executive-level
                positions and niche skill sets. Our experienced recruiters have
                the expertise and industry connections to effectively source,
                screen, and select candidates for even the most specialized
                roles within your organization.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: { md: 20, xs: 18 },
                  fontWeight: "bold",
                  bgcolor: "white",
                }}
              >
                What kind of support does ICG provide post-recruitment to ensure
                the long-term success and retention of hired candidates?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography>
                ICG provides ongoing support post-recruitment to ensure the
                long-term success and retention of hired candidates. We offer
                coaching and development opportunities, conduct regular
                check-ins, and provide resources to support career growth and
                advancement within your organization. Additionally, we remain
                available to address any concerns or challenges that may arise,
                ensuring a positive and rewarding experience for both candidates
                and clients alike.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Grid>
    </Box>
  );
};

export default HrRecruitment;
