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
    title: "Development and Review of HR Policies",
    text: "Develop and review HR policies to align with organizational objectives and legal requirements.",
    image: "/assets/image_1.png",
    // page: "icg/hr/hrPlanning",
  },
  {
    id: 2,
    title: "Statutory Compliance",
    image: "/assets/image_2.png",
    text: "Ensuring adherence to legal regulations and requirements in organizational operations.",
  },
  {
    id: 3,
    title: "Employee Handbook Development",
    image: "/assets/image_3.png",
    text: "Creating comprehensive policies and guidelines to guide employee behavior and expectations.",
  },
  {
    id: 4,
    title: "Training and Education",
    image: "/assets/image_4.png",
    text: "Enhancing skills and knowledge through structured learning programs and courses.",
  },
  {
    id: 5,
    title: "Legal Advisory Services",
    image: "/assets/image_4.png",
    text: "Expert legal guidance and counsel for businesses and individuals.",
  },
];

const HrPolicy = () => {
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
            fontSize: { md: 80, xs: 50 },
            // pl: { md: 23 },
            px: { md: 8 },
          }}
        >
          HR Planning
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
                What are HR Policies & Statutory Compliance?{" "}
              </Typography>
              <Box>
                <Typography variant="body1" sx={{ fontSize: 22, mt: 4 }}>
                  HR policies are guidelines and rules set by an organization to
                  govern its employees' behavior and actions in various
                  workplace situations. Statutory compliances refer to adhering
                  to laws, regulations, and legal requirements mandated by the
                  government or relevant authorities. Legal guidance is
                  essential for HR policies and statutory compliances to ensure
                  that they align with current laws and regulations, minimizing
                  the risk of legal disputes or penalties. Legal experts provide
                  invaluable advice on interpreting complex laws, drafting
                  policies in compliance with regulations, and staying updated
                  on changes in legislation to safeguard the organization's
                  interests and maintain a fair and legally compliant work
                  environment.
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
                Why choose ICG for HR Policies & Statutory Compliance?
              </Typography>
              <Box>
                <Typography variant="body1" sx={{ fontSize: 22, mt: 4 }}>
                  Opt for ICG for HR Policies & Statutory Compliance as we
                  provide comprehensive solutions customized to your
                  organization's requirements. Our services guarantee legal
                  compliance, risk mitigation, and the cultivation of a positive
                  work environment. With our tailored approach, we address
                  specific needs, offering expert guidance and support to
                  navigate complex regulatory landscapes. Trust ICG to ensure
                  that your HR policies and practices align seamlessly with
                  statutory requirements, minimizing legal risks and promoting a
                  harmonious workplace culture.
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
                What specific HR policies does ICG develop or review to align
                with organizational objectives and legal requirements?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
              }}
            >
              <Typography>
                ICG specializes in developing and reviewing a wide range of HR
                policies, including those related to employee conduct,
                anti-discrimination, harassment prevention, leave management,
                and confidentiality, ensuring alignment with organizational
                objectives and legal requirements.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
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
                How does ICG ensure statutory compliance in various
                organizational operations and processes?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
              }}
            >
              <Typography>
                ICG conducts thorough audits and assessments of organizational
                operations and processes to identify areas of non-compliance
                with statutory regulations. Through tailored solutions and
                regular monitoring, we ensure that our clients meet all legal
                obligations, minimizing the risk of penalties or legal disputes.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: { md: 20, xs: 18 },
                  fontWeight: "bold",
                  bgcolor: "white", // Ensures the details section also has a white background
                }}
              >
                {" "}
                Can ICG assist in the development of an employee handbook
                tailored to our organization's needs and legal obligations?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
              }}
            >
              <Typography>
                Yes, ICG offers customized assistance in developing an employee
                handbook that reflects your organization's unique culture,
                policies, and legal obligations. Our team works closely with you
                to ensure that the handbook effectively communicates
                expectations and guidelines to employees while adhering to
                relevant laws and regulations.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
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
                What types of training and education programs does ICG offer to
                enhance employee understanding of HR policies and statutory
                compliance?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
              }}
            >
              <Typography>
                ICG provides a variety of training and education programs
                tailored to enhance employee understanding of HR policies and
                statutory compliance. These may include workshops, seminars,
                e-learning modules, and interactive sessions covering topics
                such as diversity and inclusion, sexual harassment prevention,
                and data protection.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
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
                How does ICG provide legal advisory services to businesses and
                individuals regarding HR policies and statutory compliance?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
              }}
            >
              <Typography>
                Our team of experienced legal professionals at ICG offers
                comprehensive advisory services to businesses and individuals on
                all aspects of HR policies and statutory compliance. We provide
                expert guidance on interpreting complex laws, drafting policies,
                handling legal disputes, and staying updated on regulatory
                changes.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
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
                Can ICG provide examples or case studies demonstrating
                successful outcomes in ensuring legal adherence and mitigating
                risks related to HR policies and statutory compliance?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
              }}
            >
              <Typography>
                ICG has a proven track record of successfully ensuring legal
                adherence and mitigating risks related to HR policies and
                statutory compliance. Our case studies demonstrate our ability
                to resolve compliance issues, prevent legal disputes, and
                protect our clients' interests effectively.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: { md: 20, xs: 18 },
                  fontWeight: "bold",
                  bgcolor: "white", // Ensures the details section also has a white background
                }}
              >
                {" "}
                What sets ICG apart from other consulting firms in terms of its
                approach to HR policies and statutory compliance?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
              }}
            >
              <Typography>
                What sets ICG apart is our proactive and client-focused approach
                to HR policies and statutory compliance. We prioritize
                understanding our clients' unique needs and challenges, offering
                personalized solutions that address their specific requirements
                while ensuring legal compliance and fostering a positive work
                environment.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
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
                How does ICG ensure ongoing support and updates to HR policies
                and compliance measures as regulations change?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
              }}
            >
              <Typography>
                ICG remains committed to providing ongoing support and updates
                to HR policies and compliance measures as regulations change. We
                stay abreast of developments in labor laws and industry best
                practices, proactively informing our clients of any changes and
                assisting them in implementing necessary updates.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
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
                Can ICG provide references or testimonials from clients who have
                benefited from its HR policies and statutory compliance
                services?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
              }}
            >
              <Typography>
                ICG is pleased to provide references or testimonials from
                satisfied clients who have benefited from our HR policies and
                statutory compliance services. These testimonials highlight our
                dedication to delivering high-quality solutions that meet our
                clients' needs and exceed their expectations.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                bgcolor: "white", // Ensures the details section also has a white background
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
                What measures does ICG take to ensure confidentiality and data
                protection when handling sensitive HR policy and compliance
                matters for clients?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography>
                At ICG, we prioritize confidentiality and data protection when
                handling sensitive HR policy and compliance matters for our
                clients. We adhere to strict confidentiality protocols and
                ensure that all client information is handled securely and in
                accordance with applicable privacy laws and regulations.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Grid>
    </Box>
  );
};

export default HrPolicy;
