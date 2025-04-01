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
    title: "Payroll Processing and Management",
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
    title: "Employee Benefits Administration",
    image: "/assets/image_3.png",
    text: "Streamline employee benefits administration, ensuring compliance and enhancing employee satisfaction.",
  },
  {
    id: 4,
    title: "Payroll Reporting and Analytics",
    image: "/assets/image_4.png",
    text: "Optimize payroll processes, generate insightful reports, and ensure regulatory compliance.",
  },
  //   {
  //     id: 5,
  //     title: "Legal Advisory Services",
  //     image: "/assets/image_4.png",
  //     text: "Expert legal guidance and counsel for businesses and individuals.",
  //   },
];

const PayRoll = () => {
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
                What are Payroll Administration Services?
              </Typography>
              <Box>
                <Typography variant="body1" sx={{ fontSize: 22, mt: 4 }}>
                  Payroll Administration Services involve the systematic
                  management of an organization's payroll processes,
                  encompassing tasks such as salary calculations, deductions,
                  tax withholdings, and benefits administration. These services
                  ensure timely and accurate payment to employees while
                  complying with relevant labor laws, tax regulations, and
                  internal policies. Additionally, payroll administrators may
                  oversee employee benefits enrollment, maintain accurate
                  payroll records, and generate comprehensive reports for
                  financial and regulatory purposes. By outsourcing payroll
                  administration, organizations can streamline operations,
                  reduce compliance risks, and free up internal resources to
                  focus on core business activities, ultimately fostering
                  greater efficiency and employee satisfaction.
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
                Why choose ICG for Payroll Administration Services?
              </Typography>
              <Box>
                <Typography variant="body1" sx={{ fontSize: 22, mt: 4 }}>
                  Choose ICG for Payroll Administration Services because we
                  offer comprehensive, accurate, and efficient payroll solutions
                  tailored to meet your organization's specific needs. Our
                  experienced team ensures timely and precise processing of
                  payroll transactions, including salary calculations,
                  deductions, and reimbursements. With a commitment to
                  compliance and attention to detail, we handle all
                  payroll-related taxes and statutory deductions, minimizing the
                  risk of errors and penalties. Additionally, our dedication to
                  client satisfaction means that you can trust us to deliver
                  exceptional service and support, allowing you to focus on your
                  core business priorities with confidence.
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
                What tasks are included in Payroll Administration Services?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography>
                Payroll Administration Services encompass various tasks such as
                salary calculations, deductions, tax withholdings, benefits
                administration, maintaining payroll records, and generating
                payroll reports.
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
                How does payroll administration help in ensuring compliance with
                labor laws and regulations?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography>
                Payroll administration ensures compliance by accurately
                calculating wages, adhering to minimum wage requirements,
                deducting taxes and contributions as per regulations, and
                maintaining proper records for audits.
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
                Can you explain the process of payroll processing and
                management?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography>
                Payroll processing involves gathering employee data, calculating
                wages, deducting taxes and other deductions, processing
                payments, and distributing paychecks or direct deposits. Payroll
                management includes overseeing the entire process, addressing
                any discrepancies, and ensuring compliance with relevant laws.
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
                What measures does ICG take to ensure accurate salary payments
                to employees?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography>
                ICG ensures accuracy by employing experienced payroll
                professionals, implementing robust payroll software systems,
                conducting regular audits, and cross-checking data to minimize
                errors in salary payments.
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
                How does ICG handle statutory compliance related to payroll?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography>
                ICG stays updated with labor laws and regulations, conducts
                regular compliance audits, ensures accurate tax withholdings and
                contributions, and provides timely filings and submissions to
                regulatory authorities.
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
                What sets ICG apart from other consulting firms in terms of its
                approach to HR policies and statutory compliance?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white",
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
                What role does payroll administration play in managing employee
                benefits?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography>
                Payroll administration manages employee benefits by accurately
                calculating and disbursing benefit contributions, tracking
                employee enrollments and changes, and ensuring compliance with
                benefit-related laws and regulations.
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
                How does ICG streamline employee benefits administration
                processes?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography>
                ICG streamlines processes through automation, online
                self-service portals for employees, centralizing benefits
                administration, and providing dedicated support for
                benefits-related inquiries and issues.
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
                What types of reports and analytics does ICG provide for payroll
                management?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography>
                ICG provides comprehensive reports and analytics on payroll
                expenses, tax withholdings, benefits utilization, labor costs,
                and compliance metrics to help organizations make informed
                decisions.
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
                How does outsourcing payroll administration to ICG benefit
                organizations?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "white",
              }}
            >
              <Typography>
                Outsourcing payroll administration to ICG reduces administrative
                burden, ensures compliance, minimizes errors, enhances data
                security, provides access to expertise, and frees up internal
                resources for core business activities.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Grid>
    </Box>
  );
};

export default PayRoll;
